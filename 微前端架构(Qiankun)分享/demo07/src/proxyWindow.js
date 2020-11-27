// 存放新增的初始值
export const addedPropsMap = new Map();
// {}

// 存放改变前的初始值
export const modifyPropsMap = new Map();

// 存放改变后当前的值
export const currentUpdatedPropsMap = new Map();

const rawWindow = window;
const fakeWindow = Object.create(null);

const proxy = new Proxy(fakeWindow, {
    set(_, p, value) {
        console.log('set', p, value);
        if (!rawWindow.hasOwnProperty(p)) {
            // 如果window对象中没有该属性，则存放到新增Map
            addedPropsMap.set(p, value);
        } else if (!modifyPropsMap.has(p)) {
            // 如果window对象中有该属性，但是“改变前初始值”Map中没有，记录初始值
            const originalValue = rawWindow[p]
            modifyPropsMap.set(p, originalValue);
        }

        // 存放当前的值
        currentUpdatedPropsMap.set(p, value);
        rawWindow[p] = value;
        return true;
    },
    get(_, p) {
        console.log('get', p);
        const value = rawWindow[p];
        return value;
    }
});

export default proxy;