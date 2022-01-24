import PropTypes from "prop-types";

function AnswerButton({ children, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`answer_btn`}
      children={children}
    >
      {children}
    </button>
  );
}

AnswerButton.defaultProps = {
  type: "button",
};

AnswerButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default AnswerButton;
