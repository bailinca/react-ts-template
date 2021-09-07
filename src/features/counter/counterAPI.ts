// A mock function to mimic making an async request for data
export function fetchCount(): Promise<{ amount: number }> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ amount: 3 }), 500)
  );
}
