/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./styles.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scroll, setScroll] = useState(0);

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((howMuchScrolled / height) * 100);
  };

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const getData = await axios.get(getUrl);
      if (
        getData.data &&
        getData.data.products &&
        getData.data.products.length > 0
      ) {
        setData(getData.data.products);
        setLoading(false);
      }
      console.log("DATA", data);
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  },[scroll]);

  console.log(data, loading);

  if (error) {
    setLoading(false);
    return <h5>Error Occured!!</h5>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
