import { connect } from 'react-redux';
import Field from './Field';
import { deleteBlockCreator } from '../../store/fieldReducer';

const mapStateToProps = (state) => {
    console.log(state.game.gameSquare)
    return {
        field: state.field,
        game: state.game.gameSquare.reduce((acc, el) => [...acc, ...el], [])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openBlock: (value) => dispatch(deleteBlockCreator(value))
    }
}

const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field);

export default FieldContainer;