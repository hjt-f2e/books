import { initGlobalState } from 'qiankun';

const initialState = {
    // 初始化state
    a: 1234567
};
const actions = initGlobalState(initialState);

export default actions;