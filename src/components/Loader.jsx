import { useEffect, useRef } from "react";
import gsap from "gsap";

import logoSymbol from "../assets/logo/guqi-symbol.svg";

export default function Loader() {
  const container = useRef(null);
  const logo = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logo.current,
      {
        scale: 0.55,
        opacity: 0,
        rotate: -8,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power3.out",
      }
    )

      .fromTo(
        text.current,
        {
          y: 12,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: .6,
          ease: "power3.out",
        },
        "-=.45"
      )

      .to(
        logo.current,
        {
          filter:
            "drop-shadow(0 0 18px rgba(214,177,94,.45))",
          duration: .5,
          yoyo: true,
          repeat: 1,
        }
      );

  }, []);

  return (
    <div
      ref={container}
      className="loader-screen"
    >
      <div className="loader-content">

        <img
          ref={logo}
          src={logoSymbol}
          alt="GU-QI"
          className="loader-symbol"
        />

        <span
          ref={text}
          className="loader-text"
        >
          GU-QI
        </span>

      </div>
    </div>
  );
}