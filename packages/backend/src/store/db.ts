import { Level } from "level";
import "@shared/index"

const db = new Level('../dist/db');

// 序列化函数
function serialize<T>(data: T): string {
    return JSON.stringify(data);
}

// 反序列化函数
function deserialize<T>(data: string): T {
    return JSON.parse(data) as T;
}
/**
 * 
 * @param data 数据
 * @param key 键
 * @returns 是否成功
 */
async function putdata(data: any, key: string) {//储存数据
    try {
        await db.put(key, serialize(data));
        return OK;
    }
    catch (err) {
        console.log(err);
        return ERROR_UNDEFINED;
    }
}
/**
 * 
 * @param key 键
 * @returns 数据|null
 */
async function getdata(key: string) {//获取数据
    try {
        const odata = await db.get(key);
        if (odata) {
            const data = deserialize<any>(odata);
            return data;
        }
        else {
            return KEY_NOT_FOUND;
        }
    }
    catch (err) {
        console.log(err);
        return ERROR_UNDEFINED;
    }
}

/**
 * 
 * @param key 键
 * @returns 是否成功
 */
async function deletdata(key: string) {//删除数据
    try {
        await db.del(key);
        return OK;
    }
    catch (err) {
        console.log(err);
        return ERROR_UNDEFINED;
    }
}
/**
 * 
 * @param key 键
 * @param data {子键:值}
 * @returns 是否成功
 */
async function updatedata(key: string, data: { key: string, value: any }) {//更新数据
    try {
        const odata = await db.get(key);
        if (odata) {
            const odataObj = deserialize<any>(odata);
            odataObj[data.key] = data.value;
            await db.put(key, serialize(odataObj));
            return OK;
        }
        else {
            return KEY_NOT_FOUND;
        }
    }
    catch (err) {
        console.log(err);
        return ERROR_UNDEFINED;
    }
}

/**
 * 
 * @returns 所有键或空数组
 */
async function getkeys() {//获取所有键
    try {
        const keys = db.keys();
        return keys;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}