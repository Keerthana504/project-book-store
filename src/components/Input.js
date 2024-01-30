import React from "react";

const Input = (props) => {
  const style = props.isSearch ? "search-input" : "subscribe-input";
  const mainClass = props.isSearch ? "input-ser" : "input-sub";
  const placeName = props.isSearch
    ? "Search for books by title / author"
    : "Email*";
  const inputtype = props.isSearch ? "search" : "email";
  return (
    <section className={mainClass}>
      <input
        type={inputtype}
        id="input"
        className={style}
        placeholder={placeName}
      ></input>
      {props.isSearch && (
        <p>
          <i class="fa-light search fa-magnifying-glass"></i>
        </p>
      )}
      {props.isSubscribe && (
        <button className="subscribe-btn">Subscribe</button>
      )}
    </section>
  );
};

export default Input;
