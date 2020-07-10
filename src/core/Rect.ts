/**
 * @author zsp
 * @date 2020/7/8 15:24
 * @description
 */
import {RectInterFace} from "./interface";

export default class Rect implements RectInterFace{
  private _bottom?: number;
  private _height: number;
  private _left: number;
  private _right?: number;
  private _top: number;
  private _width: number;

  /**
   *
   * @param bottom 定义bottom 属性
   * @param height 高
   * @param left 定位left属性
   * @param right 定位right属性
   * @param top 定位top属性
   * @param width 宽
   */
  constructor({bottom, height, left, right, top, width}: { bottom?: number, height: number, left: number, right?: number, top: number, width: number }) {
    this._bottom = bottom;
    this._height = height;
    this._left = left;
    this._right = right;
    this._top = top;
    this._width = width;
  }

  get bottom(): number |undefined{
    return this._bottom;
  }

  set bottom(value: number|undefined) {
    this._bottom = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get left(): number {
    return this._left;
  }

  set left(value: number) {
    this._left = value;
  }

  get right(): number|undefined {
    return this._right;
  }

  set right(value: number|undefined) {
    this._right = value;
  }

  get top(): number {
    return this._top;
  }

  set top(value: number) {
    this._top = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }
}
