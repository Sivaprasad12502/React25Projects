import Accordian from "./components/accordian";
import { ImageSlider } from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenrator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import { StarRating } from "./components/star-rating";
import Treeview from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian components */}
      {/* <Accordian/> */}
      {/* Random color components */}
      {/* <RandomColor/> */}
      {/* starRating */}
      {/* <StarRating noOfStars={10}/> */}
      {/* imageSilderComponent */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"}/> */}
      {/* loadMoreData */}
      {/* <LoadMoreData/> */}
      {/* Tree view compoent/menu Ui component/recursive navigation menu */}
      {/* <Treeview menus={menus}/> */}
      {/* QrCodeGenerator */}
      <QrCodeGenrator />
    </div>
  );
}

export default App;
