import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import Draggable from "react-draggable";

interface Props {
  children: ReactNode;
}

const MyModal = (props: Props) => {
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(100);

  return (
    <Draggable>
      <Box
        width={width}
        height={height}
        backgroundColor={"gray.700"}
        borderRadius={"md"}
        position={"absolute"}
        top={"10vh"}
        left={"25vw"}
        cursor={"pointer"}
        boxShadow={"0px 0px 0px 1px rgb(255 255 255 / 10%)"}
      >
        {props.children}
      </Box>
    </Draggable>
  );
};

export default MyModal;
