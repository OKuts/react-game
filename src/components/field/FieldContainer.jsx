import { connect } from 'react-redux';
import Field from './Field';
// import { changeLevelCreator } from '../../store/titleReducer';

const mapStateToProps = (state) => {

    console.log(state.field)
    return {
        field: state.field
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeAreaFromContainer: (text) => dispatch(changeLevelCreator(value))
//     }
// }

const FieldContainer = connect(mapStateToProps)(Field);

export default FieldContainer;