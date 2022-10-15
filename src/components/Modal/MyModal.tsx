import { CloseIcon, DragHandleIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import Draggable from "react-draggable";

interface Props {
  children: ReactNode;
  title: string;
  handleOnClose: () => void;
  width?: number | string;
  height?: number | string;
  top?: number | string;
  left?: number | string;
}

const MyModal = (props: Props) => {
  const [width] = useState<number | string>(props.width || 300);
  const [height] = useState<number | string>(props.height || 300);
  const [top] = useState<number | string>(props.top || "10vh");
  const [left] = useState<number | string>(props.left || "10vw");

  return (
    <Draggable handle=".handle">
      <Box
        width={width}
        height={height}
        maxHeight={"95vh"}
        minWidth={"200px"}
        backgroundColor={"gray.700"}
        borderRadius={"md"}
        position={"absolute"}
        top={top}
        left={left}
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
