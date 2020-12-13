import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {dispatch(onMessageChangeActionCreator(text))},
        addMessage: () => { dispatch(addMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;