/**
 * @author zsp
 * @date 2020/7/10 18:31
 * @description 图层组件
 */
import React, {lazy} from "react";
import Layer from "@/core/Layer";
import LayerConfig from "@/core/LayerConfig";
import style from './layerComponent.less'
import {DOM_LAYER, expendAttrType, expendLayerAttr} from "@/utils/DomUtils";
import EventBus from "@/core/Event";
import {CHANGE_RENDER_DATA_ITEM} from "@/constant/event";

interface LayerProps {
    renderProps:(props:ComponentProps)=>any,
    layer:Layer<any>
}

interface ComponentProps {
    componentConfig:any,
    layerConfig:LayerConfig
}

 class LayerComponent extends React.Component<LayerProps,{}>{

     dragLayer(type:string){

     }
     mouseDown(event:React.MouseEvent<HTMLSpanElement>){
         event.stopPropagation();
         // @ts-ignore
         document.addEventListener('mousemove',this.mouseMove,true);
         // @ts-ignore
         document.addEventListener('mouseup',this.mouseUp,true)
     }
     mouseUp(e:React.MouseEvent<Document>){
         e.preventDefault();
         e.stopPropagation();
        // @ts-ignore
         document.removeEventListener('mousemove',this.mouseMove);
        // @ts-ignore
         document.removeEventListener('mouseup',this.mouseUp)
     }
     mouseMove(e:React.MouseEvent<Document>){
         e.preventDefault();
         e.stopPropagation();

         console.log(44);
         console.log(e.clientX);
     }
     // 激活图层
     activeLayer(){
         const {layer}=this.props;
         layer.isActive=true;
         EventBus.emit(CHANGE_RENDER_DATA_ITEM,layer);
     }
    render(){
        const {renderProps,layer}=this.props;

        let event={
            onMouseDown:this.mouseDown.bind(this),
        };

        return (
            <div onClick={this.activeLayer.bind(this,layer.id)} {...expendAttrType(DOM_LAYER)} {...expendLayerAttr(layer.id)} className={`${style.layer} ${layer.isActive&&style.active}`} style={{width:layer.layerConfig.rect.width,height:layer.layerConfig.rect.height}}>
                {
                    renderProps({componentConfig: layer.componentConfig, layerConfig: layer.layerConfig} as ComponentProps)
                }
                <div className={style.operate_par}>
                    <span className="operate-line">
                        <span className="operate-rotate"/>
                    </span>
                    <span {...event} className="operate-point top-left"/>
                    <span {...event} className="operate-point top-center"/>
                    <span {...event} className="operate-point top-right"/>
                    <span {...event} className="operate-point center-left"/>
                    <span {...event} className="operate-point center-right"/>
                    <span {...event} className="operate-point bottom-left"/>
                    <span {...event} className="operate-point bottom-center"/>
                    <span {...event} className="operate-point bottom-right"/>
                </div>
            </div>
        )
    }
}
export {LayerComponent,LayerProps,ComponentProps}
