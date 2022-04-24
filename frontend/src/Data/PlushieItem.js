import './PlushieItem.css';
import { DynamicStar } from 'react-dynamic-star';

const PlushieItem = (props) => {

    const price = parseInt(props.price).toFixed(2);
    const shipping = parseInt(props.price).toFixed(2);
    return (
        <div className="plushContainer">
            <img src={props.src} alt="product" />
            <p className='plushTitle'>{props.title}</p>
            <DynamicStar width={15} height={15} outlined={true} rating={props.rating} />
            <p className='plushPrice'>{`$${price}`}</p>
            <p className='plushShipping'>{`$${shipping} shipping`}</p>
        </div>
    );
}

export default PlushieItem;