import useSWR from "swr";

export function mockAmountFetcher(): Promise<{ amount: number }> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ amount: 3 }), 500)
  );
}

export function useAmount() {
  const { data, error } = useSWR(`/api/user/`, mockAmountFetcher);

  return {
    amount: data?.amount ?? 1,
    loading: !error && !data, // use isValidating ?
    error,
  };
}
