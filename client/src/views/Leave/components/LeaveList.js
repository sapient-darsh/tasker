import { Table } from "components/ui";
import TBody from "components/ui/Table/TBody";
import THead from "components/ui/Table/THead";
import Td from "components/ui/Table/Td";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import React from "react";

const columns = [
  {
    _id: 1,
    name: "#",
  },
  {
    _id: 2,
    name: "Leave Type",
  },
  {
    _id: 3,
    name: "From",
  },
  {
    _id: 4,
    name: "To",
  },
  {
    _id: 5,
    name: "Total Leave",
  },
  {
    _id: 6,
    name: "Reason",
  },
  {
    _id: 7,
    name: "Status",
  },
];

const LeaveList = ({ list }) => {
  return (
    <>
      <Table>
        <THead>
          <Tr>
            {columns.map((item) => {
              return <Th key={item._id}>{item.name}</Th>;
            })}
          </Tr>
        </THead>
        <TBody>
          {list?.map((leave, index) => {
            const { attributes } = leave;
            return (
              <Tr key={leave.id}>
                <Td>{index + 1}</Td>
                <Td>{attributes?.leave_type?.data?.attributes?.type}</Td>
                <Td>{attributes.fromDate}</Td>
                <Td>{attributes.toDate}</Td>
                <Td>{attributes.totalLeave}</Td>
                <Td>{attributes.reason}</Td>
                <Td>{attributes.status}</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </>
  );
};

export default LeaveList;
