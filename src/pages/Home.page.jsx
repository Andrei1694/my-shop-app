import BasicCard from "../components/card.component";
import ColorCard from "../components/color-card.component";
import TabMenu from "../components/tab-menu.component";
import Slider from "../components/slider.component";
import SmallCard from "../components/small-card.component";
export default function Home() {
  return (
    <>
      <div className="container max-w-container mt-16 z-50">
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
        <h5 className="leading-8 text-ui-gray-80 font-bold text-[28px]">
          Find the stuff you love.
        </h5>
      </div>
      <div className="container max-w-container mb-10">
        <Slider spaceBetween={-10}>
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </Slider>
      </div>
      <div className="container max-w-container mb-[42px]">
        <div className="flex items-start justify-between font-extrabold text-xs mb-6">
          <h5 className="text-ui-gray-80 leading-3 uppercase">HOT DEALS</h5>
          <h5 className="text-ui-gray-60 leading-4 underline underline-offset-2 uppercase">
            SEE ALL
          </h5>
        </div>
        <Slider slidesPerView={2} spaceBetween={10}>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Slider>
      </div>
      <div className="container max-w-container mb-6">
        <div className="flex items-start justify-between font-extrabold text-xs mb-6">
          <h5 className="text-ui-gray-80 leading-3 uppercase">
            YOUR INTERESTS
          </h5>
          <h5 className="text-ui-gray-60 leading-4 underline underline-offset-2 uppercase">
            SEE ALL
          </h5>
        </div>
        <TabMenu />
      </div>
      <div className="container max-w-container mb-10">
        <div className="flex flex-wrap justify-between max-w-container gap-3">
          <ColorCard text="Shopping habits and interests">
            Shopping habits and interests
          </ColorCard>
          <ColorCard color="bg-accents-teal">Today's trending items</ColorCard>
          <ColorCard color="bg-accents-indigo">Incoming! Flash deals</ColorCard>
          <ColorCard color="bg-primary-yellow">
            Browse your categories
          </ColorCard>
        </div>
      </div>
    </>
  );
}
