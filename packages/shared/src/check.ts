//验证是否符合密码规范
function checkPassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;//密码至少8位，至少1个大写字母，1个小写字母，1个数字
    return regex.test(password);
}
//验证是否符合邮箱规范
function checkEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//邮箱格式
    return regex.test(email);
}

export { checkPassword, checkEmail };