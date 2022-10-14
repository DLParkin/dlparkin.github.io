import {
  Flex,
  Menu,
  MenuButton,
  Button,
  IconButton,
  MenuList,
  Center,
  Avatar,
  MenuDivider,
  MenuItem,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaUserCircle, FaCode } from "react-icons/fa";

interface Props {
  openDaveStudioCode: boolean;
  setOpenDaveStudioCode: (bool: boolean) => void;
}

const NavigationMenu = (props: Props) => {
  return (
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
            {props.openDaveStudioCode ? (
              <IconButton
                color="white"
                aria-label="code-icon"
                fontSize="20px"
                onClick={() => props.setOpenDaveStudioCode(false)}
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
            <MenuItem onClick={() => props.setOpenDaveStudioCode(true)}>
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
      </Flex>
    </Box>
  );
};

export default NavigationMenu;
