/**
 * @author zsp
 * @date 2020/6/28 15:42
 * @description  组件的核心逻辑,挂载删除等
 */
import * as React from "react";
import {Log} from "@/utils";
import {LayerComponent} from "@/component/layer/LayerComponent";
import Layer from "@/core/Layer";

type Component={
  component:any,
  type:string,
  configComponent:any
}
type ComponentAttr={

}
class ComponentUtils {
  private componentMap: any; // 组件缓存,根据ID
  private componentStyleMap: any; // 组件样式缓存,根据ID
  private static instance: ComponentUtils;

  private constructor() {
    this.componentMap={};
    this.componentStyleMap={};
  }

  static getInstance(): ComponentUtils {
    if (ComponentUtils.instance) {
      return ComponentUtils.instance;
    } else {
      ComponentUtils.instance = new ComponentUtils();
      return ComponentUtils.instance;
    }
  }

  /**
   * @description 注册组件
   * @param component 组件的数据结构
   */
  registerComponent(component:Component){
    try {
      this.componentMap[component.type]=component.component;
      this.componentStyleMap[component.type]=component.configComponent;
    }catch (e) {
      Log.error('组件不符合规范');
    }
  }

  getComponent(type:string,options:Layer<any>){
      let Dom=this.componentMap[type];
      return  <LayerComponent key={options.id} layer={options} renderProps={(props=>{
        // return  React.cloneElement(this.componentMap[type], {...props});
          return <Dom {...props}/>
     })}/>
  }

  // wrapComponentByLayer(Component: any){
  //   return layerWrapComponent(Component)
  // }



}

export { ComponentUtils };
