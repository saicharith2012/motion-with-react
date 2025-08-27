"use client";
import Image from "next/image";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconRefresh,
  IconX,
} from "@tabler/icons-react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function Card() {
  const [open, setOpen] = useState(true);
  const CardContents: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[] = [
    {
      icon: <IconMessage />,
      title: "Aceternity UI Components",
      description: "A collection of UI components",
    },
    {
      icon: <Icon24Hours />,
      title: "24 hours turnaround",
      description: "Super fast delivery at warp speed",
    },
    {
      icon: <Icon360View />,
      title: "360 days all around",
      description: "We're here to help you 24/7",
    },
    {
      icon: <Icon3dCubeSphere />,
      title: "Some other components",
      description: "Here goes another subtitle",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.93, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="group fixed top-4 right-4 cursor-pointer bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-green-100 active:bg-green-200 transition-colors duration-300 rounded-md flex items-center justify-center"
      >
        <div className="h-6 w-6 m-3 text-neutral-500">
          <IconRefresh />
        </div>
        <div className="absolute -bottom-[35px] right-0 opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity duration-300 px-2 py-0.5 bg-green-100 rounded-lg text-sm shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] text-nowrap">
          refresh page
        </div>
      </motion.div>
      <AnimatePresence>
        {/* exit animations work only if the boolean that's making the transition is directly surrounded by the AnimatePresence tag. */}
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.93,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.93,
              filter: "blur(10px)",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className={`w-110 h-[40rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-8 flex flex-col bg-green-100`}
          >
            <h2 className="font-bold text-[18px]">Aceternity UI Components</h2>
            <p className="text-neutral-500 mt-2 text-[14px]">
              A collection of beautiful UI components, let&apos;s get on with
              it.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 mt-5 mb-6 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md p-2.5 bg-green-200 cursor-pointer"
              >
                <Image width={24} height={24} alt="logo" src="/logo.png" />
                <span>Aceternity</span>
                <IconX className="h-5 w-5 text-green-600" />
              </button>
            </div>
            <div className="relative bg-green-100 flex-1 rounded-lg border-2 border-dashed border-green-200 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.93, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute inset-0 h-full w-full rounded-lg bg-green-50 divide-y-2 divide-green-100 flex flex-col"
              >
                {CardContents.map((content, index) => (
                  <div key={index} className="flex gap-5 p-4 items-center">
                    <div className="flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-green-100 rounded-md flex items-center justify-center">
                      <div className="h-6 w-6 m-3 text-neutral-500">
                        {content.icon}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-bold text-neutral-500">
                        {content.title}
                      </p>
                      <p className="text-neutral-400 text-[14px] mt-1.5">
                        {content.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex-1 flex gap-3 items-center justify-center cursor-pointer">
                  <div className="flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-green-100 rounded-2xl flex items-center justify-center">
                    <div className="h-6 w-6 m-2 text-neutral-500">
                      <IconPlus />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-neutral-500 mt-1">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
