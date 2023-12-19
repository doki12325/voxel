import React, { useState } from "react";
import { TbFilter, TbFilterX } from "react-icons/tb";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoCheckmark, IoCloseOutline } from "react-icons/io5";

import "./FilterButton.css";
import { FilterHook } from "../../FilterContext";

function FilterButton(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState({
    shown: false,
    name: "",
    options: [],
    index: -1,
  });
  const { filters, setFilters, filterOptions } = FilterHook();

  return (
    <div
      className="filter-main"
      style={{
        height: menuOpen ? "20rem" : "5rem",
        width: menuOpen ? "10rem" : "5rem",
        backgroundColor: menuOpen ? "#ffffff" : "",
      }}
    >
      <div
        className="filter-toggle"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        style={{
          backgroundColor: menuOpen ? "#ffffff" : "#000000",
        }}
      >
        {menuOpen ? (
          <TbFilterX color="black" size={"2.5rem"} />
        ) : (
          <TbFilter color="white" size={"2.5rem"} />
        )}
      </div>
      <div
        className="filter-options"
        style={{
          display: menuOpen ? "flex" : "none",
        }}
      >
        {filterOptions.map((data, index) => (
          <div
            key={index}
            className="filter-option"
            style={{
              backgroundColor: groupOpen.name == data.name ? "#dfdfdf" : "",
            }}
            onClick={() => {
              const index1 = filters.findIndex(
                (filter) => filter.name == data.name
              );
              if (groupOpen.shown) {
                if (groupOpen.name != data.name)
                  setGroupOpen((prev) => {
                    return {
                      ...prev,
                      name: data.name,
                      options: data.options,
                      index: index1,
                    };
                  });
                else
                  setGroupOpen((prev) => ({
                    shown: false,
                    name: "",
                    options: [],
                    index: -1,
                  }));
              } else
                setGroupOpen((prev) => {
                  return {
                    shown: true,
                    name: data.name,
                    options: data.options,
                    index: index1,
                  };
                });
            }}
          >
            <span>{data.name.split(/(?<=[a-z])(?=[A-Z])/).join(" ")}</span>
            {groupOpen.name == data.name ? (
              <FaArrowAltCircleRight />
            ) : (
              <FaArrowAltCircleLeft />
            )}
          </div>
        ))}
      </div>
      {groupOpen.shown && menuOpen ? (
        <FilterGroup
          selected={filters}
          setSelected={setFilters}
          {...groupOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function FilterGroup(props) {
  const { setPage } = FilterHook();
  return (
    <div className="filter-group-main">
      <div className="filter-options">
        {props.options.map((data, index) => (
          <div
            key={index}
            className="filter-option"
            style={{
              backgroundColor: props.selected[props.index].options.includes(
                data
              )
                ? "rgba(94, 163, 67, 0.5)"
                : "",
            }}
            onClick={() => {
              const index1 = props.selected[props.index].options.indexOf(data);
              setPage(1);
              if (index1 > -1) {
                props.setSelected((prev) => {
                  prev[props.index].options.splice(index1, 1);
                  return [...prev];
                });
              } else {
                props.setSelected((prev) => {
                  prev[props.index].options.push(data);
                  return [...prev];
                });
              }
            }}
          >
            <span>{data}</span>
            {props.selected[props.index].options.includes(data) ? (
              <>
                <div className="filter-check-button">
                  <IoCheckmark />
                </div>
                <div className="filter-close-button">
                  <IoCloseOutline />
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterButton;
