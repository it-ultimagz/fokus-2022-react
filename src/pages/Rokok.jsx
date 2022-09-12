import React from "react";
import { Box, Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { AOS } from "../components/AOS";
import { fadeInUp, zoomIn, fade } from "../shared/animation";
import { Section } from "../components/commons/Section";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const Rokok = () => {
  return (
    <Box overflow="hidden">
      <Section data-key={1} pos="relative" color="var(--fokus-blue)" flexDir="column" bgImage="assets/image/larangan-merokok/bg-1.png">
        <VStack>
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "5xl", xl: "6xl", "2xl": "8xl" }} color="var(--fokus-yellow)">
              DIL<S>E</S>M<S>A</S> R<S>O</S>
              <S>K</S>
              <S>OK</S>
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "5xl", xl: "6xl", "2xl": "8xl" }} color="var(--fokus-yellow)">
              IN<S>DO</S>NE<S>S</S>IA
            </Heading>
          </AOS>
          <AOS textAlign="center" variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Heading fontWeight={600} fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "5xl" }} color="var(--fokus-white)">
              ATURAN TIDAK MENUTUP
            </Heading>
            <Heading fontWeight={600} fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "5xl" }} color="var(--fokus-white)">
              KEMUNGKINAN MENGGUNAKAN
            </Heading>
          </AOS>
        </VStack>
        <AOS triggerOnce={true} variants={fadeInUp} mt="5rem" textAlign="center" fontFamily="National2" fontSize="md" delay={1.2} color="var(--fokus-yellow)">
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
        bgImage="/articles/napza/assets/image/larangan-merokok/bg-2.png"
        color="var(--fokus-blue)"
        h="100vh"
        fontFamily="National2"
        fontWeight="300"
      >
        <Box width="50%" textAlign="justify" paddingRight={5}>
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontSize={{ base: "lg", md: "xl" }}>
              Rokok dan konsumennya sering menjadi topik pembahasan yang tidak terpisahkan, terutama ketika kita membahasnya di Indonesia. Mengutip{" "}
              <em>tobaccofreekids.org</em>, Indonesia merupakan pasar rokok terbesar kedua di dunia berdasarkan volume ritel dengan konsumen pasar yang terdiri
              dari orang dewasa (15 tahun ke atas) hingga anak muda (13-15 tahun). Hal mengejutkan terlihat bahwa 19,2 persen anak muda menggunakan tembakau,
              dengan spesifikasi laki-laki 35,6 persen dan perempuan 3,5 persen.
            </Text>
          </AOS>
        </Box>
        <AOS variants={fadeInUp} delay={0.6} triggerOnce={true} width="50%" textAlign="start" paddingLeft={5}>
          <Flex justifyContent="start" alignItems="start" paddingBottom="20px">
            <Text fontSize="7xl" fontWeight={800} lineHeight="65px">
              19,2%
            </Text>
            <Text fontSize="xl" fontWeight={800} lineHeight="25px" paddingLeft={5}>
              ANAK MUDA <br /> MENGGUNAKAN <br /> TEMBAKAU
            </Text>
          </Flex>
          <Box position="relative">
            <Image src="/articles/napza/assets/image/larangan-merokok/rokok.png" width="250px"></Image>
            <Image
              src="/articles/napza/assets/image/larangan-merokok/asap.png"
              position="absolute"
              width="300px"
              transform="translate(85%, -88%)"
              top="0"
              left="0"
            ></Image>
          </Box>
        </AOS>
      </Section>
      <Section
        data-key={3}
        bgImage="/articles/napza/assets/image/larangan-merokok/bg-3.png"
        color="var(--fokus-blue)"
        fontFamily="National2"
        fontWeight="300"
        justifyContent="flex-end"
      >
        <AOS
          mt={{ base: "2rem", md: "5rem" }}
          variants={zoomIn}
          delay={0.3}
          triggerOnce={true}
          display="flex"
          bottom="5rem"
          textAlign="center"
          fontSize={{ base: "xl", md: "2xl", xl: "3xl" }}
          fontWeight="500"
          width="75%"
        >
          <Text color="var(--fokus-white)">
            Bahkan dengan data tersebut, seluruh pihak mengetahui bagaimana pengaruh rokok terhadap kesehatan. Kampanye hingga penyuluhan bahaya rokok telah
            digaungkan, pemerintah pun telah menetapkan peraturan khusus terhadap rokok. Dilansir dari <em>tobaccocontrollaws.org</em>, peraturan tentang
            merokok yang ada di Indonesia adalah sebagai berikut.
          </Text>
        </AOS>
      </Section>
      <Section data-key={4} bgImage="/articles/napza/assets/image/larangan-merokok/bg-4.png" display="flex" justifyContent="flex-start">
        <AOS fontFamily="National2" py="6rem" w="90%" variants={fadeInUp} delay={0.2} triggerOnce={true} display="flex" justifyContent="flex-start">
          <VStack textAlign="left" alignItems="flex-start" spacing="2rem" fontWeight={300}>
            <Heading color="var(--fokus-blue)" fontFamily="National2" fontWeight="700" fontSize="6xl" pos="relative">
              Peraturan <br />
              Tentang Rokok <br />
              di Indonesia
            </Heading>
            <Flex>
              <Box width="10%">
                <Text fontSize="3xl" textAlign="center" fontWeight="600" lineHeight="35px">
                  01
                </Text>
              </Box>
              <Box width="40%" textAlign="justify">
                <Text fontSize="xl">
                  Merokok dilarang di kendaraan umum dan berbagai daerah umum seperti fasilitas kesehatan, tempat ibadah, dan fasilitas pendidikan. Area khusus
                  untuk merokok perlu disediakan di daerah umum lainnya dan tempat kerja.
                </Text>
              </Box>

              <Box width="10%">
                <Text fontSize="3xl" textAlign="center" fontWeight="600" lineHeight="35px">
                  02
                </Text>
              </Box>
              <Box width="40%" textAlign="justify">
                <Text fontSize="xl">
                  Di televisi dan radio, iklan rokok boleh disiarkan antara pukul 21:30 hingga 05:00 waktu setempat. Iklan tersebut tidak diperbolehkan untuk
                  menunjukkan wujud rokok, produk tembakau, serta gambar orang sedang merokok.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Box width="10%">
                <Text fontSize="3xl" textAlign="center" fontWeight="600" lineHeight="35px">
                  03
                </Text>
              </Box>
              <Box width="40%" textAlign="justify">
                <Text fontSize="xl">
                  Penggunaan zat aditif dalam produk tembakau dilarang kecuali jika zat aditif tersebut telah terbukti secara ilmiah tidak membahayakan
                  kesehatan.
                </Text>
              </Box>

              <Box width="10%">
                <Text fontSize="3xl" textAlign="center" fontWeight="600" lineHeight="35px">
                  04
                </Text>
              </Box>
              <Box width="40%" textAlign="justify">
                <Text fontSize="xl">
                  Penjualan produk tembakau menggunakan <em>vending machine</em> dilarang oleh Undang-Undang. Penjualan produk tembakau juga hanya diperbolehkan
                  untuk orang berusia 18 tahun ke atas.
                </Text>
              </Box>
            </Flex>
          </VStack>
        </AOS>
      </Section>
      <Section
        data-key={4}
        bgImage="/articles/napza/assets/image/larangan-merokok/bg-5.png"
        color="var(--fokus-blue)"
        fontFamily="National2"
        fontWeight="300"
        justifyContent="flex-end"
      >
        <Box bottom="5rem" textAlign="justify" fontSize={{ base: "lg", md: "xl" }} width="60%" color="var(--fokus-yellow)">
          <Text>
            Meskipun berbagai peraturan telah ditetapkan, bisnis tembakau di Indonesia kian merajalela. Dilansir dari <em>thejakartapost.com</em>, perusahaan
            tembakau di Indonesia menghasilkan sebanyak 341 miliar batang rokok pada 2017. Hal tersebut diperparah dengan promosi iklan rokok yang menargetkan
            anak muda di usia perkembangan kognitif awal. Mereka menggunakan pesan-pesan yang inspiratif dan manipulatif. Alhasil, tidak heran jika perokok muda
            di Indonesia banyak jumlahnya.
          </Text>
          <Text pt={8}>
            Jika dibandingkan dengan negara tetangga seperti Malaysia dan Selandia Baru, keduanya mulai menerapkan peraturan yang sama. Selandia Baru akan
            melarang penjualan tembakau ke generasi berikutnya dalam upaya untuk menghentikan kebiasaan merokok. Bagi yang lahir setelah 2008, tidak akan dapat
            membeli rokok atau produk tembakau seumur hidup mereka berdasarkan undang-undang yang diharapkan akan diberlakukan tahun depan. Selandia Baru
            bertekad untuk mencapai tujuan nasional mengurangi tingkat merokok menjadi 5 persen pada tahun 2025, dengan tujuan akhir menghilangkannya sama
            sekali.
          </Text>
        </Box>
      </Section>
      <Section data-key={6} bgImage="/articles/napza/assets/image/larangan-merokok/bg-6.png">
        <AOS fontFamily="National2" w="40%" variants={fadeInUp} delay={0.2} triggerOnce={true}>
          <VStack paddingTop="40px" textAlign="justify" spacing="2rem" fontWeight={300} color="var(--fokus-black)" fontSize={{ base: "lg", md: "xl" }}>
            <Text>
              Malaysia juga akan memperkenalkan undang-undang baru untuk melarang merokok dan kepemilikan produk tembakau, termasuk alat penguap elektronik,
              bagi orang yang lahir setelah 2005 sebagai "Permainan Akhir Generasi" untuk merokok.
            </Text>
            <Text>
              Untuk mengikuti larangan membeli rokok yang diterapkan di Malaysia dan Selandia Baru, Indonesia tidak bisa langsung meniru begitu saja. Dilansir
              dari <em>health.detik.com</em>, Ketua Yayasan Lembaga Konsumen Indonesia (YLKI), Tulus Abadi mengatakan Indonesia perlu menerapkan kebijakan
              secara bertahap sebelum menerapkan aturan yang sama.
            </Text>
            <Text>
              Tulus mengatakan bahwa sebelum menerapkan larangan tersebut, Selandia Baru sebelumnya sudah menerapkan beberapa kebijakan seperti menjual rokok
              dengan harga mahal, meniadakan iklan rokok, dan melarang penjualan rokok ketengan. Kebijakan semacam itu belum ada di Indonesia sehingga akan
              sulit jika ingin menerapkan larangan pembelian rokok yang sama.
            </Text>
          </VStack>
        </AOS>
        <Box w="60%" position="relative">
          <AOS w="550px" left="50%" position="absolute" variants={fade} delay={0.4} triggerOnce={true}>
            <Image src="/articles/napza/assets/image/larangan-merokok/5-1.png" width="100%" transform="translate(-20%, -60%) rotate(7deg)"></Image>
          </AOS>
          <AOS w="250px" left="50%" position="absolute" variants={fadeInUp} delay={0.8} triggerOnce={true}>
            <Image src="/articles/napza/assets/image/larangan-merokok/5-2.png" width="100%" transform="translate(-60%, -16%)"></Image>
          </AOS>
          <AOS w="300px" left="50%" position="absolute" variants={fadeInUp} delay={1} triggerOnce={true}>
            <Image transform="translate(20%, -23%);" src="/articles/napza/assets/image/larangan-merokok/5-3.png" width="100%"></Image>
          </AOS>
        </Box>
      </Section>
      <Section data-key={7} bgImage="/articles/napza/assets/image/larangan-merokok/bg-7.png"></Section>

      <Section data-key={8} bgImage="/articles/napza/assets/image/larangan-merokok/bg-8.JPG" alignItems="flex-end" justifyContent="center">
        <Box display="flex" height="100%" width="100%">
          <Text textAlign="justify" fontSize="md" fontWeight={600} color="white">
            Butuh ketegasan dari pemerintah untuk membuat aturan yang lebih jelas dan tegas untuk mengurangi jumlah perokok yang tinggi. Dengan begitu,
            masyarakat akan memahami konsekuensinya dan tidak mencoba untuk melanggar aturan tersebut. Selain itu, butuh kesadaran seluruh kalangan masyarakat
            bahwa rokok bukan sekadar gaya hidup, melainkan kegiatan berbahaya bagi kesehatan bersama.
          </Text>
        </Box>
      </Section>
    </Box>
  );
};

export default Rokok;
