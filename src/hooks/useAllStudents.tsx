/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllStudentQuery } from "../redux/api/StudentApi";

const useAllStudents = () => {
  const { data: studentsData, isLoading: studentLoading }: any =
    useGetAllStudentQuery(undefined);
  return [studentsData, studentLoading];
};

export default useAllStudents;
