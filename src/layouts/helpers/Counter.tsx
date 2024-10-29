import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({
  count,
  suffix,
  prefix,
  duration,
  start: initialStart,
  end: initialEnd,
}: {
  count: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  start?: number;
  end?: any;
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  useEffect(() => {
    if (inView) {
      setStart(initialStart);
      setEnd(initialEnd); 
    } else {
      setStart(initialEnd);
      setEnd(initialStart);
    }
  }, [inView, initialStart, initialEnd]);

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          {...(duration && { duration })}
          prefix={prefix}
          className="js"
          end={count ? +count : end}
          suffix={suffix}
          start={start}
        />
      )}
    </div>
  );
};

export default Counter;
