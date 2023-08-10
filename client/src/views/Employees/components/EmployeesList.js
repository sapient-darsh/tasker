import Table from "components/ui/Table";
import TBody from "components/ui/Table/TBody";
import THead from "components/ui/Table/THead";
import Td from "components/ui/Table/Td";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import React from "react";

const columns = [
  {
    _id: 2,
    name: "Name",
  },
  {
    _id: 3,
    name: "Email",
  },
  {
    _id: 4,
    name: "Mobile",
  },
  {
    _id: 5,
    name: "Position",
  },
  {
    _id: 6,
    name: "Total Experiance (Months)",
  },
];

const EmployeesList = ({ list }) => {
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
          {list?.map((employee) => {
            const designation = employee?.designation?.name;
            return (
              <Tr key={employee.id}>
                <Td>{employee.name}</Td>
                <Td>{employee.email}</Td>
                <Td>{employee.phoneNumber}</Td>
                <Td>{designation}</Td>
                <Td>{employee.totalExperiance}</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
      {/* <div className="m-4 p-2 flex items-center justify-between">
        <Pagination
          displayTotal
          pageSize={pageSize}
          total={paginationCount}
          currentPage={bookingFilter.pageNo}
          onChange={(page) =>
            setBookingFilter({
              ...bookingFilter,
              pageNo: page,
            })
          }
          count={paginationCount}
        />
      </div> */}
    </>
  );
};

export default EmployeesList;
