import { proxy } from "valtio";
import { devtools } from "valtio/utils";

const state = proxy({
  count: 0,
  increment: () => {
    ++state.count;
  },
  decrement: () => {
    --state.count;
  },
  incrementByAmount: (amount: number) => {
    state.count += amount;
  },
});

export default state;

devtools(state, "counterState");
