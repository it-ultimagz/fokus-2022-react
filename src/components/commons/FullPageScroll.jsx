import React, { useEffect, useRef } from "react";
import { Box, Button } from "@chakra-ui/react";

export const FullPageScroll = (props) => {
  const scrollRef = useRef();
  let activeIndex = 0;

  useEffect(() => {
    const el = scrollRef.current;

    const wheelListener = (e) => {
      e.preventDefault();

      if (e.deltaY > 0 && activeIndex < props.children.length - 1) {
        activeIndex += 1;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        activeIndex -= 1;
      }

      el.scrollTo({
        top: el.offsetHeight * activeIndex,
        behavior: "smooth",
      });
    };

    if (el) {
      el.addEventListener("wheel", wheelListener);
      return () => el.removeEventListener("wheel", wheelListener);
    }
  }, []);

  const handleToTop = () => {
    const el = scrollRef.current;
    if (el) {
      activeIndex = 0;
      el.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      {...props}
      ref={scrollRef}
      h="100vh"
      overflowY={{ base: "auto", lg: "hidden" }}
    >
      {props.children}
      <Button
        pos="fixed"
        right="1.5rem"
        bottom="1rem"
        colorScheme="teal"
        onClick={handleToTop}
      >
        Go UP
      </Button>
    </Box>
  );
};
