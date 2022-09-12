import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Section } from "../components/commons/Section";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AOS } from "../components/AOS";
import { fadeInUp } from "../shared/animation.js";
import "./css/landing.css";

const MotionBox = motion(Box);

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const contentVariants = {
  enter: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, ...transition },
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: { delay: 0.2, ...transition },
  },
};

const Span = (props) => {
  return (
    <Box as="span" color="var(--fokus-pink)" display="inline" {...props}>
      {props.children}
    </Box>
  );
};

const Pengantar = () => {
  return (
    <Box bgColor="#edeae1" overflow="hidden">
      <MotionBox variants={contentVariants} initial="enter" animate="enter" exit="exit">
        <Section
          color="var(--fokus-blue)"
          position="relative"
          fontFamily="National2"
          overflowY="hidden"
          display="flex"
          fontSize={{ xl: "4xl", lg: "3xl" }}
          fontWeight="300"
          textAlign="center"
        >
          <AOS variants={fadeInUp} triggerOnce={true}>
            <Text>
              NAPZA erat dengan konotasi <Span>negatif</Span>. Namun, bila digunakan dengan tepat, NAPZA memiliki dampak <Span>positif </Span>
              bagi kesehatan tubuh dan dapat menjadi nilai budaya.
              <br />
              <b>Jadi, NAPZA itu baik atau buruk?</b>
            </Text>
          </AOS>

          <Link to="/fokus-2022">
            <Box
              className="blue-circle"
              position="absolute"
              width="200px"
              height="200px"
              borderRadius="50%"
              bgColor="var(--fokus-blue)"
              bottom="0"
              left="50%"
              transform="translate(-50%,50%)"
            >
              <Image
                className="arrow-circle"
                src="/articles/napza/assets/image/landing/arrow.png"
                position="absolute"
                width="25px"
                top="25%"
                left="50%"
                transform="translate(-50%,-50%)"
              ></Image>
            </Box>
          </Link>
        </Section>
      </MotionBox>
    </Box>
  );
};

export default Pengantar;
