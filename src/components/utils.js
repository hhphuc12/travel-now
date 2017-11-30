export const api = 'http://tlsg.tk/api';
export function backAndroid(navigator) {
    BackHandler.addEventListener('hardwareBackPress', () => {
        navigator.pop();
        return true
    })
};
export function sub30(text) {
    return text.length < 30 ? text : (text.substring(0, 30) + '...');
}