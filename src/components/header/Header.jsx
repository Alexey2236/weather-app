import HeaderLogo from "../../assets/img/headerLogo.png";
// import { useEffect, useState } from "react";
import "./header.css";
import { cityList } from "../../cityList";

function Header({ getCity }) {
  return (
    <div className="header">
      <div className="wrapper">
        <a href="!#">
          <img src={HeaderLogo} alt="header-logo" className="logo-header" />
        </a>
        <a href="!#">
          <div className="heaser-title">React weather</div>
        </a>
      </div>
      <div className="wrapper">
        <select
          name="Выбрать город"
          className="city"
          onChange={(e) => getCity(e.target.value)}
        >
          {cityList.sort().map((city) => {
            return <option key={city} value={city}>{city}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Header;
