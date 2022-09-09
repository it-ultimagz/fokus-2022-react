import { Box, Image } from "@chakra-ui/react"
import React from "react"
import { Section } from "../components/commons/Section"
import "./css/landing.css"


const Landing = () => {
    return(
        <Section
        bgImage="/assets/image/landing/bg2.png"
        position="relative"
        overflow="hidden"
        backgroundPosition="revert"
        >
            {/* <Image
            src="/assets/image/landing/papan.png"
            width="1700px"
            maxWidth="none"
            position="absolute"
            top="1vh"
            left="1vh"
            /> */}

            {/* section 1 */}
            <Box
            position="absolute"
            width="320px"
            height="200px"
            top="22vh"
            left="25vh"
            >
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
                zIndex={2}
                opacit="0"
                />

                <Image
                zIndex={1}
                width="100%"
                maxWidth="none"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                src="/assets/image/landing/1-1.png"
                />

                <Image
                src="/assets/image/landing/1-2.png"
                width="130px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(135%, -80%)"
                />
                
                <Image
                src="/assets/image/landing/pin.png"
                width="50px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(135%, -80%)"
                zIndex={3}
                />

            </Box>

            {/* section 2 */}
            <Box
            position="absolute"
            width="280px"
            height="400px"
            top="17vh"
            left="95vh"
            >
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
                    zIndex={2}
                    opacit="0"
                    />

                    <Image
                    zIndex={1}
                    width="100%"
                    maxWidth="none"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    src="/assets/image/landing/2.png"
                    />


            </Box>

             {/* section 3 */}
             <Box
            position="absolute"
            width="270px"
            height="400px"
            top="10vh"
            left="150vh"
            >
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
                    zIndex={2}
                    opacit="0"
                    />

                    <Image
                    zIndex={1}
                    width="100%"
                    maxWidth="none"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    src="/assets/image/landing/3.png"
                    />


            </Box>
            {/* section 4 */}
            <Box
            position="absolute"
            width="420px"
            height="400px"
            top="50vh"
            left="130vh"
            >
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
                    zIndex={2}
                    opacit="0"
                    />

                    <Image
                    zIndex={1}
                    width="100%"
                    maxWidth="none"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    src="/assets/image/landing/4.png"
                    />


            </Box>

            {/* section 5 */}
            <Box
            position="absolute"
            width="300px"
            height="400px"
            top="60vh"
            left="75vh"
            >
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
                    zIndex={2}
                    opacit="0"
                    />

                    <Image
                    zIndex={1}
                    width="100%"
                    maxWidth="none"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    src="/assets/image/landing/5.png"
                    />


            </Box>

            {/* section 6 */}
            <Box
            position="absolute"
            width="270px"
            height="400px"
            top="50vh"
            left="30vh"
            >
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
                    zIndex={2}
                    opacit="0"
                    />

                    <Image
                    zIndex={1}
                    width="100%"
                    maxWidth="none"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    src="/assets/image/landing/6.png"
                    />


            </Box>
        </Section>
    )
}

export default Landing