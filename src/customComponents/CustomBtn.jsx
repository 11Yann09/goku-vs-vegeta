import PropTypes from "prop-types";

function CustomBtn({ clickHandler, classes, children }) {
  return (
    <button
      onClick={clickHandler ? clickHandler : undefined}
      className={classes}
    >
      {children}
    </button>
  );
}

CustomBtn.propTypes = {
  clickHandler: PropTypes.func,
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomBtn;
