import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import DSCCmd from "./DSCCmd";
import DSCMain from "./DSCMain";
import DSCMenu from "./DSCMenu";
import DSCSidebar from "./DSCSidebar";
import { JSExamples } from "./Snippets/example-files";

const DaveStudio = () => {
  const [editorFontSize, setEditorFontSize] = useState<number>(12);
  const [selectedFile, setSelectedFile] = useState<string>(
    JSExamples[0].files[0].exampleCode
  );

  if (isMobile) {
    return (
      <Flex flexDirection={"column"}>
        <DSCMenu
          setEditorFontSize={setEditorFontSize}
          editorFontSize={editorFontSize}
        />
        <DSCMain fontSize={editorFontSize} selectedFile={selectedFile} />
        <DSCCmd selectedFile={selectedFile} />
        <DSCSidebar setSelectedFile={setSelectedFile} />
      </Flex>
    );
  }
  return (
    <Box height={"calc(100% - 40px)"}>
      <Grid
        templateAreas={`"head head"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"auto 1fr 200px"}
        gridTemplateColumns={"auto 1fr"}
        height={"100%"}
      >
        <GridItem area={"head"}>
          <DSCMenu
            setEditorFontSize={setEditorFontSize}
            editorFontSize={editorFontSize}
          />
        </GridItem>
        <GridItem area={"nav"} height={"100%"}>
          <DSCSidebar setSelectedFile={setSelectedFile} />
        </GridItem>
        <GridItem area={"main"}>
          <DSCMain fontSize={editorFontSize} selectedFile={selectedFile} />
        </GridItem>
        <GridItem
          area={"footer"}
          borderTop={"1px solid rgb(255 255 255 / 30%)"}
        >
          <DSCCmd selectedFile={selectedFile} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DaveStudio;
