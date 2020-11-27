import proxy, {
    addedPropsMap,
    modifyPropsMap,
    currentUpdatedPropsMap,
} from './proxyWindow';

(function (window) {
    // 子应用的运行沙箱
    window.a = 12; // 新增一个属性

    window.fetch = 'aaa'; // 改变一个属性

    console.log('add', addedPropsMap);
    console.log('modify', modifyPropsMap);
    console.log('current', currentUpdatedPropsMap);
})(proxy);
