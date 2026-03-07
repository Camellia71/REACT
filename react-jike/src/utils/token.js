//封装三个和token有关的函数：获取、存储、删除

const TOKENKEY = "token_key";

function setToken(token) {
  localStorage.setItem(TOKENKEY, token);
}
function getToken() {
  return localStorage.getItem(TOKENKEY);
}
function removeToken() {
  localStorage.removeItem(TOKENKEY);
}
export { setToken, getToken, removeToken };
