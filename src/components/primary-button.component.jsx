import { useMemo } from "react";
import PropTypes from "prop-types";

const PrimaryButtonDefault = ({
  className = "",
  outline16pxHeart,
  buttonLabel,
  showOutline16pxHeart,
  showOutline16pxChevronRight,
  primaryButtonDefaultWidth,
  primaryButtonDefaultPosition,
  primaryButtonDefaultTop,
  primaryButtonDefaultLeft,
  showOutline16pxHeart1,
  showOutline16pxChevronRig,
}) => {
  const primaryButtonDefaultStyle = useMemo(() => {
    return {
      width: primaryButtonDefaultWidth,
      position: primaryButtonDefaultPosition,
      top: primaryButtonDefaultTop,
      left: primaryButtonDefaultLeft,
    };
  }, [
    primaryButtonDefaultWidth,
    primaryButtonDefaultPosition,
    primaryButtonDefaultTop,
    primaryButtonDefaultLeft,
  ]);

  return (
    <div
      className={`w-[155px] h-12 text-center text-base text-ui-gray-80 font-headings-h6-12px-12 ${className}`}
      style={primaryButtonDefaultStyle}
    >
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-12">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-mini bg-primary-yellow overflow-hidden flex flex-col items-center justify-start py-3.5 px-6 box-border">
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
            {showOutline16pxHeart && (
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src={outline16pxHeart}
              />
            )}
            <b className="relative leading-[20px]">{buttonLabel}</b>
            {showOutline16pxChevronRight && (
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/outline-16px--chevronright.svg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PrimaryButtonDefault.propTypes = {
  className: PropTypes.string,
  outline16pxHeart: PropTypes.string,
  buttonLabel: PropTypes.string,
  showOutline16pxHeart: PropTypes.bool,
  showOutline16pxChevronRight: PropTypes.bool,
  showOutline16pxHeart1: PropTypes.bool,
  showOutline16pxChevronRig: PropTypes.bool,

  /** Style props */
  primaryButtonDefaultWidth: PropTypes.any,
  primaryButtonDefaultPosition: PropTypes.any,
  primaryButtonDefaultTop: PropTypes.any,
  primaryButtonDefaultLeft: PropTypes.any,
};

export default PrimaryButtonDefault;