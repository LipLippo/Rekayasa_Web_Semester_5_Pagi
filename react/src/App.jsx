import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [buku, setBuku] = useState([]);

  const getData = async () => {
    const res = await axios.get("/api-buku");
    setBuku(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      <h2 className="app-title">📚 Data Buku</h2>

      <button className="refresh-btn" onClick={getData}>
        🔄 Refresh Data
      </button>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Kategori</th>
            </tr>
          </thead>
          <tbody>
            {buku.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty">
                  Tidak ada data
                </td>
              </tr>
            ) : (
              buku.map((b) => (
                <tr key={b.ID_Buku}>
                  <td>{b.ID_Buku}</td>
                  <td>{b.Judul}</td>
                  <td>{b.Pengarang}</td>
                  <td>{b.Kategori}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
