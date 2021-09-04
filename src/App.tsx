import { useState, useEffect } from "react";
import logo from "src/assets/logo.svg";
import { Counter } from "src/features/counter/Counter";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import "./common/theme.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="about">About</NavLink>
      </nav>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="App">
      <header className="App-header">
        {/* Or use https://github.com/remix-run/react-router/blob/dev/docs/api-reference.md#useroutes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
