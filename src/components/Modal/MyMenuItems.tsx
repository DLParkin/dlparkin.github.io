import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";
import MyModal from "./MyModal";

interface Props {
  state: boolean;
  setState: (state: boolean) => void;
  icon: ReactElement;
  item: ReactElement;
  title: string;
  width?: number | string | string[];
  minWidth?: number | string;
  height?: number | string | string[];
  top?: number | string;
  left?: number | string;
}

const MyMenuItems = (props: Props) => {
  return (
    <>
      {props.state ? (
        <IconButton
          color="white"
          aria-label="icon"
          fontSize="20px"
          marginRight={"4px"}
          onClick={() => props.setState(!props.state)}
          icon={props.icon}
        />
      ) : null}
      {props.state ? (
        <MyModal
          title={props.title}
          width={props.width || undefined}
          height={props.height || undefined}
          minWidth={props.minWidth || undefined}
          top={props.top || undefined}
          left={props.left || undefined}
          handleOnClose={() => props.setState(!props.state)}
        >
          {props.item}
        </MyModal>
      ) : null}
    </>
  );
};

export default MyMenuItems;
