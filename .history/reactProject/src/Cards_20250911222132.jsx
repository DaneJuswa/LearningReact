
import './App.css'

function Cards(props){
    return(
        <div className="card-container">
            <img src="" alt="Image icon" />
            <h5>{props.name}</h5>
        </div>
    );
}

export default Cards;