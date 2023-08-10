import { Button } from "components/ui";
import React from "react";
import { HiPlusCircle } from "react-icons/hi";

const LeaveHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl font-semibold text-sky-500">Leaves List</div>
      <div>
        <Button variant="solid" block size="sm" icon={<HiPlusCircle />}>
          Add Leave
        </Button>
      </div>
    </div>
  );
};

export default LeaveHeader;
