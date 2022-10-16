import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import DSCMain from "./DSCMain";
import DSCMenu from "./DSCMenu";
import DSCSidebar from "./DSCSidebar";

const DaveStudio = () => {
  const [editorFontSize, setEditorFontSize] = useState<number>(12);

  return (
    <Box height={"calc(100% - 40px)"}>
      <Grid
        templateAreas={`"head head"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"auto 1fr 30px"}
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
          <DSCSidebar />
        </GridItem>
        <GridItem area={"main"}>
          <DSCMain fontSize={editorFontSize} />
        </GridItem>
        <GridItem
          pl="2"
          area={"footer"}
          borderTop={"1px solid rgb(255 255 255 / 30%)"}
        >
          Footer
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DaveStudio;
