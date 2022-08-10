import React from "react";
import { Flex } from "@chakra-ui/react";

export const Section = (props) => {
  return (
    <Flex
      as="section"
      minH="100vh"
      bgSize="cover"
      bgPosition="center"
      justifyContent="center"
      alignItems="center"
      px={{ base: "2rem", md: "8rem", xl: "12rem", "2xl": "15rem" }}
      {...props}
    >
      {props.children}
    </Flex>
  );
};
