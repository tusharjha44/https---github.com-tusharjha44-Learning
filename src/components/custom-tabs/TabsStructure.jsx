import React from "react";
import ScrollIndicator from "../scroll-indicator/ScrollIndicator";
import TabsItem from "./TabsItem";
import ImageSlider from "./../image-slider/ImageSlider";
import LoadMoreData from "./../load-more-data/LoadMoreData";
import "./styles.css";

const TabsStructure = () => {
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  const tabs = [
    {
      label: "Tab 1",
        content: <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />,
    //   content: <div>This is tab 1</div>,
    },
    {
      label: "Tab 2",
        content: <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} />,
    //   content: <div>This is tab 2</div>,
    },
    {
      label: "Tab 3",
        content: <LoadMoreData />,
    //   content: <div>This is tab 3</div>,
    },
  ];
  return <TabsItem tabsContent={tabs} onChange={handleChange} />;
};

export default TabsStructure;
