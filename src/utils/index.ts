/**
 * @author zsp
 * @date 2020/6/29 20:35
 * @description 基础公共函数
 */
import {UNIT} from "../constant";

function uuid() {
  let s = [];
  let hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  // @ts-ignore
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  let uuid = s.join('');
  return uuid;
}

function getUnit(number: any) {
  return number + UNIT;
}

function hasObject(array: Array<any> = [], obj: object, key: string) {
  for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    // @ts-ignore
    if (arrayElement[key] === obj[key]) {
      return true;
    }
  }
  return false;
}

class Log {
  static error(msg:string){
    console.error(msg)
  }
  static warning(msg:string){
    console.warn(msg);
  }
}


export { uuid, getUnit, hasObject,Log };
