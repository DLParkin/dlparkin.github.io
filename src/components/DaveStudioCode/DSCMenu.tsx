import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";

interface Props {
  editorFontSize: number;
  setEditorFontSize: (fontSize: number) => void;
}

const DSCMenu = (props: Props) => {
  return (
    <Menu>
      <Flex
        borderBottom={"1px solid rgb(255 255 255 / 30%)"}
        paddingBottom={1}
        justifyContent={"space-between"}
      >
        <Box>
          <MenuButton
            aria-label="file"
            as={Button}
            cursor={"pointer"}
            minW={0}
            marginRight={0.5}
            padding={1}
            height={"auto"}
          >
            File
          </MenuButton>
          <MenuButton
            aria-label="some other thing"
            as={Button}
            cursor={"pointer"}
            minW={0}
            marginRight={0.5}
            padding={1}
            height={"auto"}
          >
            Some other thing
          </MenuButton>
        </Box>
        <Flex flexDirection={"row"}>
          <Text marginRight={"10px"} marginTop={"2px"}>
            Font Size
          </Text>
          <IconButton
            color="white"
            aria-label="user"
            fontSize={"10px"}
            float={"right"}
            backgroundColor={"transparent"}
            icon={<MinusIcon />}
            height={"10px"}
            minWidth={"10px"}
            margin={"10px 10px 10px 0px"}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            cursor={"pointer"}
            onClick={() => props.setEditorFontSize(props.editorFontSize - 2)}
          />
          <IconButton
            color="white"
            aria-label="user"
            fontSize={"10px"}
            float={"right"}
            backgroundColor={"transparent"}
            icon={<AddIcon />}
            height={"10px"}
            minWidth={"10px"}
            margin={"10px 10px 10px 0px"}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            cursor={"pointer"}
            onClick={() => props.setEditorFontSize(props.editorFontSize + 2)}
          />
        </Flex>
      </Flex>
    </Menu>
  );
};

export default DSCMenu;
