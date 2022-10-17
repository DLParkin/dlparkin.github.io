import { useEffect, useState } from "react";
import ReactReplJS from "./REPL/ReactReplJS";

interface Props {
  selectedFile: string;
}

const DSCCmd = (props: Props) => {
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

  return (
    <ReactReplJS
      height={204}
      initiallyExecute={[code]}
      title={undefined}
      tabs={undefined}
      selectedTab={undefined}
      onChangeTab={undefined}
    />
  );
};

export default DSCCmd;
