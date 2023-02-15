import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Cards } from "./components/Cards/Cards";
import { Filters } from "./components/Filters/Filters";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { Navbar } from "./components/Nabvar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Episodes } from "./Pages/Episodes";
import { Location } from "./Pages/Location";
import { CardsDetails } from "./components/Cards/CardsDetails";

//Enrutamiento

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardsDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardsDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardsDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  var [pageNumber, setPageNumber] = useState(1);
  var [search, setSearch] = useState("");
  var [status, setStatus] = useState("");
  var [gender, setGender] = useState("");
  var [species, setSpecies] = useState("");
  var [fetchedData, updateFetchedData] = useState([]);
  var { info, results } = fetchedData;

  var api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function abc() {
      var data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  //  <h1 className="text-center ubuntu my-5">Rick & Morty</h1>

  return (
    <div className="App">
      <h1 className="text-center mb-4"> CHARACTERS</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />

          <div className="col-sm-9">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
