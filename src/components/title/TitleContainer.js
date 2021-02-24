import { connect } from 'react-redux';
import Title from './Title';
import { changeLevelCreator } from '../../store/titleReducer';

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        nav: state.titleData.levels,
        active: state.titleData.active
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLevel: (field) => dispatch(changeLevelCreator(field))
    }
}

const TitleContainer = connect(mapStateToProps, mapDispatchToProps)(Title);

export default TitleContainer;