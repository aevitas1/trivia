import PropTypes from "prop-types";

function SelectOption({ children, defaultValue, value, onChange }) {
  return (
    <select defaultValue={defaultValue} onChange={onChange}>
      <option value={value}>{children}</option>
    </select>
  );
}

SelectOption.defaultProps = {
  defaultValue: "",
};

SelectOption.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectOption;

// function Button({ children, type, isDisabled, version, onClick }) {
//     return (
//       <button
//         type={type}
//         disabled={isDisabled}
//         onClick={onClick}
//         className={`btn btn-${version}`}
//       >
//         {children}
//       </button>
//     );
//   }

//   Button.defaultProps = {
//     version: "primary",
//     type: "button",
//     isDisabled: false,
//   };

//   Button.propTypes = {
//     children: PropTypes.node.isRequired,
//     version: PropTypes.string,
//     type: PropTypes.string,
//     isDisabled: PropTypes.bool,
//     onClick: PropTypes.func,
//   };
