import { connect } from 'react-redux';
import Title from './Title';
import { changeLevelCreator } from '../../store/titleReducer';

const mapStateToProps = (state) => {
    // console.log(10, state)
    return {
        field: state.field
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLevel: (field) => dispatch(changeLevelCreator(field))
    }
}

const TitleContainer = connect(mapStateToProps, mapDispatchToProps)(Title);

export default TitleContainer;