/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
function AnimatedTitle({ title, containerClass }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power1.inOut",
        stagger: 0.02,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full font-general font-extrabold flex-wrap text-6xl sm:text-7xl gap-2 px-10 md:gap-3 "
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle;