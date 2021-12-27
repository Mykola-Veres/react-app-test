import PropTypes from 'prop-types';
import logo512 from './logo512.png';
import { Section, Images } from './Painting.styled';

export default function Painting({
  url = logo512,
  title,
  price = 'unable',
  quantity,
}) {
  return (
    <Section>
      <Images src={url} alt="img" />
      {title && <h2>{title}</h2>}
      <div>{price}Green card</div>
      <div>USA</div>
      <p>how many:{quantity > 10 ? 'many' : 'less'}</p>
    </Section>
  );
}
Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
