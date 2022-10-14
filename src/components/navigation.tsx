import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  //useColorMode, // Meh maybe if I feel keen
  Center,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalFooter,
  // ModalHeader,
  // ModalOverlay,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCode, FaUserCircle } from "react-icons/fa";
import MyModal from "./Modal/MyModal";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navigation() {
  //const { colorMode, toggleColorMode } = useColorMode();
  const [openDaveStudioCode, setOpenDaveStudioCode] = useState<boolean>(false);
  return (
    <>
      <Box
        bg={useColorModeValue("blackAlpha.500", "blackAlpha.500")}
        bottom={"0px"}
        height={14}
        boxShadow={"0px -1px 2px 0px rgba(117,117,117,0.3)"}
      >
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <Menu>
            <Flex justifyContent={"space-between"}>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                marginLeft={1}
                marginRight={1}
              >
                <IconButton
                  color="white"
                  aria-label="user"
                  fontSize="20px"
                  icon={<FaUserCircle />}
                />
              </MenuButton>
              {openDaveStudioCode ? (
                <IconButton
                  color="white"
                  aria-label="code-icon"
                  fontSize="20px"
                  onClick={() => setOpenDaveStudioCode(false)}
                  icon={<FaCode />}
                />
              ) : null}
            </Flex>
            <MenuList alignItems={"center"}>
              <Center>
                <br />
                <Avatar
                  size={"2xl"}
                  src={
                    "https://avatars.githubusercontent.com/u/22126206?s=400&u=22d208536d4ab0cfda0089ad77788e36c735475e&v=4"
                  }
                />
                <br />
              </Center>
              <Center flexDirection={"column"}>
                <Text fontSize={"xl"}>David</Text>
                <Text fontSize={"md"}>That be this guy 😊</Text>
              </Center>
              <MenuDivider />
              <MenuItem>About</MenuItem>
              <MenuItem>Tunes</MenuItem>
              <MenuItem onClick={() => setOpenDaveStudioCode(true)}>
                Dave Studio Code
              </MenuItem>
              <MenuItem
                as={"a"}
                href="https://www.google.com/search?q=baby+come+back"
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button> */}
        </Flex>
      </Box>
      {openDaveStudioCode ? (
        <MyModal>Hi</MyModal>
      ) : // <Modal
      //   isOpen={openDaveStudioCode}
      //   onClose={() => setOpenDaveStudioCode(false)}
      //   motionPreset={"slideInBottom"}
      // >
      //   {/* <ModalOverlay /> */}

      //   <ModalContent>
      //     hi
      //     {/* <ModalHeader>Modal Title</ModalHeader>
      //       <ModalCloseButton />
      //       <ModalBody>fuck yeah</ModalBody>

      //       <ModalFooter>
      //         <Button
      //           colorScheme="blue"
      //           mr={3}
      //           onClick={() => setOpenDaveStudioCode(false)}
      //         >
      //           Close
      //         </Button>
      //         <Button variant="ghost">Secondary Action</Button>
      //       </ModalFooter> */}
      //   </ModalContent>
      // </Modal>
      null}
    </>
  );
}
