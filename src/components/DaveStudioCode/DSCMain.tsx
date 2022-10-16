import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

interface Props {
  fontSize: number;
  selectedFile: string;
}

const DSCMain = (props: Props) => {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    const readSelectedFile = (selectedFile: any) => {
      window
        .fetch(selectedFile)
        .then((r) => r.text())
        .then((text) => {
          setCode(text);
        });
    };
    if (props.selectedFile) {
      readSelectedFile(props.selectedFile);
    }
  }, [props.selectedFile]);

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
