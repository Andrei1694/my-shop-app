import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DefaultNav = ({ className = "", stickyBottom = false }) => {
  const stickyStyle = stickyBottom ? "fixed bottom-0 left-0 right-0" : "";
  return (
    <footer className={`w-full max-w-[375px] h-20 ${stickyStyle} ${className}`}>
      <div className="flex flex-col bg-text-white h-20">
        <div className="box-border h-px border-t-[1px] border-solid border-ui-gray-20" />
        <div className="flex-1 flex justify-around items-center">
          <Link
            to="/home"
            className="flex items-center justify-center w-10 h-10"
          >
            <img className="w-5 h-5 overflow-hidden" alt="" src="/vector.svg" />
          </Link>
          <Link
            to="/favorites"
            className="flex items-center justify-center w-10 h-10"
          >
            <img
              className="w-5 h-5 overflow-hidden"
              alt=""
              src="/outline-24px--heart11.svg"
            />
          </Link>
          <Link
            to="/search"
            className="flex items-center justify-center w-10 h-10 rounded-81xl bg-primary-yellow"
          >
            <img
              className="w-5 h-5 overflow-hidden"
              alt=""
              src="/outline-24px--search.svg"
            />
          </Link>
          <Link
            to="/categories"
            className="flex items-center justify-center w-10 h-10"
          >
            <img
              className="w-5 h-5 overflow-hidden"
              alt=""
              src="/outline-24px--tag.svg"
            />
          </Link>
          <Link
            to="/cart"
            className="flex items-center justify-center w-10 h-10"
          >
            <img
              className="w-5 h-5 overflow-hidden object-cover"
              alt=""
              src="/cart-nav-item@2x.png"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

DefaultNav.propTypes = {
  className: PropTypes.string,
};

export default DefaultNav;
