import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

interface Props {
  fontSize: number;
}

const DSCMain = (props: Props) => {
  const [code, setCode] = useState<string>(
    `//TODO make this fun \n function add(a, b) {\n  return a + b;\n}`
  );

  document.documentElement.setAttribute("data-color-mode", "dark");

  return (
    <Flex
      paddingLeft={2}
      paddingRight={2}
      backgroundColor={"blackAlpha.600"}
      width={"100%"}
      height={"100%"}
    >
      <div className="w-tc-editor-var"> </div>
      <CodeEditor
        value={code}
        language="js"
        onChange={(evn) => setCode(evn.target.value)}
        padding={5}
        style={{
          fontSize: props.fontSize,
          color: "white",
          backgroundColor: "transparent",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </Flex>
  );
};

export default DSCMain;
