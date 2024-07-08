import PropTypes from "prop-types";
import Pill from "./pill.component";

export default function SmallCard({ className = "" }) {
  return (
    <div
      className={`w-[156px] text-left text-xs text-text-gray-80 font-headings-h4-20px-24 ${className}`}
    >
      <div className="shadow-[0px_10px_20px_rgba(0,_0,_0,_0.04),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-3xs overflow-hidden flex flex-col items-center justify-start">
        <div className="w-[156px] h-40 relative">
          <div className="w-full h-40 overflow-hidden bg-ui-gray-20">
            <div className="w-full h-40 flex items-center justify-center">
              <img
                className="w-[80.5px] h-32 object-cover"
                alt=""
                src="/electronics-042@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[8px] right-[8px] shadow-[0px_1px_7px_rgba(0,_0,_0,_0.1)] rounded-81xl bg-background-white flex flex-row items-start justify-start p-2 cursor-pointer">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/outline-24px--heart.svg"
            />
          </div>
        </div>
        {/* content */}
        <div className="bg-background-white p-4 flex flex-col items-start justify-start gap-2 w-full">
          {/* Name */}
          <div className="flex flex-col gap-[4px] items-start justify-start">
            <div>
              <h2 className="m-0 text-base leading-[24px] font-normal font-inherit inline-block">
                Product Name
              </h2>
            </div>
            <div className="flex w-full">
              <div className="flex items-center text-base">
                <div className="leading-[20px] font-extrabold text-text-gray-80 mr-2">
                  $65.99
                </div>
                <div className="text-xs [text-decoration:line-through] leading-[12px] text-ui-gray-40 opacity-[0.5]">
                  $79.99
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[156px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="w-2.5 relative h-2.5 overflow-hidden shrink-0"
                  alt=""
                  src="/filled-16px--star.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[1px]">
                  <b className="leading-[16px]">5.0</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  className: PropTypes.string,
};
