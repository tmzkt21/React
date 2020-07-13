import {createstore} from 'redux'
import {createBrowserHistory} from 'history'
import reducers  from "../reducers";


export const history = createBrowserHistory()

function configuerStore(history) {
    return createstore(
        reducers(history),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )

}
export default configuerStore()