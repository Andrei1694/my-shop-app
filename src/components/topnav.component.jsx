import { useMemo } from "react";
import PropTypes from "prop-types";

const TopNav = ({
  className = "",
  leftIcon,
  navigationTitle,
  showRightIcon,
  showSearchText,
  topNavPosition,
  topNavTop,
  topNavLeft,
}) => {
  const topNavStyle = useMemo(() => {
    return {
      position: topNavPosition,
      top: topNavTop,
      left: topNavLeft,
    };
  }, [topNavPosition, topNavTop, topNavLeft]);

  return (
    <div
      className={`w-[375px] bg-background-white max-w-full h-[104px] text-center text-base text-ui-gray-100 font-headings-h4-20px-24 ${className}`}
      style={topNavStyle}
    >
      <img
        className="absolute top-[64px] left-[24px] w-5 h-5 overflow-hidden"
        alt=""
        src={leftIcon}
      />
      {showRightIcon && (
        <img
          className="absolute top-[64px] left-[331px] w-5 h-5 overflow-hidden"
          alt=""
          src="/right-icon.svg"
        />
      )}
      <div className="absolute top-[64px] left-[67px] leading-[20px] font-extrabold inline-block w-[241px]">
        {navigationTitle}
      </div>
      {showSearchText && (
        <div className="absolute top-[61px] left-[52px] leading-[24px] text-ui-gray-60 text-left">
          Search by keyword or categories
        </div>
      )}
      <div className="absolute top-[103.5px] left-[-0.5px] box-border w-[376px] h-px border-t-[1px] border-solid border-ui-gray-20" />
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.string,
  navigationTitle: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showSearchText: PropTypes.bool,

  /** Style props */
  topNavPosition: PropTypes.any,
  topNavTop: PropTypes.any,
  topNavLeft: PropTypes.any,
};

export default TopNav;
