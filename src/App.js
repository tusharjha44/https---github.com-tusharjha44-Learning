import "./App.css";
// import ChangeTheme from "./components/change-theme/ChangeTheme";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
// import QrCode from "./components/qr-code/QrCode";
// import LoadMoreData from './components/load-more-data/LoadMoreData';
// import ImageSlider from './components/image-slider/ImageSlider';
// import StarRating from './components/star-rating/StarRating';
// import Acordian from './components/acordian/index';
// import RandomColor from './components/random-color/RandomColor';
// import TreeView from "./components/tree-view/TreeView";
// import menus from "../src/components/tree-view/data";


function App() {
  return (
    <div className="App">
      {/* <Acordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCode/> */}
      {/* <ChangeTheme/> */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;
