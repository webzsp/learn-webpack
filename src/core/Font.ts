/**
 * @author zsp
 * @date 2020/7/8 10:45
 * @description 字体类
 */
import {FontInterFace} from "./interface";
import {uuid} from "../utils";

export default class Font implements FontInterFace{
  private _name: string;
  private _id: string;
  private _url: string;
  static DEFAULT_FONT='-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif';

  /**
   *
   * @param name 字体的名字
   * @param id 标识
   * @param url 字体地址
   */

  constructor({name,id,url}: { name?: string,id?:string,url?:string}) {
    this._name = name||Font.DEFAULT_FONT;
    this._id = id||uuid();
    this._url = url||'';
  }
  static setDeFaultFont(font:string){
    Font.DEFAULT_FONT=font
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
