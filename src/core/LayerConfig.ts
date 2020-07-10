/**
 * @author zsp
 * @date 2020/7/8 10:42
 * @description 图层配置类
 */
import {AnimateInterFace, FontInterFace, LayerConfigInterFace, RectInterFace} from "./interface";

class LayerConfig implements LayerConfigInterFace{
  private _animate: AnimateInterFace;
  private _font: FontInterFace;
  private _rect: RectInterFace;

  /**
   * @param animate 图层的动画
   * @param font 图层的字体 ,子组件会自动取
   * @param rect 图层的矩阵信息,宽高等
   */
  constructor(animate: AnimateInterFace, font: FontInterFace, rect: RectInterFace) {
    this._animate = animate;
    this._font = font;
    this._rect = rect;
  }

  get animate(): AnimateInterFace {
    return this._animate;
  }

  set animate(value: AnimateInterFace) {
    this._animate = value;
  }

  get font(): FontInterFace {
    return this._font;
  }

  set font(value: FontInterFace) {
    this._font = value;
  }

  get rect(): RectInterFace {
    return this._rect;
  }

  set rect(value: RectInterFace) {
    this._rect = value;
  }
}
export default LayerConfig;
