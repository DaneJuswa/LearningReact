import PropTypes from "prop-types";

function MyComponent({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};