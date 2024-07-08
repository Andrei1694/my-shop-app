import { useState } from "react";
import Card from "./Card";
import Input from "./components/input.component";
import Button from "./components/button.component";
import BasicCard from "./components/card.component";
import DefaultNav from "./components/navigation.component";
import { BrowserRouter as Router } from "react-router-dom";
import ColorCard from "./components/colorcard.component";
import SmallCard from "./components/small-card.component";
import TabMenu from "./components/tab-menu.component";
import Slider from "./components/slider.component";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="w-[375px] px-6">
          <Slider spaceBetween={-10}>
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
          </Slider>
        </div>
        <div className="w-[375px] px-6">
          <Slider slidesPerView={3} spaceBetween={180}>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </Slider>
        </div>

        <div className="flex flex-wrap w-[375px] gap-4">
          <ColorCard />
          <ColorCard />
          <ColorCard />
          <ColorCard />
        </div>
        <TabMenu />
        {/* <DefaultNav stickyBottom /> */}
      </Router>
    </>
  );
}

export default App;
