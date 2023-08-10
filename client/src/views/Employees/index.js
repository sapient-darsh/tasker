import { Card } from "components/ui";
import React from "react";
import EmployeesHeader from "./components/EmployeesHeader";
import EmployeesList from "./components/EmployeesList";
import useEmployee from "utils/hooks/useEmployee";

const Employees = () => {
  const { employeesData } = useEmployee();

  return (
    <>
      <Card className="mb-4">
        <EmployeesHeader />
      </Card>
      <Card className="mb-4">
        <EmployeesList list={employeesData} />
      </Card>
    </>
  );
};

export default Employees;
