
import PropTypes from "prop-types";

function Cards({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
export default Cards;