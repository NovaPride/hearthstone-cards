import { useState, useEffect } from "react";

import { useMTGService } from "../../services/MTGService";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const { loading, error, getCards, clearError } = useMTGService();

  useEffect(() => {
    updateCard();
  }, []);

  const updateCard = () => {
    clearError();
    getCards(count + 1).then(console.log);
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={updateCard}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
