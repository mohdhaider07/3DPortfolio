import { useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({
  from,
  to,
  text,
}: {
  from: number;
  to: number;
  text: string;
}) => {
  const [count, setCount] = useState(from);

  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <div className="counter" ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </div>
  );
};

export default Counter;