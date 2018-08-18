import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';


function* getInitList() {
  try {
    const url = 'http://www.ifruit.org:7300/mock/59afdddae4205b01cfc9ede5/api_1504685109840/front1/login.do'
    const res = yield axios.post(url, { number: "13127733713" });
    const action = initListAction(res.data.list);
    yield put(action);
  } catch (e) {
    console.log("网络请求失败")
  }

}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;