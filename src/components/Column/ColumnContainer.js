import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

export const getCardsForColumns = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps)(Column);