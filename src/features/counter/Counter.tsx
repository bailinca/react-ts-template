import { useSnapshot } from "valtio";
import useSWR from "swr";

import counterState from "./counterState";
import { fetchCount } from "./counterAPI";

import { Button, Row, Value } from "./styled";

export function Counter() {
  const { count } = useSnapshot(counterState);

  const { data, error } = useSWR("/api/count", fetchCount);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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

        <Button onClick={() => counterState.incrementByAmount(data.amount)}>
          Add {data.amount}
        </Button>
      </Row>
    </div>
  );
}
