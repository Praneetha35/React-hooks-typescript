import React from "react";
import { Button } from "antd";

interface Props {
  clickHandler: () => void;
  salary: number;
}

export const SalaryButton = ({ clickHandler, salary }: Props) => {
  console.log("Salary = " + salary);
  return (
    <Button onClick={clickHandler} type="primary" style={{ margin: 2 }}>
      Increment Salary
    </Button>
  );
};

export default React.memo(SalaryButton);
