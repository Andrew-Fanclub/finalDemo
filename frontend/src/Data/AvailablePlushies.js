import PlushieItem from './PlushieItem';
import './AvailablePlushies.css';
import { Row, Col } from 'react-bootstrap';

const AvailablePlushies = (props) => {
    const plushiesList =
        props.list && props.list.map(plushie =>
            <Col className='col-3 mb-3 temp' key={plushie.id}>
                <PlushieItem id={plushie.id} title={plushie.title} src={plushie.src} price={plushie.price} shipping={plushie.shipping} rating={plushie.rating} />
            </Col>
        );
    return (
        <section>
            <Row className="justify-content-center mb-5">
                {plushiesList}
            </Row>
        </section>
    );
}

export default AvailablePlushies;