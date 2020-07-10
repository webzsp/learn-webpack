/**
 * @author zsp
 * @date 2020/6/28 15:42
 * @description  组件的核心逻辑,挂载删除等
 */
import * as React from "react";

class ComponentUtils {
  private componentMap: any; // 组件缓存,根据ID
  private componentStyleMap: any; // 组件样式缓存,根据ID
  private static instance: ComponentUtils;
  static getInstance(): ComponentUtils {
    if (ComponentUtils.instance) {
      return ComponentUtils.instance;
    } else {
      ComponentUtils.instance = new ComponentUtils();
      return ComponentUtils.instance;
    }
  }

}

export { ComponentUtils };
