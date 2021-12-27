import Painting from '../Painting/Paintings';
import { PaitList } from './PaintList.styled';

function PaitingList({ items }) {
  return (
    <PaitList>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </PaitList>
  );
}
export default PaitingList;

// PaitingList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//   }),
//   )
// }
