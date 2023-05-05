import PropTypes from 'prop-types';
import "./CustomButton.css";

export const CustomButton = ({handleClick, children, selected}) => {
    const classes = children === selected ? "custom-button selected" : "custom-button";

    return (
        <button className={classes} onClick={handleClick}>{children}</button>
    );
}

CustomButton.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.string,
    selected: PropTypes.string
  };