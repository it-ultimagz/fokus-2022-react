import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { AOS } from "../components/AOS";
import { fadeInUp, zoomIn } from "../shared/animation";
import { Section } from "../components/commons/Section";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const C = (props) => {
  return <span style={{ color: "var(--fokus-pink)" }}>{props.children}</span>;
};

const Inpus = () => {
  return (
    <Box overflowX="hidden">
      <Section
        data-key={1}
        bgImage="url('/articles/napza/assets/image/inpus/Inpus1.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
        color="var(--fokus-blue)"
        flexDir="column"
      >
        <VStack>
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontWeight="400" fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "5xl" }} textAlign="center">
              DUTA ANTI NARKOBA UMN,
            </Text>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Text mt="-1vw"lineHeight="4vw" fontWeight="bold" fontFamily="National2" fontSize={{ base: "4xl", md: "5xl", xl: "6xl", "2xl": "7xl" }} textAlign="center">
              US<S>A</S>HA G<S>E</S>NER<S>A</S>SI
              <br /> M<S>U</S>DA BEB<S>A</S>S NARK
              <S>O</S>B<S>A</S>
            </Text>
          </AOS>
        </VStack>
        <AOS triggerOnce={true} variants={fadeInUp} mt="1rem" textAlign="center" fontFamily="National2" fontSize="md" delay={1.2}>
          <Text>
            <b>Penulis:</b>{" "}
            <Box as="span" fontWeight="300" color="var(--fokus-black)">
              Cheryl Natalia, Michael Ludovico
            </Box>
          </Text>
          <Text>
            <b>Editor:</b>{" "}
            <Box as="span" fontWeight="300" color="var(--fokus-blue)">
              Vellanda
            </Box>
          </Text>
        </AOS>
      </Section>

      <Box bgImage="url('/articles/napza/assets/image/inpus/Inpus4.png')" bgRepeat="no-repeat" bgSize="cover" bgPos="center" minH="100vh" w="100vw" />
      <Section bgColor="var(--fokus-yellow)" minH="100vh" w="100vw" py="4vh">
        <Flex
          justifyContent="center"
          verticalAlign="center"
          alignSelf="center"
          alignItems="center"
          flexDirection={{ base: "column-reverse", lg: "row" }}
          h="100%"
        >
          <AOS fontFamily="National2" variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontSize="lg" fontWeight="300" textAlign="justify" color="var(--fokus-blue)" maxW={{ base: "", md: "60vw" }}>
              <b>Serpong, ULTIMAGZ.com - </b> Universitas pun turut andil untuk berperan melakukan pencegahan, salah satunya dengan menunjuk duta yang fokus
              mempublikasikan pencegahan tersebut. Universitas Multimedia Nusantara (UMN) sendiri telah membentuk Duta Anti Narkoba yakni Lembaga Semi Otonom
              (LSO) yang bertujuan untuk menyuarakan anti narkoba sejak 2016. Dalam menjalankan perannya, Duta Anti Narkoba melibatkan masyarakat secara aktif.{" "}
              <br /> <br />
              “Kita tentunya berperan untuk mengajak dan juga generasi-generasi semua, terutama mahasiswa-mahasiswa UMN agar kita semua bisa bersatu dan kita
              bisa membentuk sebuah generasi yang kayak bisa bersih, sehat, dan aman dari narkoba,” ucap Wakil Ketua Duta Anti Narkoba UMN Kathleen Ruth pada
              Selasa (05/07/22) saat diwawancarai ULTIMAGZ. <br /> <br />
              Keberadaan Duta Anti Narkoba UMN ini cukup disadari dengan baik di kalangan mahasiswa UMN. Namun, peran dan tugasnya masih belum diketahui jelas
              oleh sebagian mahasiswa. Berdasarkan survei mandiri yang dilakukan oleh tim ULTIMAGZ dengan 10 responden, 7 mahasiswa UMN mengetahui keberadaan
              Duta Anti Narkoba UMN. Namun, enam di antaranya masih belum mengetahui peran dan tugas Duta Anti Narkoba. Hal ini dikarenakan Duta Anti Narkoba
              UMN tahun ini lebih sering melakukan kegiatan eksternal. Salah satu kegiatan eksternal tersebut adalah program DAN Care For U. Program ini
              dijalankan dengan membagi-bagikan hadiah (<em>merchandise</em>) yang mempromosikan Duta Anti Narkoba UMN ke masyarakat di luar UMN.
            </Text>
          </AOS>
          <AOS variants={zoomIn} delay={0.2} triggerOnce={true}>
            <Image maxW={{ base: "60vw", lg: "25vw" }} src="/articles/napza/assets/image/inpus/Foto3.png" p="5vh" />
          </AOS>
        </Flex>
      </Section>
      <Section bgImage="url('/articles/napza/assets/image/inpus/Inpus6.png')" bgRepeat="no-repeat" bgSize="cover" bgPos="center" minH="100vh" w="100vw">
        <Flex justifyContent="center" verticalAlign="center" alignSelf="center" alignItems="center" flexDirection="column" h="100%">
          <AOS fontFamily="National2" variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontWeight="bold" fontSize="4xl" color="var(--fokus-white)" textAlign="center">
              PENYALAHGUNAAN
              <C>
                {" "}
                NARKOTIKA <br /> PSIKOTROPIKA
              </C>
              , DAN{" "}
              <C>
                OBAT-OBATAN <br />
                TERLARANG
              </C>{" "}
              (NARKOBA) HINGGA SAAT INI
              <br /> MASIH MENJADI{" "}
              <C>
                PERMASALAHAN <br />
                NASIONAL
              </C>{" "}
              YANG MENGINCAR MASYARAKAT, <br /> <C>TERUTAMA REMAJA</C>.
            </Text>
          </AOS>
        </Flex>
      </Section>
      <Section bgImage="url('/articles/napza/assets/image/inpus/Inpus7.png')" bgRepeat="no-repeat" bgSize="cover" bgPos="center" minH="100vh" w="100vw">
        <Flex justifyContent="center" verticalAlign="center" alignSelf="center" alignItems="center" flexDirection="column" h="100%" py="4vh">
          <AOS variants={zoomIn} delay={0.2} triggerOnce={true}>
            <Image maxW="40vw" src="/articles/napza/assets/image/inpus/wawancara.jpg" pb="3vh" />
          </AOS>
          <AOS fontFamily="National2" variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Flex justify="space-around" maxW="55vw" color="var(--fokus-blue)" fontWeight="300" fontSize="lg">
              <Text textAlign="justify">
                Setiap bulan, ada pula penyuluhan ke empat Sekolah Menengah Atas (SMA) seperti SMA BPK Penabur Gading Serpong dan Regina Pacis Jakarta. Duta
                Anti Narkoba UMN juga akan melakukan kegiatan ke beberapa SMA lainnya pada bulan Juli. Tidak hanya itu, baru-baru ini, Duta Anti Narkoba UMN
                berkolaborasi dengan Forum Mahasiswa Peduli Anak (FOMPA) untuk memberi pembelajaran kepada anak-anak di Panti Asuhan Pintu Elok tentang bahaya
                penyalahgunaan narkoba dan kekerasan anak.
              </Text>
              <Text textAlign="justify" ps="2rem">
                Sementara itu, secara internal, Duta Anti Narkoba UMN lebih fokus mengedukasi mahasiswa. Contohnya, membuat video edukasi anti narkoba setiap
                bulannya yang diunggah ke Instagram dan dikirimkan juga secara pribadi melalui WhatsApp. Lebih lanjut, Kathleen juga membagikan rencana Duta
                Anti Narkoba pada bulan September mendatang. “Bentar lagi akan ada event yang namanya Anti Narkoba Week yang akan diselenggarakan dalam tiga
                rangkaian. Ada lomba, donasi, sama ada seminar edukasi anti narkoba,” terang Kathleen.
              </Text>
            </Flex>
          </AOS>
        </Flex>
      </Section>
      <Section bgColor="#dffe58" minH="100vh" w="100vw" py="4vh">
        <Flex justifyContent="center" verticalAlign="center" alignSelf="center" alignItems="center" flexDirection={{ base: "column", lg: "row" }} maxH="100%">
          <AOS variants={zoomIn} delay={0.2} triggerOnce={true}>
            <Image maxW={{ base: "60vw", lg: "25vw" }} src="/articles/napza/assets/image/inpus/Foto7.png" p="5vh" />
          </AOS>
          <AOS fontFamily="National2" variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontSize={{ base: "lg", md: "xl" }} textAlign="justify" maxW={{ base: "", md: "60vw" }} color="var(--fokus-blue)" fontWeight="300">
              Secara keseluruhan, Kathleen melihat penyuluhan dan acara-acara yang sudah dilakukan Duta Anti Narkoba baik eksternal maupun internal telah
              menunjukkan hasil yang baik. Sebab, Duta Anti Narkoba cukup mendapat respons positif dari masyarakat. <br />
              <br /> “Kita ‘kan punya Instagram. Biasanya dari Instagram itu setelah kita lakukan <em>event</em>, mereka kayak banyak banget yang kasih{" "}
              <em>feedback</em> positif <em>as in</em> mereka DM (<em>direct message</em>) kita. Mereka tanya-tanya tentang narkoba, kayak mereka penasaran gitu
              jadinya,” jelas Kathleen. <br />
              <br /> “Sampai saat ini, enggak ada (mahasiswa UMN menyalahgunakan narkoba), ya,” kata Kathleen. “Menurut aku, mungkin mahasiswa UMN, tuh dari
              Duta Anti Narkoba ini sudah sangat <em>aware</em> dengan bahaya narkoba yang ada di masyarakat kita,” lanjutnya. <br />
              <br /> Kathleen menyebutkan bahwa banyak mahasiswa UMN yang sudah menyadari bahaya dari narkoba. Namun, belum memahami informasi seputar
              rehabilitasi. <br />
              <br /> Selepas diperlukannya edukasi lebih mengenai rehabilitasi, Kathleen ingatkan pentingnya seluruh mahasiswa UMN untuk tetap menjaga diri dari
              bahaya narkoba agar dapat menjadi orang yang berkualitas. Sebab, narkoba dapat memberikan dampak buruk kepada penggunanya. Bukan hanya dalam
              jangka waktu pendek, melainkan juga secara jangka panjang. Kondisi tersebut berpotensi merusak masa depan generasi penerus bangsa.
            </Text>
          </AOS>
        </Flex>
      </Section>
      <Section bgColor="#3c3bd7" minH="100vh" w="100vw">
        <Flex justifyContent="center" verticalAlign="center" alignSelf="center" alignItems="center" flexDirection="column" h="100%">
          <AOS variants={zoomIn} delay={0.2} triggerOnce={true}>
            <Image maxW="50vw" src="/articles/napza/assets/image/inpus/Foto8.png" />
          </AOS>
          <AOS fontFamily="National2" variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontWeight="400" fontSize={{ base: "xl", md: "2xl", xl: "3xl", "2xl": "4xl" }} color="var(--fokus-yellow)" textAlign="center">
              “Semoga mahasiswa UMN sesuai dengan visi misi UMN,
              <br /> bisa menjadi mahasiswa yang berkualitas dan <i>aware</i> agar
              <br /> mereka semua bisa menciptakan sebuah masa depan yang
              <br /> bersih, aman, dan sehat dari narkoba,”
              <br /> pesan Wakil Ketua Duta Anti Narkoba UMN Kathleen Ruth.
            </Text>
          </AOS>
          <AOS variants={zoomIn} delay={0.2} triggerOnce={true}>
            <Image maxW="50vw" src="/articles/napza/assets/image/inpus/Foto8.png" transform="scale(-1,-1)" ms="-7vw" />
          </AOS>
        </Flex>
      </Section>
    </Box>
  );
};

export default Inpus;
