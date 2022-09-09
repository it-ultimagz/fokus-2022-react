import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Film, Inpus, Rokok, RelasiNarkoba, Pengantar, Landing } from "./pages";
import { Box, Button, HStack } from "@chakra-ui/react";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";

const NavButton = (props) => {
  return (
    <Button
      color="var(--fokus-white)"
      bgColor="var(--fokus-pink)"
      transition="all 0.2s ease-in-out"
      _hover={{ bgColor: "transparent", color: "var(--fokus-pink)" }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const RoutesArray = [
  {
    path: "/film-tentang-isu-napza",
    title: "Film",
    element: <Film />,
  },
  {
    path: "/inpus-peran-duta-anti-narkoba-umn",
    title: "Inpus",
    element: <Inpus />,
  },
  {
    path: "/dilema-rokok-indonesia",
    title: "Rokok",
    element: <Rokok />,
  },
  {
    path: "/relasi-narkoba-dan-ketenaran",
    title: "Relasi Narkoba dan Ketenaran",
    element: <RelasiNarkoba />,
  },
  {
    path: "/",
    title: "Landing",
    element: <Pengantar />,
  },
  {
    path: "/fokus-2022",
    title: "Home Fokus 2022",
    element: <Landing />,
  },
];

const AppRouter = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  return (
    <Box>
      <Link to="/">
        <NavButton pos="fixed" top="3rem" left="3rem" zIndex={10}>
          <Box mr="0.5rem" as="i">
            <AiFillHome mr="1rem" />
          </Box>
          Beranda
        </NavButton>
      </Link>
      <NavButton pos="fixed" bottom="3rem" right="3rem" zIndex={10} boxSize="3rem" fontSize="1.5rem" p="0" borderRadius="50%" onClick={scrollToTop}>
        <IoIosArrowUp />
      </NavButton>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          {RoutesArray.map((item, index) => (
            <Route path={item.path} element={item.element} key={index} />
          ))}
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default AppRouter;
