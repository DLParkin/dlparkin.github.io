import { CloseIcon, DragHandleIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import Draggable from "react-draggable";

interface Props {
  children: ReactNode;
  title: string;
  handleOnClose: () => void;
  width?: number;
  height?: number;
}

const MyModal = (props: Props) => {
  const [width] = useState<number>(props.width || 300);
  const [height] = useState<number>(props.height || 300);

  return (
    <Draggable handle=".handle">
      <Box
        width={width}
        height={height}
        minWidth={"200px"}
        backgroundColor={"gray.700"}
        borderRadius={"md"}
        position={"absolute"}
        top={"10vh"}
        left={"25vw"}
        boxShadow={"0px 0px 0px 1px rgb(255 255 255 / 10%)"}
        resize={"both"}
        overflow={"auto"}
      >
        <Box
          className="handle"
          borderBottom={"1px solid rgb(255 255 255 / 30%)"}
          cursor={"grab"}
          padding={"5px 5px 5px 5px"}
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
