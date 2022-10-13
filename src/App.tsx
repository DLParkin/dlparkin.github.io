import * as React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { theme } from "./styles/styles";
import Navigation from "./components/navigation";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      height="calc(100vh - 56px)"
      backgroundImage={
        "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
      backgroundSize={"cover"}
    >
      Hello World
      <Text
        bottom={"58px"}
        right={"5px"}
        position={"fixed"}
        fontSize={"8px"}
        opacity={"0.8"}
      >
        Background by{" "}
        <a href="https://unsplash.com/@heytowner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          JOHN TOWNER
        </a>{" "}
        <a href="https://unsplash.com/s/photos/wallpaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </Text>
    </Box>
    <Navigation />
  </ChakraProvider>
);
