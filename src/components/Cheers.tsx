import { Text } from "@chakra-ui/react";
import React from "react";

const Cheers = () => {
  return (
    <Text
      bottom={"58px"}
      right={"5px"}
      position={"fixed"}
      fontSize={"8px"}
      opacity={"0.8"}
    >
      Background by{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://unsplash.com/@heytowner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        JOHN TOWNER
      </a>{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://unsplash.com/s/photos/wallpaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Unsplash
      </a>
    </Text>
  );
};

export default Cheers;
