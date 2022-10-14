import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Draggable from "react-draggable";

interface Props {
  children: ReactNode;
}

const MyModal = (props: Props) => {
  return (
    <Draggable>
      <Box
        width={100}
        height={100}
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
