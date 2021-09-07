export const fetcher = (url: RequestInfo) =>
  fetch(url).then((response) => response.json());
