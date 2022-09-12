import React from "react";
import { Box, Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { AOS } from "../components/AOS";
import { fadeInUp, zoomIn } from "../shared/animation";
import { Section } from "../components/commons/Section";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const Film = () => {
  return (
    <Box>
      <Section data-key={1} bgImage="/articles/napza/assets/image/film/bg-yellow.png" pos="relative" color="var(--fokus-blue)" flexDir="column">
        <VStack>
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "2xl", md: "3xl", xl: "5xl", "2xl": "7xl" }}>
              3 R<S>e</S>KO<S>m</S>ENDASI
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "2xl", md: "3xl", xl: "5xl", "2xl": "7xl" }}>
              F<S>i</S>L<S>m</S> K<S>u</S>P<S>a</S>S R<S>e</S>A<S>l</S>ITAS
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "2xl", md: "3xl", xl: "5xl", "2xl": "7xl" }}>
              P<S>e</S>C<S>a</S>N<S>d</S>U N<S>a</S>RK<S>o</S>TIK<S>a</S>
            </Heading>
          </AOS>
        </VStack>
        <AOS triggerOnce={true} variants={fadeInUp} mt="5rem" textAlign="center" fontFamily="National2" fontSize="md" delay={1.2}>
          <Text>
            <b>Penulis:</b>{" "}
            <Box as="span" fontWeight="300">
              Graciella Olivia Widjaja
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
              Melati Pramesthi
            </Box>
          </Text>
        </AOS>
      </Section>
      <Section data-key={2} bgImage="/articles/napza/assets/image/film/bg-blue.png" color="var(--fokus-white)" textAlign="center">
        <VStack spacing="2.5rem" w="80%">
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontFamily="National2" fontSize={{ base: "lg", md: "xl", xl: "2xl", "2xl": "3xl" }}>
              Penggunaan NAPZA masih menjadi permasalahan besar yang tak terhindarkan. Hal ini terus menjadi sorotan dan berbagai kisahnya kerap diangkat dalam
              bentuk karya edukatif. Ilustrasi-ilustrasinya tertuang dalam bentuk musik, lukisan, hingga film.
            </Text>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Text fontFamily="National2" fontSize={{ base: "lg", md: "xl", xl: "2xl", "2xl": "3xl" }}>
              Sineas Indonesia hingga mancanegara turut andil dalam rangka mengedukasi terkait bahaya penggunaan obat-obatan terlarang. Diangkatlah berbagai
              kisah nyata inspiratif yang ditampilkan dalam karya film. Inilah tiga rekomendasi film edukasi terkait bahaya dan dampak penggunaan NAPZA.{" "}
            </Text>
          </AOS>
        </VStack>
      </Section>
      <Section data-key={3} bgImage="/articles/napza/assets/image/film/laptop-slank.jpg" pos="relative">
        <Box pos="absolute" bottom="2rem" bgColor="var(--fokus-yellow)" w="100%" textAlign="center" py="1rem" fontFamily="National2">
          <Text color="var(--fokus-blue)">
            Jakarta vs Everybody (2020), Beautiful Boy (2018), dan Slank Gak Ada Matinya (2013) merupakan beberapa film yang mengangkat isu tentang NAPZA.
            (ULTIMAGZ/ Melati Pramesthi)
          </Text>
        </Box>
      </Section>
      <Section data-key={4} bgColor="var(--fokus-cream)">
        <AOS fontFamily="National2" pr="5rem" w={{ base: "80%", "2xl": "50%" }} variants={fadeInUp} delay={0.2} triggerOnce={true}>
          <VStack textAlign="left" alignItems="flex-start" spacing="1rem" fontWeight={300}>
            <Heading color="var(--fokus-blue)" fontFamily="National2" fontWeight="900" fontSize="6xl" pos="relative">
              <Heading pos="absolute" left="-3.5rem" top="0.5rem">
                <S>01</S>
              </Heading>
              Beautiful Boy
            </Heading>
            <Text color="var(--fokus-black)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              “Beautiful Boy” merupakan film karya sutradara Felix Van Groeningen yang rilis pada 2018. Premisnya berangkat dari kisah nyata seorang anak
              bernama Nic Sheff (Timothée Chalamet) yang kecanduan narkoba. Di sinilah peranan sang ayah, David Sheff (Steve Carell) untuk membantu anaknya
              lepas dari belenggu obat-obatan terlarang.{" "}
            </Text>
            <Text color="var(--fokus-black)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Awal mulanya, “Beautiful Boy” menampilkan kehidupan Nic yang cenderung stabil. Nic merupakan seorang anak berprestasi dengan segudang talenta
              serta memiliki pergaulan yang luas. Namun, di balik seluruh kesempurnaannya, Nic justru diam-diam mengonsumsi heroin dan <em>methamphetamine</em>.
              Dari sinilah titik kejatuhannya dimulai.{" "}
            </Text>
            <Text color="var(--fokus-black)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Hidupnya mulai berantakan seiring dengan kondisi fisik dan psikis yang kian menurun. Ayahnya yang mengetahui keadaan Nic tidak tinggal diam, David
              terus menopang dan membimbing Nic untuk kembali bangkit. Berbagai upaya dilakukan, mulai dari rehabilitasi hingga mendekatkan kembali Nic dengan
              keluarga.{" "}
            </Text>
            <Text color="var(--fokus-grey2)" fontSize="sm">
              (Foto: imbd.com) Salah satu adegan Nic Sheff dan ayahnya, David Sheff pada film “Beautiful Boy”.
            </Text>
          </VStack>
        </AOS>
        <AOS w={{ base: "20%", "2xl": "50%" }} variants={zoomIn} delay={0.4} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/film/bb.PNG" />
        </AOS>
      </Section>
      <Section data-key={5} bgImage="/articles/napza/assets/image/film/bg-blue-2.png">
        <AOS fontFamily="National2" pr="5rem" w="80%" variants={fadeInUp} delay={0.2} triggerOnce={true}>
          <VStack textAlign="left" alignItems="flex-start" spacing="1rem" fontWeight={300}>
            <Heading fontFamily="National2" fontWeight="900" fontSize="6xl" pos="relative" color="white">
              <Heading pos="absolute" left="-3.5rem" top="0.5rem">
                <S>02</S>
              </Heading>
              Slank Nggak Ada Matinya
            </Heading>
            <Text color="var(--fokus-white)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Grup band bentukan Bimo Setiawan ini turut menjadi saksi kejamnya kehidupan akibat NAPZA. Kisahnya diangkat menjadi film berjudul “Slank Nggak Ada
              Matinya” yang rilis pada 2013.
            </Text>
            <Text color="var(--fokus-white)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Berlatarkan tahun 1996, Slank berhasil meluncurkan album kelima berjudul “Minoritas”. Peluncurannya dibarengi dengan mundurnya salah satu personil
              Slank, Reynold. Dirinya mengaku tidak kuasa dengan Bimo (Adipati Dolken), Akhadi Wira (Ricky Harun), dan Ivanka (Aaron Ashab) yang terikat
              obat-obatan terlarang. Akhirnya, posisi kosong dalam band diisi oleh Abdee (Deva Mahenra) dan Ridho (Ajun Prawira).
            </Text>
            <Text color="var(--fokus-white)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Selanjutnya, adegan menampilkan Slank yang sempat terancam bubar. Namun, keinginan ini diurungkan melihat besarnya dukungan penggemar, bahkan
              hingga muncul surat ancaman dari mereka. Akhirnya Slank tetap melanjutkan perjalanannya. Pada 1997, Slank berhasil menggelar 30 konser. Hari
              berlalu, Slank terus menjalankan konser meskipun sempat terhalang oleh berbagai konflik. Para personil, terutama Bimo, Akhadi, dan Ivanka terus
              mengonsumsi narkotika.
            </Text>
            <Text color="var(--fokus-white)" fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Konflik terjadi ketika Ibu dari Bimo menemukan sebungkus narkotika di ruangan studio. Teguran dilontarkan oleh Ibu Bimo. Namun, sayangnya hal
              tersebut tidak diindahkan. Ketiga personil Slank itu terus mengonsumsi narkotika hingga kerap mengalami sakau. Ibu Bimo akhirnya membujuk Bimo dan
              kedua kawannya untuk menjalani rehabilitasi.
            </Text>
            <Text color="var(--fokus-black)" fontSize="sm">
              (Foto: slank.com) Salah satu adegan pada film “Slank Gak Ada Matinya”.
            </Text>
          </VStack>
        </AOS>
        <AOS w="20%" variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/film/sgm.PNG" />
        </AOS>
      </Section>
      <Section data-key={6} bgColor="var(--fokus-cream)">
        <AOS fontFamily="National2" pr="5rem" w={{ base: "80%", "2xl": "70%" }} variants={fadeInUp} delay={0.2} triggerOnce={true}>
          <VStack textAlign="left" alignItems="flex-start" spacing="1rem" fontWeight={300} color="var(--fokus-black)">
            <Heading fontFamily="National2" fontWeight="900" fontSize="6xl" pos="relative" color="var(--fokus-blue)">
              <Heading pos="absolute" left="-3.5rem" top="0.5rem">
                <S>03</S>
              </Heading>
              Jakarta vs Everybody
            </Heading>
            <Text fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Berbeda dengan dua kisah sebelumnya, “Jakarta vs Everybody” merupakan sebuah film yang menggambarkan kehidupan pengedar narkoba. Karya sutradara
              Ertanto Robby Soediskam ini rilis pada 2021 silam. Film ini dapat disaksikan pada <em>platform</em> Bioskop Online mulai 19 Maret 2022. Namun,
              waktu penayangannya terbatas.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Berlatarkan kehidupan di ibukota seperti judulnya, Don (Jefri Nichol) merantau untuk meraih impiannya sebagai aktor. Di Jakarta, Don harus
              menghadapi sulitnya kehidupan. Penghasilannya sebagai aktor junior tidak mencukupi kebutuhan hidupnya. Karirnya di dunia perfilman tak semulus
              bayangan.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              Alhasil, Don terpaksa terjun menjadi seorang pengedar narkotika. Naik turunnya kehidupan ia lewati dengan pelik. Namun, penghasilan yang didapat
              tak sebanding dengan hasil jerih lelahnya. Don juga harus menghadapi berbagai rintangan yang menggoyahkan mimpinya sebagai aktor.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}>
              “Jakarta vs Everybody” menengok kehidupan dari kacamata pahitnya dunia, terlebih lagi hidup di Ibu Kota. Realitanya, manusia kerap diperhadapkan
              oleh berbagai arus yang hendak dipilih, entah baik atau buruk. Hal terpenting adalah tahu batasan diri.
            </Text>
            <Text color="var(--fokus-grey2)" fontSize="sm">
              (Foto: parapuan.co) Salah satu adegan Jefri Nichol pada film “Jakarta vs Everybody.”
            </Text>
          </VStack>
        </AOS>
        <AOS w={{ base: "20%", "2xl": "30%" }} variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/film/jktvs.PNG" />
        </AOS>
      </Section>
    </Box>
  );
};

export default Film;
