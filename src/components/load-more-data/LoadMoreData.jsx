/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchMoreProducts = async () => {
    try {
      const {data} = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

    //   if (data.data && data.data.products && data.data.products.length) {
    //     setProduct((prevData) => [...prevData, ...data.data.products]);
    //     setLoading(false);
    //   }
    if (data && data.products && data.products.length) {
        setProduct((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
      console.log("Data",data);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMoreProducts();
  }, [count]);

  useEffect(() => {
    if (product && product.length === 100) setDisableButton(true);
  }, [product]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className="load-container">
      <div className="product-container">
        {product && product.length
          ? product.map((item,index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
