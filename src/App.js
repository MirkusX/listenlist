import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataContext, SearchContext } from "./components/Context";
import { Frontpage } from "./pages/Frontpage";

function App() {
  const [search, setSearch] = useState("-");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const getData = () => {
    axios
      .get(`https://api.mixcloud.com/search/?q=${search}&type=cloudcast`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  useEffect(() => {
    getData();
  }, [search]);
  if (data) {
    return (
      <DataContext.Provider value={{ data, setData }}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <div className="App">
            <Frontpage />
          </div>
        </SearchContext.Provider>
      </DataContext.Provider>
    );
  }
}

export default App;
