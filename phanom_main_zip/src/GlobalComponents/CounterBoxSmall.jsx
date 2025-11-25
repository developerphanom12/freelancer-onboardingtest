import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CounterBoxSmall = ({ target, label , border  }) => {
  const [count, setCount] = useState(0);
  const boxRef = useRef(null);
  const started = useRef(false); // to prevent reruns
  const duration = 5000;

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: boxRef.current,
      start: 'top 90%', // when 10% visible from bottom
      onEnter: () => {
        if (started.current) return;
        started.current = true;

        let start = 0;
        const increment = Math.ceil(target / (duration / 16));
        const interval = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(interval);
          }
          setCount(start);
        }, 16);
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [target]);

  return (
    <div
      ref={boxRef}
      className={`border bg-gradient-to-b from-[#F2E7FE] via-[#EEE7FE] to-[#FFFFFF] border-gray-400 text-center rounded-xl px-2 py-2`}
    >
      <h2 className=' text-[18px] font-medium'>{count}+</h2>
      <p className=' text-[13px]  text-[#4D4D4D]'>{label}</p>
    </div>
  );
};

export default CounterBoxSmall