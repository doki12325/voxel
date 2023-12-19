import React, { createContext, useContext, useEffect, useState } from "react";

const Filter = createContext();
function FilterContext({ children }) {
  const [filters, setFilters] = useState([
    { name: "Domain", options: [] },
    { name: "City", options: [] },
    { name: "InvestmentType", options: [] },
  ]);
  const [startupData, setStartupData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState([]);
  const [pageEnd, setPageEnd] = useState(false);
  const ENDPOINT = "https://startup-directory-tugs.onrender.com";
  useEffect(() => {
    filters.forEach(async (filter) => {
      await fetch(`${ENDPOINT}/api/uniquefilters?filter=${filter.name}`)
        .then((res) => res.json())
        .then((data) => {
          data.shift();
          setFilterOptions((prev) => [
            ...prev,
            { name: filter.name, options: data },
          ]);
        });
    });
  }, []);
  useEffect(() => {
    setLoading(() => true);
    fetch(`${ENDPOINT}/api/startups?page=${page}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) setPageEnd(true);
        else {
          setPageEnd(false);
          setStartupData((prev) => [...prev, ...data]);
        }
      })
      .then(() => setLoading(false));
  }, [page]);
  useEffect(() => {
    setLoading(true);
    fetch(`${ENDPOINT}/api/startups?page=${page}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) setPageEnd(true);
        else {
          setPageEnd(false);
          setStartupData((prev) => [...data]);
        }
      })
      .then(() => setLoading(false));
  }, [filters]);
  return (
    <Filter.Provider
      value={{
        filters,
        setFilters,
        startupData,
        setStartupData,
        page,
        setPage,
        loading,
        setLoading,
        filterOptions,
        pageEnd,
        setPageEnd,
      }}
    >
      {children}
    </Filter.Provider>
  );
}

export const FilterHook = () => {
  const filter = useContext(Filter);
  return filter;
};

export default FilterContext;
