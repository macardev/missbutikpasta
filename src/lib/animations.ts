import type { Transition } from "framer-motion";

export const mobileDuration = (duration: number, isMobile: boolean) =>
  isMobile ? duration * 0.5 : duration;

export const fadeInUp = (isMobile: boolean) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: mobileDuration(0.6, isMobile),
    ease: [0.25, 0.46, 0.45, 0.94] as Transition["ease"],
  },
});

export const staggerContainer = (isMobile: boolean) => ({
  initial: {},
  whileInView: { transition: { staggerChildren: mobileDuration(0.12, isMobile) } },
  viewport: { once: true, margin: "-50px" },
});

export const fadeInLeft = (isMobile: boolean) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: mobileDuration(0.6, isMobile),
    ease: [0.25, 0.46, 0.45, 0.94] as Transition["ease"],
  },
});

export const fadeInRight = (isMobile: boolean) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: mobileDuration(0.6, isMobile),
    ease: [0.25, 0.46, 0.45, 0.94] as Transition["ease"],
  },
});

export const scaleIn = (isMobile: boolean) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: mobileDuration(0.5, isMobile),
    ease: [0.25, 0.46, 0.45, 0.94] as Transition["ease"],
  },
});
