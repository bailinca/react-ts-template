import { useSnapshot } from "valtio";

import counterState from "./counterState";
import { useAmount } from ".";

import { Button, Row, Value } from "./styled";

// A mock function to mimic making an async request for data
export function fetchCount(): Promise<{ amount: number }> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ amount: 3 }), 500)
  );
}

export function Counter() {
  const { count } = useSnapshot(counterState);
  const { amount, error, loading } = useAmount(fetchCount);

  if (error) return <div>failed to load</div>;
  if (loading) return <div>loading...</div>;

  return (
    <div>
      <Row>
        <Button aria-label="Decrement value" onClick={counterState.decrement}>
          -
        </Button>

        <Value>{count}</Value>

        <Button aria-label="Increment value" onClick={counterState.increment}>
          +
        </Button>

        <Button onClick={() => counterState.incrementByAmount(amount)}>
          Add {amount}
        </Button>
      </Row>
    </div>
  );
}
