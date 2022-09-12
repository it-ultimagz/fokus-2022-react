import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Section } from "../components/commons/Section";
import { AOS } from "../components/AOS";
import { fade } from "../shared/animation";
import { Link } from "react-router-dom";
import "./css/landing.css";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const notesVariants = {
  initial: { opacity: [0, 0.1, 0.3, 0.6, 1] },
  enter: {
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
};

const Landing = () => {
  return (
    <Section bgImage="/articles/napza/assets/image/landing/bg2.png" position="relative" overflow="hidden" backgroundPosition="revert">
      {/* <Image
            src="/articles/napza/assets/image/landing/papan.png"
            width="1700px"
            maxWidth="none"
            position="absolute"
            top="1vh"
            left="1vh"
            /> */}

      {/* section 1 */}
      <AOS variants={fade} triggerOnce={true} delay={0.2}>
        <Box position="absolute" width="320px" height="200px" top="22vh" left="25vh">
          <Link to="/inpus-peran-duta-anti-narkoba-umn">
            <Box
              className="one-overlay"
              width="320px"
              height="200px"
              maxWidth="none"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgColor="var(--fokus-blue)"
              zIndex={4}
              opacit="0"
            >
              <Text
                className="text-overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={5}
                fontFamily="National2"
                fontSize={{ xl: "5xl", lg: "6xl" }}
                color="var(--fokus-yellow)"
              >
                INPUS
              </Text>
            </Box>
          </Link>

          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/1-1.png"
          />

          <Image src="/articles/napza/assets/image/landing/1-2.png" width="130px" position="absolute" top="50%" left="50%" transform="translate(135%, -80%)" />

          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(190%, -230%)"
            zIndex={3}
          />
        </Box>
      </AOS>

      {/* section 2 */}
      <AOS variants={fade} triggerOnce={true} delay={0.4}>
        <Box position="absolute" width="280px" height="400px" top="17vh" left="95vh">
          <Link to="/relasi-narkoba-dan-ketenaran">
            <Box
              className="one-overlay"
              width="240px"
              height="270px"
              maxWidth="none"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgColor="var(--fokus-blue)"
              zIndex={4}
              opacit="0"
            >
              <Text
                className="text-overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={5}
                fontFamily="National2"
                fontSize={{ xl: "5xl", lg: "6xl" }}
                color="var(--fokus-yellow)"
              >
                NARKOBA
              </Text>
            </Box>
          </Link>

          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/2.png"
          />
          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-120%, -230%)"
            zIndex={3}
          />
        </Box>
      </AOS>

      {/* section 3 */}
      <AOS variants={fade} triggerOnce={true} delay={0.6}>
        <Box position="absolute" width="270px" height="400px" top="10vh" left="150vh">
          <Link to="/dilema-rokok-indonesia">
            <Box
              className="one-overlay"
              width="250px"
              height="290px"
              maxWidth="none"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgColor="var(--fokus-blue)"
              zIndex={4}
              opacit="0"
            >
              <Text
                className="text-overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={5}
                fontFamily="National2"
                fontSize={{ xl: "5xl", lg: "6xl" }}
                color="var(--fokus-yellow)"
              >
                ROKOK
              </Text>
            </Box>
          </Link>

          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/3.png"
          />
          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-210%, -230%)"
            zIndex={3}
          />
        </Box>
      </AOS>

      {/* section 4 */}
      <AOS variants={fade} triggerOnce={true} delay={0.8}>
        <Box position="absolute" width="420px" height="400px" top="50vh" left="130vh">
          <Link to="/fenomena-konsumsi-napza">
            <Box
              className="one-overlay"
              width="400px"
              height="300px"
              maxWidth="none"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgColor="var(--fokus-blue)"
              zIndex={4}
              opacit="0"
            >
              <Text
                className="text-overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={5}
                fontFamily="National2"
                fontSize={{ xl: "5xl", lg: "6xl" }}
                color="var(--fokus-yellow)"
              >
                NAPZA
              </Text>
            </Box>
          </Link>

          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/4.png"
          />
          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(100%, -300%)"
            zIndex={3}
          />
        </Box>
      </AOS>

      {/* section 5 */}
      <AOS variants={fade} triggerOnce={true} delay={1}>
        <Box position="absolute" width="300px" height="400px" top="60vh" left="75vh">
          <Link to="/">
            <Box
              className="one-overlay"
              width="280px"
              height="300px"
              maxWidth="none"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgColor="var(--fokus-blue)"
              zIndex={4}
              opacit="0"
            >
              <Text
                className="text-overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={5}
                fontFamily="National2"
                fontSize={{ xl: "5xl", lg: "6xl" }}
                color="var(--fokus-yellow)"
                textAlign="center"
                lineHeight="50px"
              >
                CHIT CHAT
              </Text>
            </Box>
          </Link>

          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/5.png"
          />
          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(280%, -290%)"
            zIndex={3}
          />
        </Box>
      </AOS>

      {/* section 6 */}
      <AOS variants={fade} triggerOnce={true} delay={1.2}>
        <Box position="absolute" width="270px" height="400px" top="50vh" left="30vh">
          <Link to="/film-tentang-isu-napza">
            <Box
              className="one-overlay"
              width="250px"
              height="300px"
              maxWidth="none"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgColor="var(--fokus-blue)"
              zIndex={4}
              opacit="0"
            >
              <Text
                className="text-overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={5}
                fontFamily="National2"
                fontSize={{ xl: "5xl", lg: "6xl" }}
                color="var(--fokus-yellow)"
              >
                FILM
              </Text>
            </Box>
          </Link>

          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/6.png"
          />
          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(110%, -60%)"
            zIndex={3}
          />
        </Box>
      </AOS>

      {/* section 7 */}
      <AOS variants={fade} triggerOnce={true} delay={1.4}>
        <Box position="absolute" width="170px" height="400px" top="30vh" left="70vh">
          <Image
            zIndex={1}
            width="100%"
            maxWidth="none"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            src="/articles/napza/assets/image/landing/7.png"
          />
          <Image
            src="/articles/napza/assets/image/landing/pin.png"
            width="50px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-45%, -140%)"
            zIndex={3}
          />
        </Box>
      </AOS>
    </Section>
  );
};

export default Landing;
