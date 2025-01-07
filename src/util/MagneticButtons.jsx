import { useEffect } from "react";

export const MagneticButton = () => {
  return useEffect(() => {
    let width 
    const magnetElements = document.querySelectorAll(".magnet");
    if(width) return
    const handleMouseMove = (event) => {
      magnetElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const strength = 15;

        const moveX = (deltaX / distance) * strength;
        const moveY = (deltaY / distance) * strength;
        if (distance < 60) {
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          element.style.transform = `translate(${0}px, ${0}px)`;
        }
      });
    };

    const handleSize = (e) => {
       return e.clientWidth
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("resize", handleSize);
    return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.addEventListener("resize", handleSize);
    };
  }, []);
};
