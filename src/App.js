import './App.css';
import LoadMoreData from './components/load-more-data/LoadMoreData';
// import ImageSlider from './components/image-slider/ImageSlider';
// import StarRating from './components/star-rating/StarRating';
// import Acordian from './components/acordian/index';
// import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <div className="App">
      {/* <Acordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> */}
      <LoadMoreData/>
    </div>
  );
}

export default App;
