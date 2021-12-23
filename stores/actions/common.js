/*
* 公共actions
* */
import { COMMON } from '../actionTypes'
const actions = {
  // head 设置
  setDemo: (demo) => dispatch => {
    return dispatch({
      type: COMMON.DEMO,
      demo
    })
  }
};

export default actions