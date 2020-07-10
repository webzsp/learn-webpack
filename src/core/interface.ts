/**
 * @author zsp
 * @date 2020/7/8 10:26
 * @description 定义基础的接口
 */

interface LayerInterFace<T> {
  page?:string,
  id:string
  childrenLayer?:Array<LayerInterFace<T>>,
  layerConfig:LayerConfigInterFace,
  componentConfig:T,
  componentType:string
}
interface LayerConfigInterFace {
  animate:AnimateInterFace,
  font:FontInterFace,
  rect:RectInterFace,
}
interface AnimateInterFace {

}
interface FontInterFace {
  name:string,
  url:string,
  id:string
}
interface RectInterFace {
  width: number;
  height: number;
  top: number;
  left: number;
  bottom?: number;
  right?: number;
}

export {LayerInterFace,LayerConfigInterFace,AnimateInterFace,FontInterFace,RectInterFace}
