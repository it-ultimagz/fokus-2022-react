import React from "react";
import { Box, Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { AOS } from "../components/AOS";
import { fadeInUp, zoomIn } from "../shared/animation";
import { Section } from "../components/commons/Section";

const S = (props) => {
  return (
    <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>
      {props.children}
    </span>
  );
};

const Rokok = () => {
  return (
    <Box>
      <Section
        data-key={1}
        pos="relative"
        color="var(--fokus-blue)"
        flexDir="column"
      >
        <VStack>
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Heading
              fontFamily="National2"
              fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "8xl" }}
              color="var(--fokus-yellow)"
            >
              DIL<S>E</S>M<S>A</S> R<S>O</S>
              <S>K</S>
              <S>OK</S>
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Heading
              fontFamily="National2"
              fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "8xl" }}
              color="var(--fokus-yellow)"
            >
              IN<S>DO</S>NE<S>S</S>IA
            </Heading>
          </AOS>
          <Heading
            fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "5xl" }}
            color="var(--fokus-white)"
          >
            ATURAN TIDAK MENUTUP
          </Heading>
          <Heading
            fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "5xl" }}
            color="var(--fokus-white)"
          >
            KEMUNGKINAN MENGGUNAKAN
          </Heading>
        </VStack>
        <AOS
          triggerOnce={true}
          variants={fadeInUp}
          mt="5rem"
          textAlign="center"
          fontFamily="National2"
          fontSize="md"
          delay={1.2}
          color="var(--fokus-yellow)"
        >
          <Text>
            <b>Penulis:</b>{" "}
            <Box as="span" fontWeight="300" color="var(--fokus-white)">
              Andia Christy
            </Box>
          </Text>
          <Text>
            <b>Editor:</b>{" "}
            <Box as="span" fontWeight="300" color="var(--fokus-white)">
              Nadia Indrawinata
            </Box>
          </Text>
        </AOS>
      </Section>
      <Section
        data-key={2}
        bgImage="/assets/image/film/bg-blue.png"
        color="var(--fokus-white)"
        textAlign="center"
        fontFamily="National2"
        fontWeight="300"
      >
        <Box>
          <Text>
            Rokok dan konsumennya sering menjadi topik pembahasan yang tidak
            terpisahkan, terutama ketika kita membahas di Indonesia. Mengutip
            tobaccofreekids.org, Indonesia merupakan pasar rokok terbesar kedua
            di dunia berdasarkan volume ritel dengan konsumen pasar yang terdiri
            dari orang dewasa (15 tahun ke atas) hingga anak muda (13-15 tahun).
            Hal mengejutkan terlihat bahwa 19,2 persen anak muda menggunakan
            tembakau, dengan spesifikasi laki-laki 35,6 persen dan perempuan 3,5
            persen.
          </Text>
        </Box>
        <Box>
          <Text>
            Rokok dan konsumennya sering menjadi topik pembahasan yang tidak
            terpisahkan, terutama ketika kita membahas di Indonesia. Mengutip
            tobaccofreekids.org, Indonesia merupakan pasar rokok terbesar kedua
            di dunia berdasarkan volume ritel dengan konsumen pasar yang terdiri
            dari orang dewasa (15 tahun ke atas) hingga anak muda (13-15 tahun).
            Hal mengejutkan terlihat bahwa 19,2 persen anak muda menggunakan
            tembakau, dengan spesifikasi laki-laki 35,6 persen dan perempuan 3,5
            persen.
          </Text>
        </Box>
      </Section>
      <Section data-key={3}>
        <Box bottom="5rem" textAlign="center" fontFamily="National2">
          <Text color="var(--fokus-white)">
            Bahkan dengan data tersebut, seluruh pihak mengetahui bagaimana
            pengaruh rokok terhadap kesehatan. Kampanye hingga penyuluhan bahaya
            rokok telah digaungkan, pemerintah pun telah menetapkan peraturan
            khusus terhadap rokok. Dilansir dari tobaccocontrollaws.org,
            peraturan tentang merokok yang ada di Indonesia adalah sebagai
            berikut.
          </Text>
        </Box>
      </Section>
      <Section data-key={4} bgColor="var(--fokus-cream)">
        <AOS
          fontFamily="National2"
          pr="5rem"
          w="50%"
          variants={fadeInUp}
          delay={0.2}
          triggerOnce={true}
        >
          <VStack
            textAlign="left"
            alignItems="flex-start"
            spacing="2rem"
            fontWeight={300}
          >
            <Heading
              color="var(--fokus-blue)"
              fontFamily="National2"
              fontWeight="900"
              fontSize="6xl"
              pos="relative"
            >
              <Heading pos="absolute" left="-3.5rem" top="0.5rem">
                <S>01</S>
              </Heading>
              Beautiful Boy
            </Heading>
            <Text color="var(--fokus-black)">
              “Beautiful Boy” merupakan film karya sutradara Felix Van
              Groeningen yang rilis pada 2018. Premisnya berangkat dari kisah
              nyata seorang anak bernama Nic Sheff (Timothée Chalamet) yang
              kecanduan narkoba. Di sinilah peranan sang ayah, David Sheff
              (Steve Carell) untuk membantu anaknya lepas dari belenggu
              obat-obatan terlarang.{" "}
            </Text>
            <Text color="var(--fokus-black)">
              Awal mulanya, film menampilkan kehidupan Nic yang cenderung
              stabil. Nic merupakan seorang anak berprestasi dengan segudang
              talenta serta memiliki pergaulan yang luas. Namun, di balik
              seluruh kesempurnaannya, Nic justru diam-diam mengonsumsi heroin
              dan methamphetamine. Dari sinilah titik kejatuhannya dimulai.{" "}
            </Text>
            <Text color="var(--fokus-black)">
              Hidupnya mulai berantakan seiring dengan kondisi fisik dan psikis
              yang kian menurun. Ayahnya yang mengetahui keadaan Nic tidak
              tinggal diam. David terus menopang dan membimbing Nic untuk
              kembali bangkit. Berbagai upaya dilakukan, mulai dari rehabilitasi
              hingga mendekatkan kembali Nic dengan keluarga.{" "}
            </Text>
            <Text color="var(--fokus-grey2)" fontSize="sm">
              (Foto: imbd.com) Salah satu adegan Nic Sheff dan ayahnya, David
              Sheff pada film “Beautiful Boy”.
            </Text>
          </VStack>
        </AOS>
        <AOS w="50%" variants={zoomIn} delay={0.4} triggerOnce={true}>
          <Image src="/assets/image/film/bb.png" />
        </AOS>
      </Section>
      <Section data-key={5} bgImage="/assets/image/film/bg-blue-2.png">
        <AOS
          fontFamily="National2"
          pr="5rem"
          w="70%"
          variants={fadeInUp}
          delay={0.2}
          triggerOnce={true}
        >
          <VStack
            textAlign="left"
            alignItems="flex-start"
            spacing="2rem"
            fontWeight={300}
          >
            <Heading
              fontFamily="National2"
              fontWeight="900"
              fontSize="6xl"
              pos="relative"
            >
              <Heading pos="absolute" left="-3.5rem" top="0.5rem">
                <S>02</S>
              </Heading>
              Slank Nggak Ada Matinya
            </Heading>
            <Text color="var(--fokus-white)">
              Grup band bentukan Bimo Setiawan ini turut menjadi saksi kejamnya
              kehidupan akibat NAPZA. Kisahnya diangkat menjadi film berjudul
              “Slank Nggak Ada Matinya” yang rilis pada 2013.
            </Text>
            <Text color="var(--fokus-white)">
              Berlatarkan tahun 1966, Slank berhasil meluncurkan album kelima
              berjudul “Minoritas”. Peluncurannya dibarengi dengan mundurnya
              personil Slank, salah satunya adalah Reynold. Dirinya mengaku
              tidak kuasa dengan Bimo (Adipati Dolken), Akhadi Wira (Ricky
              Harun), dan Ivanka (Aaron Ashab) yang terikat obat-obatan
              terlarang. Akhirnya, posisi kosong dalam band diisi oleh Abdee
              (Deva Mahenra) dan Ridho (Ajun Prawira).
            </Text>
            <Text color="var(--fokus-white)">
              Selanjutnya, adegan menampilkan Slank yang sempat terancam bubar.
              Namun, keinginan ini diurungkan melihat besarnya dukungan
              penggemar, bahkan hingga muncul surat ancaman dari mereka.
              Akhirnya Slank tetap melanjutkan perjalanannya. Pada 1977, Slank
              berhasil merampungkan 30 konser. Hari berlalu, Slank terus
              menjalankan konser meskipun sempat terhalang oleh berbagai
              konflik. Para personil, terutama Bimo, Akhadi, dan Ivanka terus
              mengonsumsi narkotika.
            </Text>
            <Text color="var(--fokus-white)">
              Konflik terjadi ketika Ibu dari Bimo menemukan sebungkus narkotika
              di ruangan studio. Teguran dilontarkan oleh Ibu Bimo. Namun,
              sayangnya hal tersebut tidak diindahkan. Ketiga personil Slank itu
              terus mengonsumsi narkotika hingga kerap mengalami sakau. Ibu Bimo
              akhirnya membujuk Bimo dan kedua kawannya untuk menjalani
              rehabilitasi.
            </Text>
            <Text color="var(--fokus-black)" fontSize="sm">
              (Foto: slank.com) Salah satu adegan pada film “Slank Gak Ada
              Matinya”.
            </Text>
          </VStack>
        </AOS>
        <AOS w="30%" variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/assets/image/film/sgm.png" />
        </AOS>
      </Section>
      <Section data-key={6} bgColor="var(--fokus-cream)">
        <AOS
          fontFamily="National2"
          pr="5rem"
          w="70%"
          variants={fadeInUp}
          delay={0.2}
          triggerOnce={true}
        >
          <VStack
            textAlign="left"
            alignItems="flex-start"
            spacing="2rem"
            fontWeight={300}
            color="var(--fokus-black)"
          >
            <Heading
              fontFamily="National2"
              fontWeight="900"
              fontSize="6xl"
              pos="relative"
              color="var(--fokus-blue)"
            >
              <Heading pos="absolute" left="-3.5rem" top="0.5rem">
                <S>03</S>
              </Heading>
              Jakarta vs Everybody
            </Heading>
            <Text>
              Berbeda dengan dua kisah sebelumnya, “Jakarta vs Everybody”
              merupakan sebuah film yang menggambarkan kehidupan pengedar
              narkoba. Karya sutradara Ertanto Robby Soediskam ini rilis pada
              2021 silam. Film ini dapat disaksikan pada platform Bioskop Online
              mulai 19 Maret 2022. Namun, waktu penayangannya terbatas
            </Text>
            <Text>
              Berlatarkan kehidupan di ibukota seperti judulnya, Don (Jefri
              Nichol) merantau untuk meraih impiannya sebagai aktor. Di Jakarta,
              Don harus menghadapi sulitnya kehidupan. Penghasilannya sebagai
              aktor junior tidak mencukupi kebutuhan hidupnya. Karirnya di dunia
              perfilman tak semulus bayangan.
            </Text>
            <Text>
              Alhasil, Don terpaksa terjun menjadi seorang pengedar narkotika.
              Naik turunnya kehidupan ia lewati dengan pelik. Namun, penghasilan
              yang didapat tak sebanding dengan hasil jerih lelahnya. Don juga
              harus menghadapi berbagai rintangan yang menggoyahkan mimpinya
              sebagai aktor.
            </Text>
            <Text>
              “Jakarta vs Everybody” menengok kehidupan dari kacamata pahitnya
              dunia, terlebih lagi hidup di Ibu Kota. Realitanya, manusia kerap
              diperhadapkan oleh berbagai arus yang hendak dipilih, entah baik
              ataupun buruk. Hal terpenting adalah tahu batasan diri.
            </Text>
            <Text color="var(--fokus-grey2)" fontSize="sm">
              (Foto: parapuan.co) Salah satu adegan Jefri Nichol pada film
              “Jakarta vs Everybody.”
            </Text>
          </VStack>
        </AOS>
        <AOS w="30%" variants={zoomIn} delay={0.2} triggerOnce={true}>
          <Image src="/assets/image/film/jktvs.png" />
        </AOS>
      </Section>
    </Box>
  );
};

export default Rokok;
