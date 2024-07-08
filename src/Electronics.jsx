import PropTypes from "prop-types";

const Electronics = ({ className = "" }) => {
  return (
    <div className={`h-40 flex-1 relative ${className}`}>
      <img
        className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_63.5px)] w-32 h-32 object-contain hidden"
        alt=""
        src="/electronics-07@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_83.5px)] w-[168.2px] h-32 object-contain hidden"
        alt=""
        src="/electronics-06@2x.png"
      />
      <img
        className="absolute h-[calc(100%_-_28px)] top-[14px] bottom-[14px] left-[calc(50%_-_47.5px)] max-h-full w-24 object-contain hidden"
        alt=""
        src="/electronics-05@2x.png"
      />
      <div className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_39.5px)] w-[80.5px] h-32 flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[7px] [transform:scale(1.174)]"
          loading="lazy"
          alt=""
          src="/electronics-04@2x.png"
        />
      </div>
      <img
        className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_96.5px)] w-[194px] h-28 object-contain hidden"
        alt=""
        src="/electronics-03@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_53px)] left-[calc(50%_-_105.5px)] w-[212px] h-[106px] object-contain hidden"
        alt=""
        src="/electronics-02@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_53px)] left-[calc(50%_-_123.5px)] w-[247px] h-[105px] object-contain hidden"
        alt=""
        src="/electronics-01@2x.png"
      />
    </div>
  );
};

Electronics.propTypes = {
  className: PropTypes.string,
};

export default Electronics;
