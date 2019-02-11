import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import BookCard from '../components/BookCard';
import { bindActionCreators } from 'redux';


const mapStateToProps = ({ cart }, {id}) => ({
  addedCount: cart.items.reduce(
    (count, book) => count + (book.id === id ? 1 : 0),
    0,
  ),
  });
  
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(cartActions, dispatch),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookCard);
  