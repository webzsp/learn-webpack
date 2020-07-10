/**
 * @author zsp
 * @date 2020/7/8 9:55
 * @description 渲染数据的子项数据结构
 */
import {LayerConfigInterFace, LayerInterFace} from "./interface";


class Layer<T> implements LayerInterFace<T>{

  private _childrenLayer: Array<LayerInterFace<T>>;
  private _componentConfig: T;
  private _layerConfig: LayerConfigInterFace;
  private _page: string;
  private _componentType: string;
  private _id: string;

  /**
   *
   * @param childrenLayer  组合的子图层
   * @param componentConfig // 组件自己的配置,通过泛型传入
   * @param layerConfig  图层的配置
   * @param page 属于的页码
   * @param componentType 组建的类型
   * @param id 图层的id
   */

  constructor(childrenLayer: Array<LayerInterFace<T>>, componentConfig: T, layerConfig: LayerConfigInterFace, page: string, componentType: string, id: string) {
    this._childrenLayer = childrenLayer;
    this._componentConfig = componentConfig;
    this._layerConfig = layerConfig;
    this._page = page;
    this._componentType = componentType;
    this._id = id;
  }


  get childrenLayer(): Array<LayerInterFace<T>> {
    return this._childrenLayer;
  }

  set childrenLayer(value: Array<LayerInterFace<T>>) {
    this._childrenLayer = value;
  }

  get componentConfig(): T {
    return this._componentConfig;
  }

  set componentConfig(value: T) {
    this._componentConfig = value;
  }

  get layerConfig(): LayerConfigInterFace {
    return this._layerConfig;
  }

  set layerConfig(value: LayerConfigInterFace) {
    this._layerConfig = value;
  }

  get page(): string {
    return this._page;
  }

  set page(value: string) {
    this._page = value;
  }


  get componentType(): string {
    return this._componentType;
  }

  set componentType(value: string) {
    this._componentType = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
export default Layer;
