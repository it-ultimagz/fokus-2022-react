import React from 'react'
import { Flex } from "@chakra-ui/react"

export const Section = (props) => {
  return (
    <Flex
      as="section"
      bgSize="cover"
      bgPosition="center"
      justifyContent="center"
      alignItems="center"
      px={{ base: "2rem", md: "5rem", xl: "12rem" }}
      {...props}
    >
      {props.children}
    </Flex>
  )
}
