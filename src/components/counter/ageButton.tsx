import React from "react";
import { Button } from "antd";

interface Props {
  onClickHandler: () => void;
  age: number;
}

export const AgeButton = ({ onClickHandler, age }: Props) => {
  console.log("Age  = " + age);
  return (
    <Button onClick={onClickHandler} type="primary" style={{ margin: 2 }}>
      Increment Age
    </Button>
  );
};

export default React.memo(AgeButton);
