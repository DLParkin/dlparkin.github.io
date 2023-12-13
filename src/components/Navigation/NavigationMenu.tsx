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
  FaSatellite,
  FaUserCircle,
} from "react-icons/fa";
import AboutMe from "../About/AboutMe";
import AboutThis from "../About/AboutThis";
import Me from "../About/Me";
import DaveStudio from "../DaveStudioCode/DaveStudio";
import MyMenuItems from "../Modal/MyMenuItems";
import MyModal from "../Modal/MyModal";
import TunesPlayer from "../Tunes/TunesPlayer";
import DaveGIS from "../Websites/DaveGIS";

export default function Navigation() {
  const [openDaveStudioCode, setOpenDaveStudioCode] = useState<boolean>(false);
  const [openAbout, setOpenAbout] = useState<boolean>(false);
  const [openAboutThis, setOpenAboutThis] = useState<boolean>(false);
  const [openThemTunes, setOpenThemTunes] = useState<boolean>(false);
  const [openDaveGis, setOpenDaveGis] = useState<boolean>(false);

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

              <MyMenuItems
                state={openDaveStudioCode}
                setState={setOpenDaveStudioCode}
                icon={<FaCode />}
                item={<DaveStudio />}
                title={"Dave Studio Code"}
                width={["80%", "800px"]}
                height={"600px"}
              />
              {/* // TODO change these over */}
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
              {openDaveGis ? (
                <IconButton
                  color="white"
                  aria-label="gis-icon"
                  fontSize="20px"
                  marginRight={"4px"}
                  onClick={() => setOpenDaveGis(false)}
                  icon={<FaSatellite />}
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
              <MenuItem onClick={() => setOpenDaveGis(true)}>Dave GIS</MenuItem>
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
      {openAbout ? (
        <MyModal
          title="About Me"
          handleOnClose={() => setOpenAbout(false)}
          height={"auto"}
          width={["98%", "auto"]}
          top={"5%"}
        >
          <AboutMe />
        </MyModal>
      ) : null}
      {openAboutThis ? (
        <MyModal
          title="About This Site"
          handleOnClose={() => setOpenAboutThis(false)}
        >
          <AboutThis />
        </MyModal>
      ) : null}
      {openThemTunes ? (
        <MyModal
          title="Play Me A Tune"
          handleOnClose={() => setOpenThemTunes(false)}
        >
          <TunesPlayer />
        </MyModal>
      ) : null}
      {openDaveGis ? (
        <MyModal title="Dave GIS" handleOnClose={() => setOpenDaveGis(false)}>
          <DaveGIS />
        </MyModal>
      ) : null}
    </>
  );
}
