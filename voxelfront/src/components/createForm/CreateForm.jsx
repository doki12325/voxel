import React, { useEffect, useRef, useState } from "react";
import "./CreateForm.css";
import { FilterHook } from "../../FilterContext";
import { IoCloseOutline } from "react-icons/io5";

function CreateForm(props) {
  const [startupData, setStartupData] = useState({
    StartupName: "",
    Domain: "",
    City: "",
    Date: "",
    AmountInvested: "",
    InvestmentType: "",
    InvestorsName: "",
    SubVertical: "",
  });
  const [firstTouch, setFirstTouch] = useState({
    StartupName: false,
    Domain: false,
    City: false,
    Date: false,
    AmountInvested: false,
    InvestmentType: false,
    InvestorsName: false,
    SubVertical: false,
  });
  const { filterOptions } = FilterHook();
  const isButtonDisabled = () => {
    return (
      startupData.StartupName == "" ||
      startupData.Domain == "" ||
      startupData.City == "" ||
      startupData.Date == "" ||
      startupData.AmountInvested == "" ||
      startupData.InvestmentType == "" ||
      startupData.Investors == "" ||
      startupData.SubVertical == ""
    );
  };
  return (
    <div className="create-wrapper">
      <div className="create-main">
        <h2>Submit a New Startup!</h2>
        <form className="create-form">
          <div className="create-input-wrapper">
            <label className="create-label">Startup Name</label>
            <input
              className="create-input"
              type="text"
              placeholder="Enter Startup Name"
              style={{
                border:
                  startupData.StartupName == "" && firstTouch.Date.StartupName
                    ? "1px solid red"
                    : "",
              }}
              onFocus={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFirstTouch((prev) => {
                  return { ...prev, StartupName: true };
                });
              }}
              value={startupData.StartupName}
              onChange={(e) => {
                e.preventDefault();
                setStartupData((prev) => {
                  return { ...prev, StartupName: e.target.value };
                });
              }}
            />
          </div>
          <div className="create-input-wrapper list">
            <label className="create-label">Domain</label>
            <InputOptions
              options={filterOptions[0].options}
              startupData={startupData}
              setStartupData={setStartupData}
              firstTouch={firstTouch}
              setFirstTouch={setFirstTouch}
              name={"Domain"}
            />
          </div>
          <div className="create-input-wrapper list">
            <label className="create-label">City</label>
            <InputOptions
              options={filterOptions[1].options}
              startupData={startupData}
              setStartupData={setStartupData}
              firstTouch={firstTouch}
              setFirstTouch={setFirstTouch}
              name={"City"}
            />
          </div>
          <div className="create-input-wrapper">
            <label className="create-label">Date</label>
            <input
              className="create-input"
              type="date"
              placeholder="Enter Date"
              onFocus={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFirstTouch((prev) => {
                  return { ...prev, Date: true };
                });
              }}
              style={{
                border:
                  startupData.Date == "" && firstTouch.Date
                    ? "1px solid red"
                    : "",
              }}
              value={startupData.Date}
              onChange={(e) => {
                e.preventDefault();
                setStartupData((prev) => {
                  return { ...prev, Date: e.target.value };
                });
              }}
            />
          </div>
          <div className="create-input-wrapper">
            <label className="create-label">
              Amount Invested <span className="create-subtext">(in USD)</span>
            </label>
            <input
              className="create-input"
              type="number"
              placeholder="Enter Amount Invested"
              onFocus={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFirstTouch((prev) => {
                  return { ...prev, AmountInvested: true };
                });
              }}
              style={{
                border:
                  startupData.AmountInvested == "" && firstTouch.AmountInvested
                    ? "1px solid red"
                    : "",
              }}
              value={startupData.AmountInvested}
              onChange={(e) => {
                e.preventDefault();
                setStartupData((prev) => {
                  return { ...prev, AmountInvested: e.target.value };
                });
              }}
            />
          </div>
          <div className="create-input-wrapper list">
            <label className="create-label">Investment Type</label>
            <InputOptions
              options={filterOptions[2].options}
              startupData={startupData}
              setStartupData={setStartupData}
              firstTouch={firstTouch}
              setFirstTouch={setFirstTouch}
              name={"InvestmentType"}
            />
          </div>
          <div className="create-input-wrapper desc">
            <label className="create-label">
              Investors{" "}
              <span className="create-subtext">(comma separated values)</span>
            </label>
            <input
              className="create-input"
              type="text"
              placeholder="Enter Investors"
              onFocus={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFirstTouch((prev) => {
                  return { ...prev, InvestorsName: true };
                });
              }}
              style={{
                border:
                  startupData.InvestorsName == "" && firstTouch.InvestorsName
                    ? "1px solid red"
                    : "",
              }}
              value={startupData.InvestorsName}
              onChange={(e) => {
                e.preventDefault();
                setStartupData((prev) => {
                  return { ...prev, InvestorsName: e.target.value };
                });
              }}
            />
          </div>
          <div className="create-input-wrapper desc">
            <label className="create-label">Description</label>
            <input
              className="create-input"
              type="text"
              placeholder="Enter Description"
              onFocus={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFirstTouch((prev) => {
                  return { ...prev, SubVertical: true };
                });
              }}
              style={{
                border:
                  startupData.SubVertical == "" && firstTouch.SubVertical
                    ? "1px solid red"
                    : "",
              }}
              value={startupData.SubVertical}
              onChange={(e) => {
                e.preventDefault();
                setStartupData((prev) => {
                  return { ...prev, SubVertical: e.target.value };
                });
              }}
            />
          </div>
          <div className="create-button">
            <button
              className="create-submit"
              type="submit"
              style={{
                cursor: isButtonDisabled() ? "not-allowed" : "pointer",
                backgroundColor: isButtonDisabled() ? "grey" : "",
                color: isButtonDisabled() ? "black" : "green",
                border: isButtonDisabled()
                  ? "2px solid black"
                  : "2px solid green",
              }}
              disabled={isButtonDisabled()}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(startupData);
              }}
            >
              Create
            </button>
          </div>
          <div className="create-button">
            <button
              className="create-submit clear"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setStartupData({
                  StartupName: "",
                  Domain: "",
                  City: "",
                  Date: "",
                  AmountInvested: "",
                  InvestmentType: "",
                  Investors: "",
                  Description: "",
                });
              }}
            >
              Clear Form
            </button>
          </div>
        </form>
        <div
          className="create-close-button"
          onClick={() => {
            props.setCreateForm(false);
          }}
        >
          <IoCloseOutline />
        </div>
      </div>
    </div>
  );
}

export default CreateForm;

function InputOptions(props) {
  const optionsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        optionsRef.current.style.display = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <input
        className="create-input"
        type="text"
        placeholder={`Enter ${props.name}`}
        style={{
          border:
            props.startupData[props.name] == "" && props.firstTouch[props.name]
              ? "1px solid red"
              : "",
        }}
        value={props.startupData[props.name]}
        onFocus={(e) => {
          e.preventDefault();
          e.stopPropagation();
          optionsRef.current.style.display = "flex";
          props.setFirstTouch((prev) => {
            return { ...prev, [props.name]: true };
          });
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          optionsRef.current.style.display = "flex";
        }}
        onChange={(e) => {
          e.preventDefault();
          const data =
            e.target.value != ""
              ? e.target.value[0].toUpperCase() + e.target.value.slice(1)
              : "";
          props.setStartupData((prev) => {
            return { ...prev, [props.name]: data };
          });
        }}
      />
      <div className="input-options" ref={optionsRef}>
        {props.options
          .filter((option) => option.includes(props.startupData[props.name]))
          .map((data, index) => (
            <div
              key={index}
              className="input-option"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                props.setStartupData((prev) => {
                  return { ...prev, [props.name]: data };
                });
                optionsRef.current.style.display = "none";
                return;
              }}
            >
              {data}
            </div>
          ))}
      </div>
    </>
  );
}

function handleSubmit(startupData) {
  const { ENDPOINT } = FilterHook();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(startupData),
  };
  fetch(`${ENDPOINT}/api/newstartup`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Startup Created Successfully!");
      window.location.reload();
    });
}
