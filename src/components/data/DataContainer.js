import { connect } from 'react-redux';
import Data from './Data';
// import { changeLevelCreator } from '../../store/titleReducer';

const mapStateToProps = (state) => {
    // console.log('Data', state)
    return {
        bomb: state.fieldData.bomb
    }
}


const DataContainer = connect(mapStateToProps)(Data);

export default DataContainer;