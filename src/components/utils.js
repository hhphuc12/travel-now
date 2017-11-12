export const api = 'http://tlsg.tk/api';
export function backAndroid(navigator) {
    BackHandler.addEventListener('hardwareBackPress', () => {
        navigator.pop();
        return true
    })
};