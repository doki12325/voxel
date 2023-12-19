import { useState } from "react";
import "./App.css";
import { FilterHook } from "./FilterContext.jsx";
import FilterButton from "./components/FilterButton/FilterButton.jsx";
import Card from "./components/card/Card.jsx";
import CreateForm from "./components/createForm/createForm.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { ImSpinner8 } from "react-icons/im";

function App() {
  const {
    filters,
    startupData,
    setStartupData,
    page,
    setPage,
    loading,
    setLoading,
    pageEnd,
  } = FilterHook();
  const [createForm, setCreateForm] = useState(false);
  return (
    <div className="main-container">
      <Navbar setCreateForm={setCreateForm} />
      {createForm && <CreateForm setCreateForm={setCreateForm} />}
      <FilterButton />
      <div className="card-display">
        {startupData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
      {startupData != [] && !pageEnd && (
        <div className="more-button">
          <button
            className="show-button"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
            type="button"
            disabled={loading}
            style={{
              cursor: loading ? "not-allowed" : "pointer",
              backgroundColor: loading ? "grey" : "black",
            }}
          >
            {loading ? <ImSpinner8 className="load-logo" /> : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
