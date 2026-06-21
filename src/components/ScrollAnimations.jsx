import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const fadeItems = gsap.utils.toArray(
      ".section-header, .therapy-card, .catalog-card, .condition-card, .approach-card, .process-step, .course-card, .element-card, .benefit-card, .contact-form, .contact-info-panel, .footer-brand, .footer-column"
    );

    const mediaItems = gsap.utils.toArray(
      ".hero-media, .philosophy-media, .therapy-detail-image, .contact-video-hero"
    );

    fadeItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: (index % 4) * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
        }
      );
    });

    mediaItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
        }
      );
    });

    gsap.fromTo(
      ".hero-copy",
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location.pathname]);

  return null;
}