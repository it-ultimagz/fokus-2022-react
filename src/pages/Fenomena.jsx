import React from "react";
import { Section } from "../components/commons/Section";
import { AOS } from "../components/AOS";
import { Box, VStack, Heading, Text, Flex, Image, UnorderedList, ListItem, Center } from "@chakra-ui/react";
import { fadeInUp, fadeInRight, fadeInLeft, zoomIn } from "../shared/animation";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const Fenomena = () => {
  return (
    <Box>
      <Section data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column" overflowX="hidden">
        <Image pos="absolute" left="5vw" top="-13vw" src="/articles/napza/assets/image/fenomena-napza/Asset-31.png" maxW="28vw" />
        <Image pos="absolute" right="5vw" top="-13vw" src="/articles/napza/assets/image/fenomena-napza/Asset-29.png" maxW="30vw" />
        <Image pos="absolute" left="-13vw" bottom="2vw" src="/articles/napza/assets/image/fenomena-napza/Asset-30.png" maxW="30vw" />
        <Image pos="absolute" right="-10vw" bottom="0" src="/articles/napza/assets/image/fenomena-napza/Asset-32.png" maxW="38vw" />
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
        <AOS triggerOnce={true} variants={fadeInUp} mt="5rem" textAlign="center" fontFamily="National2" fontSize="md" delay={1}>
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
        <AOS pos="absolute" variants={fadeInUp} delay={0.2} triggerOnce={true} threshold={0.2}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-12.png" w="100%" h="100%" objectFit="cover" />
        </AOS>
        <AOS variants={fadeInUp} triggerOnce={true} pos="absolute" top="3rem" left={{ base: "15vw", md: "40vw", xl: "45vw" }} delay={0.8}>
          <Text
            textAlign="justify"
            fontWeight="500"
            maxW={{ base: "80%", md: "80%", xl: "50%" }}
            color="var(--fokus-blue)"
            fontFamily="National2"
            fontSize="lg"
          >
            Fenomena penggunaan NAPZA oleh anak-anak di bawah umur bukan lagi kejadian mengejutkan. Hal ini pun kerap menjadi topik pemberitaan pada media
            massa. Dampak penyalahgunaan obat-obatan terlarang dan zat psikotropika dalam jangka panjang juga mengancam kesehatan mahasiswa dan pelajar.
          </Text>
        </AOS>
      </Section>
      <Section
        maxH="100vh"
        overflowX="hidden"
        overflowY="hidden"
        data-key={1}
        bgColor="var(--fokus-blue)"
        pos="relative"
        color="white"
        flexDir="column"
        alignItems="flex-start"
      >
        <VStack
          zIndex={1}
          w={{ base: "100%", md: "70%", xl: "50%" }}
          fontFamily="National2"
          fontSize={{ base: "lg", md: "xl" }}
          color="var(--fokus-yellow)"
          spacing="2rem"
        >
          <AOS variants={fadeInUp} triggerOnce={true} delay={0.6}>
            <Text my="auto">
              Melansir laman <em>bnn.go.id</em>, tercatat sekitar 269 juta orang di dunia yang menyalahgunakan narkoba dalam World Drug Report UNODC 2020.
              Jumlah ini dapat dipersempit menurut data dari Dewan Pengurus Pusat Aliansi Relawan Perguruan Tinggi Anti Penyalahgunaan Narkoba (DPP Artipena)
              pada 2021. Data tersebut menyatakan bahwa 27 persen pengguna NAPZA di Indonesia merupakan mahasiswa dan pelajar.
            </Text>
          </AOS>
          <AOS variants={fadeInUp} triggerOnce={true} delay={0.8}>
            <Text>
              Persebaran NAPZA sejak beberapa tahun silam di lingkungan anak-anak memang kerap membuat orang dewasa waswas. Hal ini dikarenakan barang terlarang
              tersebut dikemas dalam bentuk permen, bubuk asam manis, minuman, dan beberapa makanan yang mudah menarik perhatian anak.
            </Text>
          </AOS>
        </VStack>
        <AOS variants={fadeInRight} pos="absolute" right={0} bottom={0} h="100%" delay={0.2} triggerOnce={true} threshold={0.2}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-33.png" h={{ base: "50%", md: "60%", xl: "80%", "2xl": "100%" }} />
        </AOS>
      </Section>
      <Section data-key={1} bgImage="/articles/napza/assets/image/fenomena-napza/foto-obat.jpg" pos="relative" color="white" flexDir="column">
        <AOS
          variants={fadeInUp}
          triggerOnce={true}
          pos="absolute"
          top="10rem"
          right={{ base: "10", md: "10vw", xl: "15vw" }}
          maxW={{ base: "80%", md: "80%", xl: "25%" }}
        >
          <Text fontFamily="National2" fontSize={{ base: "xl", md: "2xl" }} color="var(--fokus-yellow)">
            Berdasarkan beberapa kasus yang terjadi, terdapat tiga faktor utama penyebab terpaparnya mahasiswa dan anak terjebak dalam penyalahgunaan obat
            terlarang.
          </Text>
        </AOS>
      </Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir={{ base: "column", md: "row" }}>
        <AOS w={{ base: "80%", md: "30%", xl: "50%" }} variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-13.png" />
        </AOS>
        <AOS
          fontFamily="National2"
          pl={{ base: "5rem", md: 0 }}
          pt={{ base: "5rem", md: 0 }}
          w={{ base: "100%", md: "70%", xl: "50%" }}
          variants={fadeInUp}
          delay={0.2}
          triggerOnce={true}
        >
          <VStack textAlign="left" alignItems="flex-start" spacing="2rem" fontWeight={300} color="var(--fokus-black)">
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "4xl", xl: "4xl", "2xl": "7xl" }} color="var(--fokus-black)">
              FAK<S>T</S>O<S>R</S>
              <br />I<S>N</S>TERNAL
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Anak-anak biasanya memiliki rasa keingintahuan yang tinggi. Meskipun berdampak baik, tidak jarang keingintahuan mereka kadang malah menjerumuskan
              ke hal-hal seperti penggunaan NAPZA dan minuman keras.
            </Text>
          </VStack>
        </AOS>
      </Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir={{ base: "column", md: "row" }}>
        <AOS w={{ base: "80%", md: "30%", xl: "50%" }} variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-14.png" />
        </AOS>
        <AOS
          fontFamily="National2"
          pl={{ base: "5rem", md: 0 }}
          pt={{ base: "5rem", md: 0 }}
          w={{ base: "100%", md: "70%", xl: "50%" }}
          variants={fadeInUp}
          delay={0.2}
          triggerOnce={true}
        >
          <VStack textAlign="left" alignItems="flex-start" spacing="2rem" fontWeight={300} color="var(--fokus-black)">
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "4xl", xl: "4xl", "2xl": "7xl" }} color="var(--fokus-black)">
              L<S>I</S>NGKUN<S>G</S>A<S>N</S>
              <br /> SEKITAR
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Lingkungan bisa berpengaruh karena tidak adanya komunikasi, kasih sayang, dan kepedulian antara sesama sehingga membuat seorang anak kurang
              memikirkan apa yang akan terjadi pada diri sendiri.
            </Text>
          </VStack>
        </AOS>
      </Section>
      <Section data-key={1} bgColor="var(--fokus-yellow)" pos="relative" color="white" flexDir={{ base: "column", md: "row" }}>
        <AOS w={{ base: "80%", md: "30%", xl: "50%" }} variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-15.png" />
        </AOS>
        <AOS
          fontFamily="National2"
          pl={{ base: "5rem", md: 0 }}
          pt={{ base: "5rem", md: 0 }}
          w={{ base: "100%", md: "70%", xl: "50%" }}
          variants={fadeInUp}
          delay={0.2}
          triggerOnce={true}
        >
          <VStack textAlign="left" alignItems="flex-start" spacing="2rem" fontWeight={300} color="var(--fokus-black)">
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "4xl", xl: "4xl", "2xl": "7xl" }} color="var(--fokus-black)">
              MUDAHNYA AKSES TERHADAP N<S>A</S>PZ<S>A</S>
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Penjualan narkoba semakin terjangkau oleh kantong masyarakat dengan berkembangnya teknologi sehingga tidak dapat dikontrol. Selain itu, munculnya
              sindikat-sindikat perdagangan NAPZA membuat aparat hukum kesulitan melacak seluruh jaringan.
            </Text>
          </VStack>
        </AOS>
      </Section>
      <Section data-key={1} bgColor="var(--fokus-blue)" pos="relative" color="white" flexDir="column" overflow="hidden">
        <AOS
          pos="absolute"
          top={{ base: "-5rem", md: "-8rem", xl: "-10rem" }}
          left={{ base: "-5rem", md: "-8rem", xl: "-10rem" }}
          h="100%"
          variants={fadeInLeft}
          delay={0.2}
          triggerOnce={true}
          threshold={0.2}
        >
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-17.png" h={{ base: "80%", md: "100%", xl: "120%" }} w="auto" />
        </AOS>
        <AOS
          variants={fadeInLeft}
          delay={0.6}
          triggerOnce={true}
          pos="absolute"
          top="50%"
          left={{ base: 0, md: "40%", xl: "50%" }}
          w={{ base: "100%", md: "40%", xl: "30%" }}
          zIndex={1}
          px={{ base: "3rem", md: 0 }}
        >
          <Text fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "3xl" }} color="var(--fokus-yellow)" transform="translateY(-50%)">
            Penggunaan NAPZA secara berlebihan akan berbahaya bagi kesehatan. Ciri yang terlihat ketika seseorang menggunakan NAPZA secara tidak bijak terbagi
            menjadi dua, yaitu fisik dan psikis.
          </Text>
        </AOS>
      </Section>
      <Flex data-key={1} flexDir="row" pos="relative" color="white" fontFamily="National2" overflow="hidden">
        <AOS variants={fadeInLeft} triggerOnce={true} delay={0.2} pos="absolute" left="-15%" top={0} h="100%" zIndex={1} threshold={0.2}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-19.png" h="100%" />
        </AOS>
        <AOS variants={fadeInRight} triggerOnce={true} delay={0.2} pos="absolute" right="-15%" top={0} h="100%" zIndex={1} threshold={0.2}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-18.png" h="100%" />
        </AOS>
        <Box bgColor="var(--fokus-blue)" h="100vh" w="100%">
          <AOS variants={fadeInLeft} triggerOnce={true} delay={0.6}>
            <Center h="100vh" color="var(--fokus-yellow)">
              <VStack maxW="60%" alignItems="flex-start" spacing="2rem" zIndex={10}>
                <Heading fontFamily="National2" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}>
                  Tanda secara fisik yang dapat terlihat:
                </Heading>
                <UnorderedList spacing="2rem" fontSize={{ base: "lg", md: "xl" }}>
                  <ListItem>Mata merah dan pupil dan/atau yang mengecil atau membesar</ListItem>
                  <ListItem>Perubahan pola makan atau pola tidur</ListItem>
                  <ListItem>Penurunan atau peningkatan berat badan yang drastis dalam waktu singkat</ListItem>
                  <ListItem>Sering kelelahan atau sangat kelebihan tenaga dan tidak bisa diam</ListItem>
                  <ListItem>Perubahan pada penampilan fisik dan/atau ketidakpedulian terhadap penampilan</ListItem>
                  <ListItem>Mengalami kejang tanpa adanya riwayat epilepsi</ListItem>
                </UnorderedList>
              </VStack>
            </Center>
          </AOS>
        </Box>
        <Box bgColor="var(--fokus-yellow)" h="100vh" w="100%">
          <AOS variants={fadeInRight} triggerOnce={true} delay={0.6}>
            <Center h="100vh" color="var(--fokus-blue)">
              <VStack maxW="60%" alignItems="flex-start" spacing="2rem" zIndex={10}>
                <Heading fontFamily="National2" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}>
                  Selain tanda secara fisik, remaja pengguna NAPZA juga dapat memberikan ciri psikis yang berubah:
                </Heading>
                <UnorderedList spacing="2rem" fontSize={{ base: "lg", md: "xl" }}>
                  <ListItem>Lebih tertutup dan terlihat seperti merahasiakan sesuatu</ListItem>
                  <ListItem>Sulit konsentrasi</ListItem>
                  <ListItem>Tidak memiliki motivasi dan tampak lesu</ListItem>
                  <ListItem>Cemas, paranoid, dan menarik diri dari lingkungan sosial</ListItem>
                  <ListItem>Sering bolos sekolah dan prestasi akademik menurun</ListItem>
                </UnorderedList>
              </VStack>
            </Center>
          </AOS>
        </Box>
      </Flex>
      <Section data-key={1} bgImage="/articles/napza/assets/image/fenomena-napza/Asset-21.png" pos="relative" color="white" flexDir="column">
        <VStack
          spacing="2rem"
          textAlign="center"
          fontFamily="National2"
          fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
          w={{ base: "100%", md: "70%", xl: "60%" }}
          color="var(--fokus-black)"
        >
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text>
              Dampak yang ditimbulkan pun tak sedikit. Dampak langsung dari penyalahgunaan NAPZA terhadap tubuh manusia antara lain berupa{" "}
              <b>gangguan pada fungsi organ tubuh dan penyakit ganas seperti HIV AIDS</b>. Selain mengganggu secara fisik,{" "}
              <b>
                kejiwaan pecandu juga dapat terganggu dan menyebabkan depresi, gangguan jiwa berat/psikotik, bunuh diri, hingga melakukan tindak kejahatan
                seperti mencuri, merusak, dan sebagainya.
              </b>
            </Text>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <Text>
              Secara tidak langsung, dampak penyalahgunaan NAPZA menyebabkan{" "}
              <b>kesulitan finansial untuk penyembuhan dan perawatan pecandu jika tubuhnya rusak akibat zat beracun.</b> Pergaulan seseorang juga bisa terganggu
              akibat dikucilkan masyarakat, terlebih jika pecandu bersikap anti sosial.
            </Text>
          </AOS>
        </VStack>
      </Section>
      <Section data-key={1} bgColor="var(--fokus-pink)" pos="relative" color="white" flexDir="column" fontFamily="National2" overflowX="hidden">
        <AOS variants={fadeInRight} triggerOnce={true} delay={0.2} h="100%" pos="absolute" top={0} right="-12%" threshold={0.2}>
          <Image src="/articles/napza/assets/image/fenomena-napza/Asset-28.png" h="100%" />
        </AOS>
        <AOS variants={fadeInUp} triggerOnce={true} delay={0.8}>
          <VStack w="60%" alignItems="flex-start" spacing={{ base: "2rem", md: "2.5rem", xl: "3rem" }}>
            <Text fontSize={{ base: "lg", md: "xl" }}>
              Namun, penggunaan NAPZA yang berlebihan dapat ditanggulangi dan dicegah melalui beberapa cara. Dikutip dari <em>bnn.go.id</em>, ada empat cara
              yang dapat dilakukan untuk mengatasi ketergantungan NAPZA.
            </Text>
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} pos="relative">
              <Heading
                color="var(--fokus-yellow)"
                pos="absolute"
                left={{ base: "-3rem", md: "-5rem", xl: "-8rem" }}
                top="50%"
                fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                transform="translateY(-50%)"
              >
                <S>01</S>
              </Heading>
              Pemeriksaan yang dilakukan dokter dan terapis
            </Heading>
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} pos="relative">
              <Heading
                color="var(--fokus-yellow)"
                pos="absolute"
                left={{ base: "-3rem", md: "-5rem", xl: "-8rem" }}
                top="50%"
                fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                transform="translateY(-50%)"
              >
                <S>02</S>
              </Heading>
              Detoksifikasi atau pemberhentian penggunaan
            </Heading>
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} pos="relative">
              <Heading
                color="var(--fokus-yellow)"
                pos="absolute"
                left={{ base: "-3rem", md: "-5rem", xl: "-8rem" }}
                top="50%"
                fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                transform="translateY(-50%)"
              >
                <S>03</S>
              </Heading>
              Stabilisasi untuk pemulihan jangka panjang
            </Heading>
            <Heading fontFamily="National2" fontWeight="900" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} pos="relative">
              <Heading
                color="var(--fokus-yellow)"
                pos="absolute"
                left={{ base: "-3rem", md: "-5rem", xl: "-8rem" }}
                top="50%"
                fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                transform="translateY(-50%)"
              >
                <S>04</S>
              </Heading>
              Pengelolaan aktivitas seusai rehabilitasi
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }}>
              Penggunaan NAPZA di kalangan anak-anak dan remaja memang marak terjadi. Namun, penyalahgunaan zat ini dapat dicegah. Misalnya, seperti
              meningkatkan kegiatan positif.
            </Text>
          </VStack>
        </AOS>
      </Section>
    </Box>
  );
};

export default Fenomena;
