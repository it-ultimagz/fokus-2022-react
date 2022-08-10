import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@chakra-ui/react";
const CustomComponent = motion(Box);

export const AOS = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "0px 0px",
    triggerOnce: props.triggerOnce,
  });
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
        type: "spring",
        stiffness: 100,
        delay: props.delay || 0.2,
      }}
    >
      {props.children}
    </CustomComponent>
  );
};
