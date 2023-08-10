import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leavesList } from "service/leavesService";
import { leaves } from "store/leaves/leavesSlice";

function useLeaves() {
  const leavesData = useSelector((state) => state?.leaves?.leaves?.leaves);

  const dispatch = useDispatch();
  const getLeavesData = async () => {
    const response = await leavesList();

    dispatch(leaves(response.data));
  };

  useEffect(() => {
    getLeavesData();
  }, []);

  return { leavesData };
}

export default useLeaves;
