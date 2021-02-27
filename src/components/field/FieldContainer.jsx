import { connect } from 'react-redux';
import Field from './Field';
import { deleteBlockCreator, changeGameCreator, toggleFlagCreator } from '../../store/fieldReducer';

const mapStateToProps = (state) => {
    console.log('state field', state)
    return {
        level: state.titleData.levels[state.titleData.active],
        active: state.titleData.active,
        game: state.fieldData.gameSquare.flat(),
        control: state.fieldData.controlSquare.flat(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openBlock: (value) => dispatch(deleteBlockCreator(value)),
        changeGame: (value) => dispatch(changeGameCreator(value)),
        toggleFlag: (value) => dispatch(toggleFlagCreator(value))
    }
}

const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field);

export default FieldContainer;