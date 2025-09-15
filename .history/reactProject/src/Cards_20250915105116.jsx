
import './App.css'
import PropTypes from "prop-types";

function Cards(props){
    return(
        <div className="card-container">
            <h5>{props.name}</h5>
        </div>
    );
}
Cards.propTypes = {
  name: PropTypes.string
  
};
export default Cards;