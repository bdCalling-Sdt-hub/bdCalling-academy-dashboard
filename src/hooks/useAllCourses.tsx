/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetallCourseQuery } from "../redux/api/courseApi";

const useALLCourses = () => {
  const { data: coursesData, isLoading: coursesLoading }: any =
    useGetallCourseQuery(undefined);
  return [coursesData, coursesLoading];
};

export default useALLCourses;
