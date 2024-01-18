export const useModal = () => useState<boolean>("counter", () => false);
export const useTabs = () => useState<string>("tabs", () => "description");
export const useWallet = () => useState<any>("wallet", () => null);
export const useVoteModal = () => useState<boolean>("voteModal", () => false);
export const useTxBuilderModal = () =>
  useState<boolean>("txBuilderModal", () => false);
