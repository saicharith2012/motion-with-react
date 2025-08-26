import "./App.css";
import { motion } from "motion/react";

function App() {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-lightblue-300 flex items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, #a7bed3 0.5px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{
          // rotate: 0,
          // opacity: 0,
        }}
        animate={{
          // rotate: [0, 10, 0],
          // opacity: 1,
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.1)",
          y: -5,
        }}
        whileTap={{
          y: 0,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="group relative text-amber-900 cursor-pointer px-12 py-4 rounded-lg bg-cream-300 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="group-hover:text-amber-500 transition-colors duration-300">
          Subscribe
        </span>
        <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-amber-300 to-transparent h-px w-3/4 mr-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 inset-x-0 -top-px bg-gradient-to-r from-transparent via-amber-300 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-amber-300 to-transparent h-px w-3/4 ml-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-amber-300 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}

export default App;
