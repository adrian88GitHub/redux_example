import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.countValue);
  const { increaseCount, decreaseCount } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const darkmode = useSelector((state) => state.darkmode);
  // let darkmodeStyle = {};

  // if (darkmode === "ON") {
  //   darkmodeStyle = {
  //     backgroundColor: "#2d2d2d",
  //     color: "whitesmoke",
  //   };
  // }
  return (
    <>
      <div className="container p-3">
        <div
          className={`alert alert-${darkmode === "ON" ? "dark" : "success"}`}
          role="alert"
        >
          <h2>Redux BoilerPlate</h2>
        </div>
        <h3 className="my-5">Simple Starter template for redux-store</h3>

        <div className="container my-5">
          <h1 className="display-1">
            This is {darkmode === "ON" ? "DarkMode" : "LightMode"}
          </h1>
        </div>

        <div className="container d-flex">
          <button
            className="btn-lg btn-success mx-4"
            onClick={() => increaseCount(1)}
          >
            +
          </button>
          <h1 className="display-6">You Count Value = {balance} </h1>
          <button
            className="btn-lg btn-danger mx-4"
            onClick={() => decreaseCount(1)}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
