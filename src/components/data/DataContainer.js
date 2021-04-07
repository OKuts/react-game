import { connect } from 'react-redux';
import Data from './Data';
// import { changeLevelCreator } from '../../store/titleReducer';

const mapStateToProps = (state) => {
    // console.log('Data', state)
    return {
        bomb: state.fieldData.bomb,
        flagBalance: state.fieldData.flagBalance,
        step: state.fieldData.step,
        isGame: state.fieldData.isGame
    }
}


const DataContainer = connect(mapStateToProps)(Data);

export default DataContainer;