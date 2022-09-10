import React from "react";
import { Section } from "../components/commons/Section";
import { AOS } from "../components/AOS";
import { Box, VStack, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { fadeInUp } from "../shared/animation";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const Fenomena = () => {
  return (
    <Box>
      <Section data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column" overflowX="hidden">
          <Image pos="absolute" left="5vw" top="-13vw" src="/assets/image/fenomena-napza/Asset-31.png" maxW="28vw" />
          <Image pos="absolute" right="5vw" top="-13vw" src="/assets/image/fenomena-napza/Asset-29.png" maxW="30vw" />
          <Image pos="absolute" left="-13vw" bottom="2vw" src="/assets/image/fenomena-napza/Asset-30.png" maxW="30vw" />
          <Image pos="absolute" right="-10vw" bottom="0" src="/assets/image/fenomena-napza/Asset-32.png" maxW="38vw" />
        <VStack zIndex={2}>
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
      <Section overflowX="hidden" overflowY="hidden" maxH="100vh" data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir="column">
        <Image src="/assets/image/fenomena-napza/Asset-12.png" minW="110vw" />
        <Text pos="absolute" textAlign="justify" fontWeight="500" left="45vw" top="3vw" maxW="40vw" color="var(--fokus-blue)">
              Fenomena penggunaan NAPZA oleh anak-anak di bawah umur bukan lagi<br/>
              kejadian mengejutkan. Hal ini pun kerap menjadi topik pemberitaan<br/>
              pada media massa. Dampak penyalahgunaan obat-obatan terlarang dan<br/>
              zat psikotropika dalam jangka panjang juga mengancam kesehatan<br/>
              mahasiswa dan pelajar. 
        </Text>
      </Section>
      <Section maxH="100vh" overflowX="hidden" overflowY="hidden" data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column">
        <Flex>
          <Text textAlign="justify" color="var(--fokus-yellow)" my="auto" >
            Melansir laman bnn.go.id, tercatat sekitar 269 juta orang di dunia yang
            menyalahgunakan narkoba dalam World Drug Report UNODC 2020.
            Jumlah ini dapat dipersempit menurut data dari Dewan Pengurus Pusat
            Aliansi Relawan Perguruan Tinggi Anti Penyalahgunaan Narkoba (DPP
            Artipena) pada 2021. Data tersebut menyatakan bahwa 27 persen
            pengguna NAPZA di Indonesia merupakan mahasiswa dan pelajar.
            <br/><br/>
            Persebaran NAPZA sejak beberapa tahun silam di lingkungan anak-anak
            memang kerap membuat orang dewasa waswas. Hal ini dikarenakan
            barang terlarang tersebut dikemas dalam bentuk permen, bubuk asam
            manis, minuman, dan beberapa makanan yang mudah menarik
            perhatian anak.
          </Text>
          <Image src="/assets/image/fenomena-napza/Asset-33.png" maxW="55vw" me="-18vw" />
        </Flex>
      </Section>
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
