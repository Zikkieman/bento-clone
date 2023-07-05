import React, { useState, useMemo } from "react";
import "./sign-up.styles.scss";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ country }) {
  let dialCode;

  if (country === "Nigeria") {
    dialCode =" +234";
  } else if (country === "Ghana") {
    dialCode = "+233";
  } else if (country === "Kenya") {
    dialCode = "+254";
  } else if (country === "Rwanda") {
    dialCode = "+250";
  }

  return (
    <div className="dial-code">
      {/* <div>{dialCode}</div> */}
    </div>
  );
}

export default CountrySelector;
