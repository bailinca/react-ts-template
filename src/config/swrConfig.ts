const config = {
  fetcher: (url: RequestInfo) => fetch(url).then((response) => response.json()),
  // onError: (error, key) => {
  //   if (error.status !== 403 && error.status !== 404) {
  //     // We can send the error to Sentry,
  //     // or show a notification UI.
  //   }
  // },
};

export default config;
