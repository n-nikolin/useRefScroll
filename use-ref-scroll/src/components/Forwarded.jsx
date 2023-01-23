import { forwardRef } from "react";

const Forwarded = forwardRef((props, ref) => {
  return (
    <section className="forward" ref={ref}>
      <h1>forwarded to ref</h1>
    </section>
  );
});

export default Forwarded;
