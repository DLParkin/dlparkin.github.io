import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Center,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaCode,
  FaInfo,
  FaMusic,
  FaQuestion,
  FaUserCircle,
} from "react-icons/fa";
import AboutMe from "../About/AboutMe";
import AboutThis from "../About/AboutThis";
import Me from "../About/Me";
import DaveStudio from "../DaveStudioCode/DaveStudio";
import MyModal from "../Modal/MyModal";
import TunesPlayer from "../Tunes/TunesPlayer";

export default function Navigation() {
  const [openDaveStudioCode, setOpenDaveStudioCode] = useState<boolean>(false);
  const [openAbout, setOpenAbout] = useState<boolean>(false);
  const [openAboutThis, setOpenAboutThis] = useState<boolean>(false);
  const [openThemTunes, setOpenThemTunes] = useState<boolean>(false);

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
                marginLeft={2}
                marginRight={1}
              >
                <IconButton
                  as={"a"}
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
                  marginRight={"4px"}
                  onClick={() => setOpenDaveStudioCode(false)}
                  icon={<FaCode />}
                />
              ) : null}
              {openAbout ? (
                <IconButton
                  color="white"
                  aria-label="about-icon"
                  fontSize="20px"
                  marginRight={"4px"}
                  onClick={() => setOpenAbout(false)}
                  icon={<FaQuestion />}
                />
              ) : null}
              {openAboutThis ? (
                <IconButton
                  color="white"
                  aria-label="about-icon"
                  fontSize="20px"
                  marginRight={"4px"}
                  onClick={() => setOpenAboutThis(false)}
                  icon={<FaInfo />}
                />
              ) : null}
              {openThemTunes ? (
                <IconButton
                  color="white"
                  aria-label="about-icon"
                  fontSize="20px"
                  marginRight={"4px"}
                  onClick={() => setOpenThemTunes(false)}
                  icon={<FaMusic />}
                />
              ) : null}
            </Flex>
            <MenuList alignItems={"center"}>
              <Center>
                <br />
                <Me />
                <br />
              </Center>
              <Center flexDirection={"column"}>
                <Text fontSize={"xl"}>David</Text>
                <Text fontSize={"md"}>That be this guy 😊</Text>
              </Center>
              <MenuDivider />
              <MenuItem onClick={() => setOpenAbout(true)}>Me</MenuItem>
              <MenuItem onClick={() => setOpenAboutThis(true)}>
                This Site
              </MenuItem>
              <MenuItem onClick={() => setOpenThemTunes(true)}>Tunes</MenuItem>
              <MenuItem onClick={() => setOpenDaveStudioCode(true)}>
                Dave Studio Code
              </MenuItem>
              <MenuItem>Accessories</MenuItem>
              <MenuItem
                as={"a"}
                href="https://www.google.com/search?q=baby+come+back"
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      {openDaveStudioCode ? (
        <MyModal
          title="Dave Studio Code"
          handleOnClose={() => setOpenDaveStudioCode(false)}
        >
          <DaveStudio />
        </MyModal>
      ) : null}
      {openAbout ? (
        <MyModal
          title="About Me"
          handleOnClose={() => setOpenAbout(false)}
          width={"80vw"}
          height={"auto"}
          top={"5%"}
        >
          <AboutMe />
        </MyModal>
      ) : null}
      {openAboutThis ? (
        <MyModal
          title="About This Site"
          handleOnClose={() => setOpenAboutThis(false)}
          width={"80vw"}
          height={"auto"}
        >
          <AboutThis />
        </MyModal>
      ) : null}
      {openThemTunes ? (
        <MyModal
          title="Play Me A Tune"
          handleOnClose={() => setOpenThemTunes(false)}
          width={["300px", "600px"]}
          height={["auto", "auto"]}
          minWidth={"400px"}
        >
          <TunesPlayer />
        </MyModal>
      ) : null}
    </>
  );
}
