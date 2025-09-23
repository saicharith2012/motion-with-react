"use client";
import { cards } from "@/constants/cards";
import { Card } from "@/global";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export const LayoutCards = () => {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrentCard(null));
  return (
    <div className="min-h-screen w-full bg-gray-100 py-10 relative">
      {currentCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full bg-black/50 backdrop-blur-sm fixed inset-0 z-10"
        ></motion.div>
      )}
      {currentCard && (
        <motion.div
          layoutId={`card-${currentCard.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[620px] w-90 rounded-xl border border-neutral-200 bg-white p-4 shadow"
        >
          <motion.div layoutId={`card-image-${currentCard.title}`}>
            {" "}
            <Image
              src={currentCard.src}
              alt={currentCard.title}
              className="rounded-lg"
              width={360}
              height={360}
            />
          </motion.div>

          <div className="flex justify-between items-center pt-3 pb-1">
            <div className="flex flex-col items-start justify-between gap-1">
              <motion.h2
                layoutId={`card-title-${currentCard.title}`}
                className="font-bold tracking-tight text-black"
              >
                {currentCard.title}
              </motion.h2>
              <motion.p
                layoutId={`card-desc-${currentCard.title}`}
                className="text-xs text-neutral-500"
              >
                {currentCard.description}
              </motion.p>
            </div>

            <Link target="_blank" href={currentCard.ctaLink}>
              <motion.div
                layoutId={`card-cta-${currentCard.title}`}
                className="px-2.5 py-0.5 bg-green-500 rounded-full text-[14px] text-white tracking-wide"
              >
                {currentCard.ctaText}
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-44 overflow-auto mt-2 custom-scrollbar"
          >
            <span
            //  className="[mask-image:linear-gradient(to_top,transparent_5%,black_80%)]"
            >
              {currentCard.content()}
            </span>
          </motion.div>
        </motion.div>
      )}
      <div className="max-w-xl mx-auto flex flex-col gap-10">
        {cards.map((card, index) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrentCard(card)}
            key={index}
            className="p-4 rounded-lg flex justify-between items-center cursor-pointer bg-white border border-neutral-200 shadow"
          >
            <div className="flex gap-4 items-center">
              <motion.div layoutId={`card-image-${card.title}`}>
                <Image
                  src={card.src}
                  alt={card.title}
                  className="aspect-square rounded-xl"
                  width={56}
                  height={56}
                />
              </motion.div>
              <div className="flex flex-col items-start justify-start gap-1">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-desc-${card.title}`}
                  className="text-xs text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2.5 py-0.5 bg-green-500 rounded-full text-[14px] text-white tracking-wide"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
