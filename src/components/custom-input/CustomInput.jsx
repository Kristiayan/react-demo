import PropTypes from "prop-types";
import "./CustomInput.css";

export const CustomInput = ({ handleChange, handleKey, value }) => {
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={value}
        className="custom-input"
        placeholder="Please enter text"
      />
    </>
  );
};

CustomInput.propTypes = {
  handleChange: PropTypes.func,
  handleKey: PropTypes.func,
  value: PropTypes.string,
};
