import React from "react";
import { Button } from "antd";

interface Props {
  onClickHandler: () => void;
  count: number;
}

export const IncButton = ({ onClickHandler, count }: Props) => {
  console.log("Count  = " + count);
  return (
    <Button onClick={onClickHandler} type="primary" style={{ margin: 2 }}>
      Increment Count
    </Button>
  );
};

export default React.memo(IncButton);
