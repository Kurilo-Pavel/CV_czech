"use client";
import "@/app/[locale]/styles/page.css";
import MyCard from "@/app/[locale]/components/MyCard";
import Menu from "@/app/[locale]/components/Menu";
import MainButton from "@/app/[locale]/components/MainButton";
import BlockContent from "@/app/[locale]/components/BlockContent";
import {useEffect, useState} from "react";
import {MenuData} from "@/app/[locale]/data";
import {Delay, Duration} from "@/app/[locale]/constants.mjs";
import {Animate} from "@/app/[locale]/dataAnimate.mjs";
import Burger from "@/app/[locale]/components/Burger";
import Loading from "@/app/[locale]/loading";

const Page = () => {

  const [nameComponent, setNameComponent] = useState(MenuData()[0].id);
  const [component, setComponent] = useState(MenuData()[0].id);
  const [isOpen, setIsOpen] = useState<null | boolean>(null);
  const setAnimate = Animate as [];
  const [isLoading, setIsLoading] = useState(true);

  const random = () => {
    return Math.floor(Math.random() * (setAnimate.length));
  };

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const numAnimate = random();
    const elements = document.getElementsByClassName("section") as HTMLCollectionOf<Element>;
    let prevBlock: Element;
    let nextBlock: Element;
    setComponent((prevComponent) => {
      for (let block of Array.from(new Set(elements))) {
        const dataValue = block.getAttribute("data-value");
        if (dataValue === nameComponent) {
          nextBlock = block;
        }
        if (dataValue === prevComponent) {
          prevBlock = block;
        }
      }
      prevBlock.animate([
          Animate[numAnimate].prev.start,
          Animate[numAnimate].prev.end
        ],
        {
          duration: Duration,
          fill: "both",
          delay: Delay,
          easing: "ease"
        }
      );
      prevBlock && Promise.all(prevBlock.getAnimations({subtree: true}).map((animation) => animation.finished)
      ).then(() => {

        prevBlock.animate([
            {},
            {
              transform: "rotateY(0deg)",
              left: "0",
              top: "0",
              opacity: "1",
              visibility: firstRender ? "visible" : "hidden",
            }
          ], {
            fill: "both",
          }
        );
      });
      setFirstRender(false);

      nextBlock.animate([
          Animate[numAnimate].next.start,
          Animate[numAnimate].next.end,
        ],
        {
          duration: Duration,
          fill: "both",
          delay: Delay,
          easing: "ease"
        }
      );
      return nameComponent
    });

  }, [nameComponent]);

  return <div className={"page"}>
    <Burger
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
    <MyCard
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      nameComponent={nameComponent}
      setNameComponent={setNameComponent}/>
    <BlockContent/>
    {isLoading && <Loading/>}
    <Menu
      nameComponent={nameComponent}
      setNameComponent={setNameComponent}
      className="menu_visible"
    />
    <MainButton
      nameComponent={nameComponent}
      setNameComponent={setNameComponent}
    />
  </div>
};
export default Page;