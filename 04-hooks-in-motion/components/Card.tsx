"use client";
import { Feature } from "@/global";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import React, { useRef } from "react";

export default function Card({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, 300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [10, 0, 0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div className="grid grid-cols-2 gap-20 items-center py-40" ref={ref}>
      <motion.div
        className="flex flex-col gap-5"
        style={{
          // filter: `blur(${blur}px)` // motion values cant be used with string interpolation
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
}
