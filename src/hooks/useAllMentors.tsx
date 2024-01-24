/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetallmentorsQuery } from "../redux/api/mentorApi";

const useAllMentors = () => {
  const { data: mentorsData, isLoading: mentorsDataLoading }: any =
    useGetallmentorsQuery(undefined);
  return [mentorsData, mentorsDataLoading];
};

export default useAllMentors;
