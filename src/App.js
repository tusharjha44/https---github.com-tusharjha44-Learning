import './App.css';
import ImageSlider from './components/image-slider/ImageSlider';
// import StarRating from './components/star-rating/StarRating';
// import Acordian from './components/acordian/index';
// import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <div className="App">
      {/* <Acordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/>
    </div>
  );
}

export default App;
