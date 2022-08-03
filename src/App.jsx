import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import "./App.scss";

function App() {
  return (
    <ChakraProvider resetCSS>
      <div className="App">
        <AppRouter />
      </div>
    </ChakraProvider>
  );
}

export default App;
