import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeesList } from "service/employeeService";
import { employee } from "store/employee/employeeSlice";

function useEmployee() {
  const employeesData = useSelector(
    (state) => state?.employee?.employee?.employee
  );

  const dispatch = useDispatch();
  const getEmployeesData = async () => {
    const response = await employeesList();
    dispatch(employee(response));
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  return { employeesData };
}

export default useEmployee;
