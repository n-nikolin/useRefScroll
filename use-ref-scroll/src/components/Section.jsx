import React from "react";
import { forwardRef } from "react";

const Section = forwardRef(({index, i}, ref) => {
  return (
    <section
      className={i}
      ref={(el) => (ref.current = [...ref.current, el])}
    >
      <h1>{i}</h1>
    </section>
  );
});

export default Section;
