import PropTypes from "prop-types";
const TextComponent = ({ text }) => {
  return (
    <div>
      <p className="text-4xl font-bold">{text}</p>
    </div>
  );
};
TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
export default TextComponent;
