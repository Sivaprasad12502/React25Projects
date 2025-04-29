import Accordian from "./components/accordian";
import ModelTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFalgGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import { ImageSlider } from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenrator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToSetion from "./components/scroll-to-section/scroll-to-section";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/indes";
import SearchAutoComplete from "./components/search-auto-complete-with-apit";
import { StarRating } from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import Treeview from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      {/* <QrCodeGenrator /> */}
      {/* light-dark-mode-them swith */}
      {/* <LightDarkMode/> */}
      {/* scroll indicator */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* Custom tabs compoent */}
      {/* <TabTest/> */}
      {/* custom mdoal component  */}
      {/* <ModelTest/> */}
      {/* github Profile finder */}
      {/* <GithubProfileFinder/> */}
      {/* Search Autocomplete  */}
      {/* <SearchAutoComplete/> */}
      {/* Tic tac toe  */}
      {/* <TicTacToe/> */}
      {/* feature flag implementation */}
      {/* <FeatureFalgGlobalState>
        <FeatureFlags/>
       </FeatureFalgGlobalState> */}
      {/* useFetch-Custom hook */}
      {/* <UseFetchHookTest/> */}
      {/* Use onClick OutSide Hook Test  */}
      {/* <UseOnClickOutsideTest/> */}
      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}
      {/* Scroll to  top and bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a particular section */}
      <ScrollToSetion/>
    </div>
  );
}

export default App;
