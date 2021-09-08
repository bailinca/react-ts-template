import useSWR from "swr";

export function useAmount() {
  const { data, error, isValidating } = useSWR(`/api/counter/amount`);

  return {
    amount: data?.amount ?? 1,
    loading: isValidating,
    error,
  };
}
