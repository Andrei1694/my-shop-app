import BasicCard from "../components/card.component";
import ColorCard from "../components/color-card.component";
import TabMenu from "../components/tab-menu.component";
import Slider from "../components/slider.component";
import SmallCard from "../components/small-card.component";
export default function Home() {
  return (
    <>
      <div className="container max-w-container mt-16">
        <div className="flex justify-between items-center font-extrabold text-xs to-ui-gray-80 leading-3 mb-[1px]">
          <h5>SUGGESTED FOR YOU</h5>
          <div>
            <img
              src="/avatar-default@2x.png"
              alt=""
              width="32px"
              height="32px"
            />
          </div>
        </div>
      </div>
      <div className="container max-w-container mb-6">
        <h5 className="leading-8 to-ui-gray-80 font-bold text-[28px]">
          Find the stuff you love.
        </h5>
      </div>
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
