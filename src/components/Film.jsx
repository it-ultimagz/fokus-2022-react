import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";

const Section = (props) => {
  return (
    <Flex
      {...props}
      as="section"
      h="100vh"
      bgSize="cover"
      bgPosition="center"
      justifyContent="center"
      alignItems="center"
      px={{ base: "2rem", md: "5rem", xl: "12rem" }}
    >
      {props.children}
    </Flex>
  );
};

const Film = () => {
  return (
    <Box>
      <Section
        data-key={1}
        bgImage="/assets/image/film/bg-yellow.png"
        pos="relative"
        color="var(--fokus-blue)"
      >
        <VStack>
          <Heading>3 Rekomendasi</Heading>
          <Heading>Film Kupas Realitas</Heading>
          <Heading>Pecandu Narkotika</Heading>
        </VStack>
        <Box pos="absolute" bottom="10rem" textAlign="center">
          <Text>
            <b>Penulis:</b> Graciella Olivia Widjaja
          </Text>
          <Text>
            <b>Editor:</b> Nadia Indrawinata
          </Text>
          <Text>
            <b>Foto:</b> Melati Pramesthi
          </Text>
        </Box>
      </Section>
      <Section
        data-key={2}
        bgImage="/assets/image/film/bg-blue.png"
        color="var(--fokus-white)"
      >
        <VStack>
          <Text>
            Penggunaan NAPZA masih menjadi permasalahan besar yang tak
            terhindarkan. Hal ini terus menjadi sorotan dan berbagai kisahnya
            kerap diangkat dalam bentuk karya edukatif. Ilustrasi-ilustrasinya
            tertuang dalam bentuk musik,lukisan, hingga film.
          </Text>
          <Text>
            Sineas Indonesia hingga mancanegara turut andil dalam rangka
            mengedukasi terkait bahaya penggunaan obat-obatan terlarang.
            Diangkatlah berbagai kisah nyata inspiratif yang ditampilkan dalam
            karya film. Inilah 3 rekomendasi film edukasi terkait bahaya dan
            dampak penggunaan NAPZA.{" "}
          </Text>
        </VStack>
      </Section>
      <Section data-key={3} bgColor="var(--fokus-grey)" pos="relative">
        <Box
          pos="absolute"
          bottom="5rem"
          bgColor="var(--fokus-yellow)"
          w="100%"
          textAlign="center"
          py="1rem"
        >
          <Text>
            Jakarta vs Everybody (2020), Beautiful Boy (2018), dan Slank Gak Ada
            Matinya (2013) merupakan beberapa film yang mengangkat isu tentang
            NAPZA. (ULTIMAGZ/ Melati Pramesthi)
          </Text>
        </Box>
      </Section>
      <Section data-key={4} bgColor="var(--fokus-cream)">
        <Box>
          <VStack textAlign="left" alignItems="flex-start">
            <Heading color="var(--fokus-blue)">01 Beautiful Boy </Heading>
            <Text>
              “Beautiful Boy” merupakan film karya sutradara Felix Van
              Groeningen yang rilis pada 2018. Premisnya berangkat dari kisah
              nyata seorang anak bernama Nic Sheff (Timothée Chalamet) yang
              kecanduan narkoba. Di sinilah peranan sang ayah, David Sheff
              (Steve Carell) untuk membantu anaknya lepas dari belenggu
              obat-obatan terlarang.{" "}
            </Text>
            <Text>
              Awal mulanya, film menampilkan kehidupan Nic yang cenderung
              stabil. Nic merupakan seorang anak berprestasi dengan segudang
              talenta serta memiliki pergaulan yang luas. Namun, di balik
              seluruh kesempurnaannya, Nic justru diam-diam mengonsumsi heroin
              dan methamphetamine. Dari sinilah titik kejatuhannya dimulai.{" "}
            </Text>
            <Text>
              Hidupnya mulai berantakan seiring dengan kondisi fisik dan psikis
              yang kian menurun. Ayahnya yang mengetahui keadaan Nic tidak
              tinggal diam. David terus menopang dan membimbing Nic untuk
              kembali bangkit. Berbagai upaya dilakukan, mulai dari rehabilitasi
              hingga mendekatkan kembali Nic dengan keluarga.{" "}
            </Text>
            <Text>
              (Foto: imbd.com) Salah satu adegan Nic Sheff dan ayahnya, David
              Sheff pada film “Beautiful Boy”.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Image src="/assets/image/film/bg-blue.png" />
        </Box>
      </Section>
      <Section data-key={5} bgImage="/assets/image/film/bg-blue-2.png">
        <Box>
          <VStack textAlign="left" alignItems="flex-start">
            <Heading color="var(--fokus-white)">
              02 Slank Nggak Ada Matinya
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
            <Text>
              (Foto: slank.com) Salah satu adegan pada film “Slank Gak Ada
              Matinya”.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Image src="/assets/image/film/bg-blue.png" />
        </Box>
      </Section>
      <Section data-key={6} bgColor="var(--fokus-cream)">
        <Box>
          <VStack textAlign="left" alignItems="flex-start">
            <Heading color="var(--fokus-blue)">03 Jakarta vs Everybody</Heading>
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
            <Text>
              (Foto: parapuan.co) Salah satu adegan Jefri Nichol pada film
              “Jakarta vs Everybody.”
            </Text>
          </VStack>
        </Box>
        <Box>
          <Image src="/assets/image/film/bg-blue.png" />
        </Box>
      </Section>
    </Box>
  );
};

export default Film;
