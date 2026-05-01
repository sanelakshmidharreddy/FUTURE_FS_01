
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const tagline = "Crafting AI-powered solutions and scalable full-stack applications with real-world impact.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(tagline.slice(0, i));
      i++;
      if (i > tagline.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col justify-center items-center text-center p-6 bg-background"
    >
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
        Lakshmidhar Reddy
      </h1>
      <p className="mt-2 text-xl font-medium text-primary">
        AI Engineer | Full Stack Developer | Machine Learning Enthusiast
      </p>
      <p className="mt-4 text-xl text-muted-foreground min-h-[3rem]">
        {text}
      </p>
    </motion.section>
  );
};
