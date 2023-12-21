import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, SetImages] = useState([]);
  const [loading, setloading] = useState(false);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  const fetchImages = async (getUrl) => {
    try {
      setloading(true);
      const { data } = await axios.get(
        `${getUrl}?page=${page}&&limit=${limit}`
      );
      console.log(data);
      if (data) {
        setloading(false);
        SetImages(data);
      }
    } catch (e) {
      setloading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (loading) {
    return <div>Loading Data!! Please Wait...</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imgItem, index) => {
            return (
              <img
                key={imgItem.id}
                alt={imgItem.download_url}
                src={imgItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
