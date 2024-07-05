import vendoFilhotes from '../../assets/vendo_filhotes.jpg';
import './styles.css';


function Cards() {
    return (
        <div className="container-cards">
            <img
                src={vendoFilhotes}
                alt="Pastor Alemão"
                className="container-img"
            />
        </div>
    );
}

export default Cards;