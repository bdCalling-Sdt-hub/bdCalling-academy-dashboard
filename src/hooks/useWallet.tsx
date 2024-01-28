import { useGetAllWalletIncomeInformationQuery } from "../redux/api/walletApi";

export const useWallet = () => {
  const { data: incomeData } = useGetAllWalletIncomeInformationQuery(undefined);

  return [incomeData];
};
