import useSWR from "swr";

import { fetcher } from "src/common/utils/api";

export function useAmount(customFetcher = fetcher) {
  const { data, error } = useSWR(`/api/user/`, customFetcher);

  return {
    amount: data?.amount ?? 1,
    loading: !error && !data,
    error,
  };
}
