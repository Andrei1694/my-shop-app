import Electronics from "./Electronics";
import PropTypes from "prop-types";

const LgStaffPickSale = ({
  className = "",
  productName,
  currentPrice,
  previousPrice,
  pillText,
}) => {
  return (
    <div
      className={`w-[284px] shrink-0 flex flex-row items-start justify-start py-0 px-0 box-border text-left text-xl text-ui-gray-80 font-headings-h4-20px-24 ${className}`}
    >
      <div className="flex-1 shadow-[0px_10px_20px_rgba(0,_0,_0,_0.04),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-3xs overflow-hidden flex flex-col items-start justify-start shrink-0">
        <div className="self-stretch h-40 relative">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-ui-gray-20 h-full" />
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start h-full z-[1]">
            <div className="h-40 w-[285px] relative hidden">
              <img
                className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_42.5px)] w-[85px] h-[127px] object-cover hidden"
                alt=""
                src="/book-03@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_42.5px)] w-[85px] h-32 object-cover hidden"
                alt=""
                src="/book-02@2x.png"
              />
              <div className="absolute top-[calc(50%_-_63px)] left-[calc(50%_-_42.5px)] w-[85px] h-[126px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.165)]"
                  alt=""
                  src="/book-01@2x.png"
                />
              </div>
            </div>
            <Electronics />
            <div className="h-40 w-[285px] relative hidden">
              <img
                className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_60.5px)] w-[119.8px] h-32 object-contain hidden"
                alt=""
                src="/fashion-09@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_59.5px)] w-[118.2px] h-32 object-contain hidden"
                alt=""
                src="/fashion-08@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_61.5px)] w-[122px] h-32 object-contain hidden"
                alt=""
                src="/fashion-07@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_57px)] left-[calc(50%_-_96.5px)] w-[194px] h-[114px] object-contain hidden"
                alt=""
                src="/fashion-06@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_57px)] left-[calc(50%_-_89.5px)] w-[179px] h-[114px] object-contain hidden"
                alt=""
                src="/fashion-05@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_57px)] left-[calc(50%_-_96.5px)] w-[193px] h-[114px] object-contain hidden"
                alt=""
                src="/fashion-04@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_57px)] left-[calc(50%_-_83.5px)] w-[166px] h-[114px] object-contain hidden"
                alt=""
                src="/fashion-03@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_110.5px)] w-[222px] h-[100px] object-contain hidden"
                alt=""
                src="/fashion-02@2x.png"
              />
              <div className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_110.5px)] w-[222px] h-[100px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.14)]"
                  alt=""
                  src="/fashion-01@2x.png"
                />
              </div>
            </div>
            <div className="h-32 w-[285px] relative hidden">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_63.5px)] max-h-full w-32 flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.109)]"
                  alt=""
                  src="/music-04@2x.png"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_63.5px)] max-h-full w-32 flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.109)]"
                  alt=""
                  src="/music-03@2x.png"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_63.5px)] max-h-full w-32 flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.109)]"
                  alt=""
                  src="/music-02@2x.png"
                />
              </div>
              <div className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_111.5px)] w-[223px] h-[129px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.109)]"
                  alt=""
                  src="/music-01@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[8px] right-[8px] shadow-[0px_1px_7px_rgba(0,_0,_0,_0.1)] rounded-81xl bg-background-white w-8 h-8 flex flex-row items-start justify-start p-2 box-border z-[2]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/outline-24px--heart.svg"
            />
          </div>
        </div>
        <div className="self-stretch bg-background-white flex flex-col items-start justify-start p-4 gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <h2 className="m-0 self-stretch relative text-inherit leading-[24px] font-normal font-inherit">
              {productName}
            </h2>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-darkslategray">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="relative leading-[20px] font-extrabold inline-block min-w-[60px] whitespace-nowrap">
                  {currentPrice}
                </div>
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-xs text-lightgray">
                  <b className="relative [text-decoration:line-through] leading-[12px] inline-block min-w-[45px] whitespace-nowrap">
                    {previousPrice}
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start text-xs text-text-green">
                <div className="rounded-81xl bg-secondary-green-20 overflow-hidden flex flex-row items-start justify-start py-1 px-2 whitespace-nowrap">
                  <div className="relative leading-[12px] uppercase font-extrabold inline-block min-w-[51px]">
                    {pillText}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[16px] text-text-gray-60">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xs">
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/filled-16px--star.svg"
                />
                <div className="flex flex-row items-center justify-start">
                  <b className="relative leading-[16px] inline-block min-w-[17px]">
                    5.0
                  </b>
                  <div className="relative leading-[16px] inline-block min-w-[22px]">
                    (34)
                  </div>
                </div>
              </div>
              <b className="relative leading-[16px] inline-block text-right min-w-[50px]">
                Category
              </b>
            </div>
            <div className="flex flex-row items-start justify-start text-secondary-blue">
              <div className="rounded-81xl bg-secondary-blue-20 overflow-hidden flex flex-row items-start justify-start py-1 px-2 whitespace-nowrap">
                <div className="relative leading-[12px] uppercase font-extrabold inline-block min-w-[66px]">
                  Staff Pick
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LgStaffPickSale.propTypes = {
  className: PropTypes.string,
  productName: PropTypes.string,
  currentPrice: PropTypes.string,
  previousPrice: PropTypes.string,
  pillText: PropTypes.string,
};

export default LgStaffPickSale;
