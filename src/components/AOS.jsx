import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@chakra-ui/react";
let CustomComponent = motion(Box);

export const AOS = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "0px",
    triggerOnce: props.triggerOnce,
    threshold: props.threshold || 0.8,
  });

  if (props.component) {
    CustomComponent = motion(props.as);
  }

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else if (!inView && !props.triggerOnce) {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <CustomComponent
      {...props}
      ref={ref}
      animate={controls}
      initial="exit"
      variants={props.variants}
      transition={{
        type: props.linear ? "linear" : "spring",
        stiffness: props.stiffness || 100,
        delay: props.delay || 0.2,
      }}
    >
      {props.children}
    </CustomComponent>
  );
};
