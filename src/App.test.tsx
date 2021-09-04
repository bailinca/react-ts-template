import { render } from "@testing-library/react";
import { expect } from "chai";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("<App>", () => {
  it("renders learn react link", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });
});
