import {takeLatest, call, put, delay} from "redux-saga/effects"
import {types as loadHomeTypes, actions as loadHomeActions} from "../reducers/reducer-home";

export function* homeLoadWatcherSaga(){
    yield takeLatest(loadHomeTypes.LOAD_HOME, loadHomeWorker);
}

function* loadHomeWorker(action){
    
    /**
        MAKE API CALLS, FIRE ACTIONS, DO MAGIC HERE
     */
    
    yield delay(1000);
    yield put(loadHomeActions.updateHome("HELLO WORLD"));
}