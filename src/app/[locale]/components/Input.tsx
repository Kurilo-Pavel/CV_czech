"use client";
import React from "react";
import classNames from "classnames";

type InputProps = {
  field: {
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
  };
  type: string;
  placeholder: string;
  className: string;
  isTitle: boolean;
  error?: string;
};

const Input = ({field, type, placeholder, className, isTitle, error}: InputProps) => {
  return <div className={`contact__block ${className}`}>
    {isTitle && <span className="contact__inputTitle">{placeholder}</span>}
    <input
      className={`contact__field`}
      type={type}
      placeholder={placeholder}
      {...field}
    />
    <span className={classNames("border_show", {"contact__errorBorder": error})}/>
    {error && <span className="contact__error">{error}</span>}
  </div>
};
export default Input;