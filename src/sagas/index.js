import { all } from 'redux-saga/effects'
import * as homeLoading from "./sagas-home-load"


export default function* rootSaga(){
    yield all([
        homeLoading.homeLoadWatcherSaga()
    ])
}