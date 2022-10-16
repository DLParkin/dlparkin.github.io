import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaFile, FaFolder } from "react-icons/fa";
import { arrayJSON } from "./MDNExamples/js-examples/array/meta";

const DSCSidebar = () => {
  return (
    <Flex
      height={"100%"}
      width={"200px"}
      borderRight={"1px solid rgb(255 255 255 / 30%)"}
    >
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        overflowY={"auto"}
        overflowX={"hidden"}
        width={"200px"}
      >
        <AccordionItem overflow={"hidden"}>
          <h2>
            <AccordionButton paddingInline={"2px"}>
              <Box flex="1" textAlign="left" fontSize={"sm"}>
                <Icon
                  as={FaFolder}
                  w={"10px"}
                  h={"10px"}
                  marginRight={"2px"}
                  color={"orange"}
                />
                Array
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            fontSize={"x-small"}
            overflow={"hidden"}
            paddingInline={"0px"}
          >
            {arrayJSON?.map((array) => {
              return (
                <Text
                  padding={"2px"}
                  borderBottom={"1px solid rgb(255 255 255 / 30%)"}
                  _hover={{
                    opacity: "0.67",
                    backgroundColor: "rgb(255 255 255 / 5%)",
                  }}
                  cursor={"pointer"}
                >
                  <Icon
                    as={FaFile}
                    w={"10px"}
                    h={"10px"}
                    marginRight={"2px"}
                    color={"whiteAlpha.700"}
                  />
                  {array.title.replaceAll("JavaScript Demo: ", "")}
                </Text>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default DSCSidebar;
