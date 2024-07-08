import PropTypes from "prop-types";

const ColorCard = ({
  className = "",
  color = "bg-accents-red",
  children = "No Text Provided",
}) => {
  return (
    <div
      className={`shadow-[0px_10px_20px_rgba(0,_0,_0,_0.04),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-3xs ${color} w-[156px] h-[156px] overflow-hidden text-left text-xl text-text-white font-text-label-12px-12 flex flex-col justify-between ${className}`}
    >
      <b className="leading-[24px] p-4 pb-0">{children}</b>
      <div className="self-end m-4 shadow-[0px_5px_15px_rgba(0,_0,_0,_0.1)] w-8 h-8 text-base text-ui-gray-80 rounded-full">
        <div className="w-full h-full rounded-mini bg-text-white overflow-hidden flex items-center justify-center">
          <img
            className="w-4 h-4 overflow-hidden"
            alt=""
            src="/outline-16px--chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

ColorCard.propTypes = {
  className: PropTypes.string,
};

export default ColorCard;
