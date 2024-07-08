import LgStaffPickSale from "./LgStaffPickSale";
import LgDefault from "./LgDefault";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-xs text-ui-gray-80 font-headings-h4-20px-24 ${className}`}
    >
      <div className="self-stretch h-96 relative">
        <div className="absolute top-[-368px] left-[-36px] rounded-[50%] bg-primary-yellow w-[752px] h-[752px]" />
        <div className="absolute top-[77px] left-[24px] leading-[12px] uppercase font-extrabold inline-block w-[279px] z-[1]">
          SUGGESTED FOR YOU
        </div>
        <h1 className="m-0 absolute top-[97px] left-[24px] text-9xl leading-[32px] font-bold font-inherit inline-block w-[327px] z-[1]">
          Find the stuff you love.
        </h1>
        <img
          className="absolute top-[64px] left-[319px] w-8 h-8 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/avatar-default@2x.png"
        />
      </div>
      <div className="w-[375px] h-[312px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 px-6 box-border gap-[16px] max-w-full z-[1] mt-[-231px] text-xl">
        <LgStaffPickSale
          productName="Bose Headphones"
          currentPrice="$265.99"
          previousPrice="$279.99"
          pillText="10% OFF"
        />
        <LgStaffPickSale
          productName="Product Name"
          currentPrice="$65.99"
          previousPrice="$79.99"
          pillText="00% OFF"
        />
        <LgDefault />
        <LgDefault />
        <LgDefault />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
