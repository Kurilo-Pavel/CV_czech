const Animate = [
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        visibility: "visible"
      },
      end: {
        opacity: "1",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        transform: "scale(0) rotate(180deg)",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        transform: "scale(0) rotate(180deg)",
        visibility: "visible"
      },
      end: {
        opacity: "1",
        transform: " scale(100%)",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        transform: "rotateY(-50deg) translateX(-10%) scale(50%)",
        left: "-50%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        transform: "rotateY(0deg) scale(100%)",
        left: "50%",
        visibility: "visible"
      },
      end: {
        opacity: "1",
        transform: "rotateY(0deg)",
        left: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        transform: "rotateY(50deg) translateX(10%) scale(50%)",
        left: "50%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        transform: "rotateY(0deg) scale(100%)",
        left: "-100%",
        visibility: "visible"
      },
      end: {
        opacity: "1",
        transform: "rotateY(0deg)",
        left: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        transform: "rotateX(50deg)",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        transform: "rotateX(0deg) ",
        top: "50%",
        visibility: "hidden"
      },
      end: {
        opacity: "1",
        transform: "rotateX(0deg)",
        top: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        transform: "rotateX(50deg) translateY(-10%) scale(50%)",
        top: "-50%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        transform: "rotateX(0deg) scale(100%)",
        top: "50%",
        visibility: "hidden"
      },
      end: {
        opacity: "1",
        transform: "rotateX(0deg)",
        top: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        top: "-100%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        top: "100%",
        visibility: "hidden"
      },
      end: {
        opacity: "1",
        top: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        top: "100%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        top: "-100%",
        visibility: "hidden"
      },
      end: {
        opacity: "1",
        top: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        left: "100%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        left: "-100%",
        visibility: "hidden"
      },
      end: {
        opacity: "1",
        left: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        left: "-100%",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        left: "100%",
        visibility: "hidden"
      },
      end: {
        opacity: "1",
        left: "0",
        visibility: "visible"
      }
    }
  },
  {
    prev: {
      start: {
        opacity: "1",
      },
      end: {
        opacity: "0",
        transform: "rotateX(-180deg) scale(50%)",
        visibility: "hidden"
      }
    },
    next: {
      start: {
        opacity: "0",
        transform: "rotateX(180deg) scale(50%)",
        visibility: "visible"
      },
      end: {
        opacity: "1",
        transform: "rotateX(0deg) scale(100%)",
        visibility: "visible"
      }
    }
  },
];
export {Animate};