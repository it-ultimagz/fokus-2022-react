import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Film, Inpus, Rokok } from "./pages";
import { Box, Button } from "@chakra-ui/react";

const AppRouter = () => {
  return (
    <Box>
      <Button pos="fixed" top="1rem" left="1rem" zIndex={10} colorScheme="teal">
        Home
      </Button>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/about" element={"About Us"} />
        <Route path="/faq" element={"FAQ"} />
        <Route path="/film" element={<Film />} />
        <Route path="/inpus" element={<Inpus />} />
        <Route path="/rokok" element={<Rokok />} />
      </Routes>
    </Box>
  );
};

export default AppRouter;
