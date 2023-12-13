import { Box } from "@chakra-ui/react";

const DaveGIS = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <embed
        src="https://davegis.netlify.app/"
        style={{ width: "inherit", height: "inherit" }}
      />
    </Box>
  );
};

export default DaveGIS;
