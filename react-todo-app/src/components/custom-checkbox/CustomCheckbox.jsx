import PropTypes from "prop-types";
import "./CustomCheckbox.css";

export const CustomCheckbox = ({
  label,
  checked,
  handleCheckbox,
  ...props
}) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
            className={checked ? "checked" : ""}
            {...props}
          />
        </div>
        <span style={{ marginLeft: "0.6em", fontFamily: "cursive" }}>
          {label}
        </span>
      </label>
    </div>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  handleCheckbox: PropTypes.func,
};
