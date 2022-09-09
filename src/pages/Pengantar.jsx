import { Box, Text, Image } from "@chakra-ui/react"
import React from "react"
import { Section } from "../components/commons/Section"
import "./css/landing.css"

const Span = (props) => {
    return (
        <Box 
        display="inline"
        {...props}
        >
          {props.children}
        </Box>
      );
}

const Pengantar = () => {
    return(
        <Section
        color="var(--fokus-blue)"
        bgColor="#edeae1"
        position="relative"
        fontFamily="National2"
        overflowY="hidden"
        display="flex"
        fontSize={{xl : "4xl", lg : "3xl"}}
        fontWeight="300"
        textAlign="center"
        >
            <Text>
                NAPZA erat dengan konotasi <Span color="var(--fokus-pink)">negatif</Span>. Namun, bila 
                digunakan dengan tepat, NAPZA memiliki dampak <Span color="var(--fokus-pink)">positif </Span> 
                bagi kesehatan tubuh dan dapat menjadi nilai budaya.
                <br /><b>Jadi, NAPZA itu baik atau buruk</b>
            </Text>
            
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
                src="/assets/image/landing/arrow.png"
                position="absolute"
                width="25px"
                top="25%"
                left="50%"
                transform="translate(-50%,-50%)"
                >
                
                </Image>
            </Box>
        </Section>
    )
}

export default Pengantar