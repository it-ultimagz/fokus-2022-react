import React from "react";
import { Section } from "../components/commons/Section";
import { AOS } from "../components/AOS";
import { Box, VStack, Heading, Text, Flex } from "@chakra-ui/react";
import { fadeInUp } from "../shared/animation";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const Fenomena = () => {
  return (
    <Box>
      <Section data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column">
        <VStack>
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "7xl" }}>
              SISI G<S>E</S>L<S>A</S>P DARI N<S>A</S>PZ<S>A</S>
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "7xl" }}>
              D<S>A</S>N PARA R<S>E</S>M<S>A</S>J<S>A</S>
            </Heading>
          </AOS>
        </VStack>
        <AOS triggerOnce={true} variants={fadeInUp} mt="5rem" textAlign="center" fontFamily="National2" fontSize="md" delay={1.2}>
          <Text>
            <b>Penulis:</b>{" "}
            <Box as="span" fontWeight="300">
              Carolyn Nathasa, Rizky Azzahra
            </Box>
          </Text>
          <Text>
            <b>Editor:</b>{" "}
            <Box as="span" fontWeight="300">
              Nadia Indrawinata
            </Box>
          </Text>
          <Text>
            <b>Foto:</b>{" "}
            <Box as="span" fontWeight="300">
              Margaretha Netha
            </Box>
          </Text>
        </AOS>
      </Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgImage="/assets/image/fenomena-napza/foto-obat.jpg" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column"></Section>
      <Flex data-key={1} flexDir="row" pos="relative" color="white">
        <Box bgColor="var(--fokus-blue)" h="100vh" w="100%"></Box>
        <Box bgColor="var(--fokus-yellow)" h="100vh" w="100%"></Box>
      </Flex>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir="column"></Section>
      <Section data-key={1} bgColor="var(--fokus-pink)" pos="relative" color="white" flexDir="column"></Section>
    </Box>
  );
};

export default Fenomena;
