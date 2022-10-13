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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
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
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
              David
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar
                  size={"2xl"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </Center>
              <br />
              <Center>
                <p>Username</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Your Servers</MenuItem>
              <MenuItem onClick={() => setOpenDaveStudioCode(true)}>
                Dave Studio Code
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button> */}
        </Flex>
      </Box>
      {openDaveStudioCode ? (
        <Modal
          isOpen={openDaveStudioCode}
          onClose={() => setOpenDaveStudioCode(false)}
          motionPreset={"slideInBottom"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>fuck yeah</ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setOpenDaveStudioCode(false)}
              >
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
