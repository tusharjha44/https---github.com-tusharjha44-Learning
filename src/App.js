import './App.css';
import StarRating from './components/star-rating/StarRating';
// import Acordian from './components/acordian/index';
// import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <div className="App">
      {/* <Acordian/> */}
      {/* <RandomColor/> */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
