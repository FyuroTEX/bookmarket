import { connect } from 'react-redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';
import { bindActionCreators } from 'redux';


const mapStateToProps = ({ books, filter }) => ({
    filterBy: filter.filterBy,

  });
  
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(filterActions, dispatch),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter);
  