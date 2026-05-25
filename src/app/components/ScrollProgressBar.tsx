import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg, #0A4DA2 0%, #F5A000 60%, #ffca5a 100%)",
        zIndex: 99999,
        boxShadow: "0 0 10px rgba(245,160,0,0.6)",
      }}
    />
  );
}
