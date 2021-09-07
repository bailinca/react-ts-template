import useSWR from "swr";

export function useAmount() {
  const { data, error } = useSWR(`/api/counter/amount`);

  return {
    amount: data?.amount ?? 1,
    loading: !error && !data, // use isValidating ??
    error,
  };
}
