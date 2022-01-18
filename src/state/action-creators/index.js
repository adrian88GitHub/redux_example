export const increaseCount = (countValue) => {
  return (dispatch) => {
    dispatch({
      type: "increase",
      payload: countValue,
    });
  };
};

export const decreaseCount = (countValue) => {
  return (dispatch) => {
    dispatch({
      type: "decrease",
      payload: countValue,
    });
  };
};

export const enableDarkMode = (modeValue) => {
  return (dispatch) => {
    dispatch({ type: "darkmode", payload: modeValue });
  };
};

export const enableLightMode = (modeValue) => {
  return (dispatch) => {
    dispatch({ type: "lighthmode", payload: modeValue });
  };
};
