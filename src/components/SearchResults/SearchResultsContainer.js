import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';


const mapStateToProps = (state) => ({
  cards: getCardsForSearchResults(state),
});


export default connect(mapStateToProps )(SearchResults);