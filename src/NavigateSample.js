import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavigateSample() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  const replaceToHome = () => {
    navigate("/", { replace: true });
  };
  useEffect(() => {
    console.log(navigate);
  }, [navigate]);
  return (
    <div>
      <button onClick={goBack}>go back</button>
      <button onClick={goHome}>go home</button>
      <button onClick={replaceToHome}>go home(replace)</button>
    </div>
  );
}

export default NavigateSample;
