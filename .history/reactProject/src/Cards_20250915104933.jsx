
import './App.css'
import PropTypes from "prop-types";

function Cards(props){
    return(
        <div className="card-container">
            <img src="" alt="Image icon" />
            <h5>{props.name}</h5>
        </div>
    );
}
Cards.propTypes = {
  name: PropTypes.string.isRequired,
  
};
export default Cards;