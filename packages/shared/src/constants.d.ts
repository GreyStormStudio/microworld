declare global {
    const OK: 0; //没问题

    const KEY_VALUE_MISMATCH: -1; //键值对不匹配
    const KEY_NOT_FOUND: -2; //键不存在
    const KEY_EXISTS: -3; //键已存在

    const ERROR_UNDEFINED: -99; //未定义错误

    const USER_KEY: 'User:';
    const EMAIL_KEY: 'Email:';
}
export { };