import BasicCard from "../components/card.component";
import ColorCard from "../components/color-card.component";
import TabMenu from "../components/tab-menu.component";
import Slider from "../components/slider.component";
import SmallCard from "../components/small-card.component";
export default function Home() {
  return (
    <>
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
    </>
  );
}
