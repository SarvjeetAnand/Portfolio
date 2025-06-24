import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings]);

  return <span className="typed" ref={el}></span>;
};

export default TypedText;
