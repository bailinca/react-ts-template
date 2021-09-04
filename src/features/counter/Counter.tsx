import { useState } from "react";
import { useSnapshot } from "valtio";

import { parseNativeEventValue } from "src/common/utils/dom";
import counterState from "./counterState";

import { Button, Row, Textbox, Value } from "./styled";

export function Counter() {
  const { count } = useSnapshot(counterState);
  const [amount, setAmount] = useState(2);

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
      </Row>

      <Row>
        <Textbox
          aria-label="Set increment amount"
          value={amount}
          onChange={(event) =>
            setAmount(Number(parseNativeEventValue(event)) || 0)
          }
        />

        <Button onClick={() => counterState.incrementByAmount(amount)}>
          Add Amount
        </Button>
      </Row>
    </div>
  );
}
