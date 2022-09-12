import React from "react";
import { Box, Flex, Heading, VStack, Text, Image, Grid, GridItem, Divider } from "@chakra-ui/react";
import { AOS } from "../components/AOS";
import { fadeInUp, zoomIn, zoomInRotate, popupBottomRight, popupBottomLeft, fade, fadeInLeft, fadeInRight } from "../shared/animation";
import { Section } from "../components/commons/Section";

const S = (props) => {
  return <span style={{ fontFamily: "DTRandomDisplay", fontWeight: 100 }}>{props.children}</span>;
};

const RelasiNarkoba = () => {
  return (
    <Box overflowX="hidden">
      <Section
        data-key={1}
        bgImage="/articles/napza/assets/image/relasi-narkoba/bg-1.png"
        pos="relative"
        color="var(--fokus-black)"
        flexDir="column"
        alignItems="flex-start"
        overflowY="hidden"
      >
        <AOS pos="absolute" top="5rem" left="26%" variants={zoomInRotate} triggerOnce={true} delay={0.2}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-1.png" w="150px" />
        </AOS>
        <AOS pos="absolute" bottom="-7rem" left="16%" variants={zoomInRotate} triggerOnce={true} delay={0.6}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-1.png" w="300px" />
        </AOS>
        <AOS pos="absolute" top="40%" right="20%" variants={zoomInRotate} triggerOnce={true} delay={0.8}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-1.png" w="300px" />
        </AOS>
        <VStack alignItems="flex-start">
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "7xl" }}>
              PANDANGAN
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "7xl" }}>
              KAUM MUDA PERIHAL
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "7xl" }}>
              NARKOBA & KETENARAN
            </Heading>
          </AOS>
        </VStack>
        <AOS triggerOnce={true} variants={fadeInUp} mt="5rem" fontFamily="National2" fontSize="md" delay={1.2}>
          <Text color="var(--fokus-pink)">
            <b>Penulis:</b>{" "}
            <Box color="var(--fokus-black)" as="span" fontWeight="300">
              Sherly Julia Halim & Christabella Abigail Loppies
            </Box>
          </Text>
          <Text color="var(--fokus-pink)">
            <b>Editor:</b>{" "}
            <Box color="var(--fokus-black)" as="span" fontWeight="300">
              Vellanda
            </Box>
          </Text>
        </AOS>
      </Section>
      <Box data-key={2} bgColor="var(--fokus-black)">
        <AOS height="100vh" variants={fade} delay={0.2} triggerOnce={true}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/cover-bg-1.png" objectFit="contain" objectPosition="center" w="100%" h="100%" />
        </AOS>
      </Box>
      <Section data-key={3} bgImage="/articles/napza/assets/image/relasi-narkoba/bg-2.png" color="var(--fokus-black)" pos="relative">
        <AOS pos="absolute" top="15rem" left="5%" variants={zoomInRotate} triggerOnce={true} delay={0.4}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-3.png" w="80px" />
        </AOS>
        <AOS pos="absolute" top="8rem" left="36%" variants={zoomInRotate} triggerOnce={true} delay={0.5}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-3.png" w="120px" />
        </AOS>
        <AOS pos="absolute" bottom="15rem" right="40%" variants={zoomInRotate} triggerOnce={true} delay={0.6}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-3.png" w="50px" />
        </AOS>
        <AOS pos="absolute" top="35%" left="30%" variants={zoomIn} triggerOnce={true} delay={1.2}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-2.png" w="300px" />
        </AOS>
        <VStack spacing="2.5rem" pl="50%">
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Text fontFamily="National2" fontSize="xl">
              Penyalahgunaan narkotika, psikotropika, dan obat terlarang (narkoba) bukan hanya terjadi di kalangan masyarakat umum, melainkan banyak artis
              Indonesia juga terlibat. Akhirnya, ketenaran dan narkoba pun menjadi hal yang tidak terpisahkan.
            </Text>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Text fontFamily="National2" fontSize="xl">
              Berdasarkan pengamatan ULTIMAGZ, terdapat kurang lebih 66 artis Indonesia yang terkena kasus narkoba dari 2018 sampai 2022. Beberapa di antaranya
              adalah Ardhito Pramono, Jefri Nichol, dan Andrie Bayuajie.
            </Text>
          </AOS>
        </VStack>
      </Section>
      <Section data-key={4} bgColor="var(--fokus-black)" color="var(--fokus-white)" pos="relative">
        <VStack spacing="3rem" fontFamily="National2" fontWeight="300" fontSize="lg">
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true}>
            <Grid templateColumns="1fr 3fr 5fr" gap="1rem">
              <GridItem>
                <Heading fontFamily="DTRandomDisplay" color="var(--fokus-pink)" fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "6xl" }} fontWeight="300">
                  01
                </Heading>
              </GridItem>
              <GridItem>
                <Heading fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "5xl" }} fontFamily="National2" color="var(--fokus-yellow)">
                  Ardhito Pramono
                </Heading>
              </GridItem>
              <GridItem>
                <Text>
                  Ardhito Pramono adalah seorang musisi dan aktor Indonesia. Namun, aktor film “Nanti Kita Cerita Tentang Hari Ini” tersebut ditangkap pada 2022
                  akibat penyalahgunaan narkoba jenis ganja. Ia mengaku menggunakan ganja untuk memberi rasa tenang dan fokus dalam bekerja.
                </Text>
              </GridItem>
            </Grid>
            <Divider mt="3rem" />
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Grid templateColumns="1fr 3fr 5fr" gap="1rem">
              <GridItem>
                <Heading fontFamily="DTRandomDisplay" color="var(--fokus-pink)" fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "6xl" }} fontWeight="300">
                  02
                </Heading>
              </GridItem>
              <GridItem>
                <Heading fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "5xl" }} fontFamily="National2" color="var(--fokus-yellow)">
                  Jefri Nichol
                </Heading>
              </GridItem>
              <GridItem>
                <Text>
                  Memulai karier pada 2013, aktor Jefri Nichol diketahui positif mengonsumsi ganja. Jefri pun mengaku bahwa ia menggunakan ganja untuk
                  membantunya lebih rileks dan mudah beristirahat di tengah jadwal syuting film yang padat.
                </Text>
              </GridItem>
            </Grid>
            <Divider mt="3rem" />
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <Grid templateColumns="1fr 3fr 5fr" gap="1rem">
              <GridItem>
                <Heading fontFamily="DTRandomDisplay" color="var(--fokus-pink)" fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "6xl" }} fontWeight="300">
                  03
                </Heading>
              </GridItem>
              <GridItem>
                <Heading fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "5xl" }} fontFamily="National2" color="var(--fokus-yellow)">
                  Andrie Bayuajie
                </Heading>
              </GridItem>
              <GridItem>
                <Text>
                  Andrie Bayuajie adalah gitaris dari grup musik ternama Indonesia, Kahitna sejak 1986 silam. Pada 2022, Andrie ditangkap dan terbukti positif
                  menggunakan <em>benzodiazepine</em>. Ia mengungkapkan bahwa alasan penggunaannya adalah untuk mempermudah istirahat di tengah jadwal pekerjaan
                  yang padat sebagai musisi.
                </Text>
              </GridItem>
            </Grid>
          </AOS>
        </VStack>
      </Section>
      <Section data-key={5} bgColor="var(--fokus-white)" color="var(--fokus-black)" justifyContent="flex-start" alignItems="flex-end">
        <VStack fontFamily="National2" spacing="1.5rem" alignItems="flex-start" mb="12rem">
          <AOS variants={fadeInUp} delay={0.2} triggerOnce={true} pos="relative">
            <AOS variants={popupBottomRight} delay={1} triggerOnce={true} pos="absolute" right="0" top="-150px">
              <Image src="/articles/napza/assets/image/relasi-narkoba/asset-4.png" w="200px" />
            </AOS>
            <AOS variants={popupBottomLeft} delay={1.2} triggerOnce={true} pos="absolute" right="-300px" top="-50px">
              <Image src="/articles/napza/assets/image/relasi-narkoba/asset-5.png" w="200px" />
            </AOS>
            <Heading fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "7xl" }} color="var(--fokus-pink)" fontWeight="800" fontFamily="National2">
              TANGGAPAN
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <Heading fontSize={{ base: "xl", md: "2xl", xl: "2xl", "2xl": "7xl" }} color="var(--fokus-pink)" fontWeight="800" fontFamily="National2">
              GENERASI MUDA
            </Heading>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <Text w="40%" fontWeight="300" fontSize="lg">
              Kepada ULTIMAGZ, Richard Owen dari President University dan Madala Fandrimira dari Universitas Multimedia Nusantara (UMN) memberikan pendapat
              mereka terkait hal ini.
            </Text>
          </AOS>
        </VStack>
      </Section>
      <Section data-key={6} bgColor="var(--fokus-blue)" color="var(--fokus-yellow)">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="3rem">
          <AOS variants={fadeInLeft} delay={0.2} triggerOnce={true}>
            <GridItem>
              <Heading
                fontFamily="DTRandomDisplay"
                fontWeight="300"
                fontSize={{
                  base: "4rem",
                  md: "8rem",
                  xl: "12rem",
                  "2xl": "16rem",
                }}
                lineHeight={{
                  base: "2rem",
                  md: "5rem",
                  xl: "8rem",
                  "2xl": "11rem",
                }}
                textAlign="center"
              >
                01
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <GridItem>
              <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "3xl", "2xl": "5xl" }} w={{ base: "100%", md: "80%" }}>
                Apa tanggapan kamu terhadap artis-artis yang pernah tertangkap menggunakan narkoba?
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={zoomIn} delay={0.8} triggerOnce={true}>
            <GridItem>
              <Flex alignItems="ceter" justifyContent="center">
                <Image src="/articles/napza/assets/image/relasi-narkoba/asset-6.png" boxSize="60%" />
              </Flex>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <GridItem>
              <VStack fontFamily="National2" fontWeight="300" fontSize={{ base: "lg", md: "xl" }} spacing="2rem">
                <Text>
                  Richard: “Artis-artis yang tertangkap penyalahgunaan narkoba perlu diberi perhatian lebih. Namun, tidak perlu terlalu dipublikasikan,
                  dikarenakan bisa saja mereka menjadi sosok idola yang dapat memberikan contoh yang buruk kepada penggemarnya.”
                </Text>
                <Text>
                  Madala: “Benar-benar sangat disayangkan, sih. Apalagi kalau mereka itu artis yang terkenal dan karya-karya mereka itu yang bisa dibilang bagus
                  gitu. Cuma, ya namanya manusia, ya ada godaan juga. Mereka (artis) bisa tergoda juga, sama seperti pengguna-pengguna narkoba lainnya.”
                </Text>
              </VStack>
            </GridItem>
          </AOS>
        </Grid>
      </Section>
      <Section data-key={7} bgColor="var(--fokus-white)" color="var(--fokus-black)">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="3rem">
          <AOS variants={fadeInLeft} delay={0.2} triggerOnce={true}>
            <GridItem>
              <Heading
                fontFamily="DTRandomDisplay"
                fontWeight="300"
                fontSize={{
                  base: "4rem",
                  md: "8rem",
                  xl: "12rem",
                  "2xl": "16rem",
                }}
                lineHeight={{
                  base: "2rem",
                  md: "5rem",
                  xl: "8rem",
                  "2xl": "11rem",
                }}
                textAlign="center"
                color="var(--fokus-pink)"
              >
                02
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <GridItem>
              <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "3xl", "2xl": "5xl" }} w={{ base: "100%", md: "80%" }}>
                Menurut kamu, apakah ada hubungan antara penggunaan narkoba dan ketenaran artis?
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={zoomIn} delay={0.8} triggerOnce={true}>
            <GridItem>
              <Flex alignItems="ceter" justifyContent="center">
                <Image src="/articles/napza/assets/image/relasi-narkoba/asset-7.png" boxSize="50%" />
              </Flex>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <GridItem>
              <VStack fontFamily="National2" fontWeight="300" spacing="2rem" fontSize={{ base: "lg", md: "xl" }}>
                <Text>
                  Richard: “Bisa saja hal itu terjadi. Soalnya, semakin tenarnya seseorang pasti banyak pula tekanan bagi artis tersebut. Seperti apa yang dia
                  lakukan akan selalu dikritik ataupun dilihat oleh orang lain.”
                </Text>
                <Text>
                  Madala: “Bisa jadi ada (hubungan). Soalnya, artis-artis itu dipandang banyak orang. Ekspektasi orang ke mereka juga tinggi. Jadi, mereka harus
                  jaga <em>image</em> mereka. Istilahnya, kadang mereka gak bisa jadi diri mereka sendiri dan itu kadang juga membuat mereka jadi tertekan.”
                </Text>
              </VStack>
            </GridItem>
          </AOS>
        </Grid>
      </Section>
      <Section data-key={8} bgColor="var(--fokus-blue)" color="var(--fokus-yellow)">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="3rem">
          <AOS variants={fadeInLeft} delay={0.2} triggerOnce={true}>
            <GridItem>
              <Heading
                fontFamily="DTRandomDisplay"
                fontWeight="300"
                fontSize={{
                  base: "4rem",
                  md: "8rem",
                  xl: "12rem",
                  "2xl": "16rem",
                }}
                lineHeight={{
                  base: "2rem",
                  md: "5rem",
                  xl: "8rem",
                  "2xl": "11rem",
                }}
                textAlign="center"
              >
                03
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <GridItem>
              <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "3xl", "2xl": "5xl" }} w={{ base: "100%", md: "80%" }}>
                Menurut kamu, artis yang sudah tertangkap menggunakan narkoba perlu terkena ‘cancel culture’ tidak?
              </Heading>
            </GridItem>
          </AOS>
          <GridItem pos="relative" h="100%">
            <AOS variants={fadeInUp} delay={0.8} triggerOnce={true} pos="absolute" top="0" left="0" h="55%">
              <Image src="/articles/napza/assets/image/relasi-narkoba/asset-9.png" h="100%" />
            </AOS>
            <AOS variants={fadeInUp} delay={1} triggerOnce={true} pos="absolute" bottom="0" right="0" h="55%">
              <Image src="/articles/napza/assets/image/relasi-narkoba/asset-8.png" h="100%" />
            </AOS>
          </GridItem>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <GridItem>
              <VStack fontFamily="National2" fontWeight="300" fontSize={{ base: "lg", md: "xl" }} spacing="2rem">
                <Text>
                  Richard: “Jika artis sudah terjerumus ke dalam penyalahgunaan narkoba, masih diperbolehkan untuk menjadi artis. Namun, untuk beberapa tahun
                  awal kasus bisa dibatasi atau di-<em>ban</em> dulu untuk <em>recovery</em> mental.”
                </Text>
                <Text>
                  Madala: “Ada beberapa hal yang mungkin bisa jadi pertimbangan. Misalnya, ada beberapa artis yang karya-karya mereka itu benar-benar bagus,
                  tapi akhirnya mereka terjerumus ke narkoba. Menurut aku, kalau misalnya dia baru pertama kali pakai (narkoba) dan setelah terkena kasus dia
                  berubah menjadi lebih baik, <em>fine</em> saja. Tapi ‘kan ada juga beberapa artis yang sudah tertangkap sekali, lalu masih dikasih kesempatan
                  atau dikasih panggung, setelahnya masih gunain (narkoba) lagi. Nah, itu menurut aku perlu diterapkan sih ‘cancel culture’ itu.”
                </Text>
              </VStack>
            </GridItem>
          </AOS>
        </Grid>
      </Section>
      <Section data-key={9} bgColor="var(--fokus-white)" color="var(--fokus-black)">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="3rem">
          <AOS variants={fadeInLeft} delay={0.2} triggerOnce={true}>
            <GridItem>
              <Heading
                fontFamily="DTRandomDisplay"
                fontWeight="300"
                fontSize={{
                  base: "4rem",
                  md: "8rem",
                  xl: "12rem",
                  "2xl": "16rem",
                }}
                lineHeight={{
                  base: "2rem",
                  md: "5rem",
                  xl: "8rem",
                  "2xl": "11rem",
                }}
                textAlign="center"
                color="var(--fokus-pink)"
              >
                04
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <GridItem>
              <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "3xl", "2xl": "5xl" }} w={{ base: "100%", md: "90%" }}>
                Menurut kamu, apakah artis-artis yang menggunakan narkoba dapat memberi pengaruh buruk bagi para penggemar mereka?
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={zoomIn} delay={0.8} triggerOnce={true}>
            <GridItem>
              <Flex alignItems="ceter" justifyContent="center">
                <Image src="/articles/napza/assets/image/relasi-narkoba/asset-10.png" boxSize="80%" />
              </Flex>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <GridItem>
              <VStack fontFamily="National2" fontWeight="300" fontSize={{ base: "lg", md: "xl" }} spacing="2rem">
                <Text>
                  Richard: “Ya, karena artis-artis memiliki <em>fans</em> dari berbagai kalangan. Hal yang saya takutkan ialah <em>fans</em>-nya yang masih
                  remaja atau di bawah umur mengikuti contoh dari artis tersebut karena dianggap hal yang keren.”
                </Text>
                <Text>
                  Madala: “Tergantung sama penggemarnya sendiri. Mungkin gak kasih pengaruh buruk, tapi citra yang buruk. Kalau misalnya pengaruh itu 'kan
                  tergantung penggemarnya sendiri, mau contoh atau enggak. Kalau menurut mereka menggunakan narkoba itu hal yang buruk, ya gak dicontoh. Ambil
                  hal-hal baik dari si artis itu saja. Jadi menurut aku benar-benar tergantung penggemarnya, sih dan pastinya gak baik untuk dicontoh.”
                </Text>
              </VStack>
            </GridItem>
          </AOS>
        </Grid>
      </Section>
      <Section data-key={10} bgColor="var(--fokus-black)" color="var(--fokus-white)" textAlign="center" pos="relative">
        <AOS pos="absolute" h="100%" left="0" variants={fadeInLeft} stiffness={50} triggerOnce={true} threshold={0.2}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-11.png" h="100%" />
        </AOS>
        <AOS pos="absolute" h="100%" right="0" variants={fadeInRight} stiffness={50} triggerOnce={true} threshold={0.2}>
          <Image src="/articles/napza/assets/image/relasi-narkoba/asset-11.png" h="100%" transform="scaleX(-1)" />
        </AOS>
        <AOS variants={zoomIn} delay={0.4} triggerOnce={true}>
          <Text w="90%" fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "4xl", "2xl": "6xl" }} fontStyle="italic">
            Beberapa artis mengaku menggunakan narkoba karena mereka sedang sedih atau biar bisa rileks...
          </Text>
        </AOS>
      </Section>
      <Section data-key={11} bgColor="var(--fokus-blue)" color="var(--fokus-yellow)">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="3rem">
          <AOS variants={fadeInLeft} delay={0.2} triggerOnce={true}>
            <GridItem>
              <Heading
                fontFamily="DTRandomDisplay"
                fontWeight="300"
                fontSize={{
                  base: "4rem",
                  md: "8rem",
                  xl: "12rem",
                  "2xl": "16rem",
                }}
                lineHeight={{
                  base: "2rem",
                  md: "5rem",
                  xl: "8rem",
                  "2xl": "11rem",
                }}
                textAlign="center"
              >
                05
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.4} triggerOnce={true}>
            <GridItem>
              <Heading fontFamily="National2" fontSize={{ base: "xl", md: "2xl", xl: "3xl", "2xl": "5xl" }} w={{ base: "100%", md: "80%" }}>
                Menurut kamu, apakah itu alasan yang baik untuk menggunakan narkoba? Kenapa?
              </Heading>
            </GridItem>
          </AOS>
          <AOS variants={zoomIn} delay={0.8} triggerOnce={true}>
            <GridItem h="100%" position="relative">
              <AOS variants={fadeInLeft} delay={0.8} triggerOnce={true} pos="absolute" top="0" left="0" w="45%">
                <Image src="/articles/napza/assets/image/relasi-narkoba/asset-12.png" w="100%" />
              </AOS>
              <AOS variants={fadeInRight} delay={1} triggerOnce={true} pos="absolute" bottom="0" right="0" w="45%">
                <Image src="/articles/napza/assets/image/relasi-narkoba/asset-13.png" w="100%" />
              </AOS>
            </GridItem>
          </AOS>
          <AOS variants={fadeInUp} delay={0.6} triggerOnce={true}>
            <GridItem>
              <VStack fontFamily="National2" fontWeight="300" fontSize={{ base: "lg", md: "xl" }} spacing="2rem">
                <Text>
                  Richard: “Walaupun sedih atau stres menurut saya, kita tidak seharusnya jatuh ke dalam penyalahgunaan narkoba. Karena dengan menggunakan
                  narkoba, sensasi rileks yang kita alami hanya bersifat sementara dan masalah yang kita alami akan tetap ada dan harus dihadapi.”
                </Text>
                <Text>
                  Madala: “Sebenarnya itu benar-benar gak bisa digunakan sebagai alasan, sih karena ada banyak hal-hal yang bisa dijadikan jalan keluar dari
                  sedih atau bisa rileks itu. Jadi gunain narkoba itu bukan satu-satunya jalan, ada banyak jalan gitu. Mungkin bisa ke psikolog atau psikiater,
                  atau semacamnya. Ya, menurut aku, itu bisa jadi jalan keluar lain, sih. Kenapa gak coba hal yang lain dulu daripada masuk ke dunia narkoba.
                  ‘Kan gak baik buat diri sendiri, gak baik buat karier, gak baik buat pandangan orang-orang.”
                </Text>
              </VStack>
            </GridItem>
          </AOS>
        </Grid>
      </Section>
    </Box>
  );
};

export default RelasiNarkoba;
