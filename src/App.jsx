import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Connessione...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.message);
      })
      .catch(() => {
        setStatus("Errore connessione backend");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Scorelib</h1>
      <p>Backend status:</p>
      <strong>{status}</strong>
    </div>
  );
}

export default App;
