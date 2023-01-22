import './card.scss';

const Card = (props) => {
  return (
    <div className='card'>
      <img
        src={props.img}
        width='300'
        height='180'
        alt='card img'
      />
      <div className='card-body'>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card_text'>
          <span className='card_text_style'>Population:</span>
          {props.population}
        </p>
        <p className='card_text'>
          <span className='card_text_style'>Region:</span> {props.region}
        </p>
        <p className='card_text'>
          <span className='card_text_style'>Capital:</span> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
