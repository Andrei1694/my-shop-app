import { useMemo } from "react";
import PropTypes from "prop-types";

const PrimaryIcon = ({
  className = "",
  primaryIconPrimary,
  primaryIconWidth,
  primaryIconOverflow,
  primaryIconHeight,
  primaryIconPosition,
  primaryIconTop,
  primaryIconLeft,
}) => {
  const primaryIconStyle = useMemo(() => {
    return {
      width: primaryIconWidth,
      overflow: primaryIconOverflow,
      height: primaryIconHeight,
      position: primaryIconPosition,
      top: primaryIconTop,
      left: primaryIconLeft,
    };
  }, [
    primaryIconWidth,
    primaryIconOverflow,
    primaryIconHeight,
    primaryIconPosition,
    primaryIconTop,
    primaryIconLeft,
  ]);

  return (
    <img
      className={`w-[171px] max-w-full overflow-hidden h-10 ${className}`}
      alt=""
      src={primaryIconPrimary}
      style={primaryIconStyle}
    />
  );
};

PrimaryIcon.propTypes = {
  className: PropTypes.string,
  primaryIconPrimary: PropTypes.string,

  /** Style props */
  primaryIconWidth: PropTypes.any,
  primaryIconOverflow: PropTypes.any,
  primaryIconHeight: PropTypes.any,
  primaryIconPosition: PropTypes.any,
  primaryIconTop: PropTypes.any,
  primaryIconLeft: PropTypes.any,
};

export default PrimaryIcon;
