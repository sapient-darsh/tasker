import React from "react";
import LeaveHeader from "./components/LeaveHeader";
import { Card } from "components/ui";
import LeaveList from "./components/LeaveList";
import useLeaves from "utils/hooks/useLeaves";

const Leave = () => {
  const { leavesData } = useLeaves();

  return (
    <>
      <Card className="mb-4">
        <LeaveHeader />
      </Card>
      <Card className="mb-4">
        <LeaveList list={leavesData} />
      </Card>
    </>
  );
};

export default Leave;
