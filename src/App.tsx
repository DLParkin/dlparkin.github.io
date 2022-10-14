import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./styles/styles";
import Cheers from "./components/Cheers";
import Navigation from "./components/NavigationMenu";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      height="calc(100vh - 56px)"
      backgroundImage={
        "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
      backgroundSize={"cover"}
    >
      <Cheers />
    </Box>
    <Navigation />
  </ChakraProvider>
);
