import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {dispatch(onMessageChangeActionCreator(text))},
        addMessage: () => { dispatch(addMessageActionCreator())}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)