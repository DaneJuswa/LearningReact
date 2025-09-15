
import PropTypes from "prop-types";

function Cards({ name = "gues", age=19 }) {
  return <p>{name} is {age} years old.</p>;
}


Cards.defaultProps = {
    name : "Guest",
    age: 0
}
export default Cards;