import { CloseIcon, DragHandleIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import Draggable from "react-draggable";

interface Props {
  children: ReactNode;
  title: string;
  handleOnClose: () => void;
  width?: number | string | string[];
  minWidth?: number | string;
  height?: number | string | string[];
  top?: number | string;
  left?: number | string;
}

const MyModal = (props: Props) => {
  return (
    <Draggable handle=".handle">
      <Box
        width={props.width || "98%"}
        height={props.height || "100%"}
        maxHeight={"95vh"}
        minWidth={props.minWidth || "200px"}
        backgroundColor={"gray.700"}
        borderRadius={"md"}
        position={"absolute"}
        top={props.top || isMobile ? "2vh" : "10vh"}
        left={props.left || isMobile ? "2vw" : "10vw"}
        boxShadow={"0px 0px 0px 1px rgb(255 255 255 / 10%)"}
        resize={"both"}
        overflow={"auto"}
      >
        <Box
          className="handle"
          borderBottom={"1px solid rgb(255 255 255 / 30%)"}
          cursor={"grab"}
          padding={"5px 5px 5px 10px"}
        >
          {props.title}
          <IconButton
            color="white"
            aria-label="user"
            fontSize={"10px"}
            float={"right"}
            backgroundColor={"transparent"}
            icon={<CloseIcon />}
            height={"5px"}
            minWidth={"5px"}
            margin={"10px 5px"}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            cursor={"pointer"}
            onClick={props.handleOnClose}
          />
          <IconButton
            color="white"
            aria-label="user"
            fontSize={"10px"}
            float={"right"}
            backgroundColor={"transparent"}
            icon={<DragHandleIcon />}
            height={"5px"}
            minWidth={"5px"}
            margin={"10px 5px"}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            cursor={"grab"}
          />
        </Box>
        {props.children}
      </Box>
    </Draggable>
  );
};

export default MyModal;
