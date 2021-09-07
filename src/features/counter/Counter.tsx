import { useSnapshot } from "valtio";

import counterState from "./counterState";
import { useAmount } from "./counterHooks";

import { Button, Row, Value } from "./styled";

export function Counter() {
  const { count } = useSnapshot(counterState);
  const { amount, error, loading } = useAmount();

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
