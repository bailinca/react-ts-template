import { rest } from "msw";

const handlers = [
  rest.get("/api/counter/amount", async (request, response, context) =>
    response(context.json({ amount: 3 }))
  ),
];

export default handlers;
