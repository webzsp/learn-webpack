/**
 * @author zsp
 * @date 2020/7/10 18:31
 * @description 图层组件
 */
import React from "react";
import Layer from "@/core/Layer";
import LayerConfig from "@/core/LayerConfig";
import style from './layerComponent.less'

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
     mouseDown(){

     }
     mouseUp(){

     }
     mouseMove(){

     }
    render(){
        const {renderProps,layer}=this.props;

        let event={
            onMouseDown:this.mouseDown.bind(this),
            onMouseUp:this.mouseUp.bind(this),
            onMouseMove:this.mouseMove.bind(this)
        };

        return (
            <div className={style.layer} style={{width:layer.layerConfig.rect.width,height:layer.layerConfig.rect.height}}>
                {
                    renderProps({componentConfig: layer.componentConfig, layerConfig: layer.layerConfig} as ComponentProps)
                }
                <div className={style.operate_par}>
                    <span className="operate-line">
                        <span className="operate-rotate"></span>
                    </span>
                    <span {...event} className="operate-point top-left"></span>
                    <span {...event} className="operate-point top-center"></span>
                    <span {...event} className="operate-point top-right"></span>
                    <span {...event} className="operate-point center-left"></span>
                    <span {...event} className="operate-point center-right"></span>
                    <span {...event} className="operate-point bottom-left"></span>
                    <span {...event} className="operate-point bottom-center"></span>
                    <span {...event} className="operate-point bottom-right"></span>
                </div>
            </div>
        )
    }
}

// function layerWrapComponent (Component:any){
//      return <LayerComponent renderProps={(props:any)=><Component {...props}/>}/>
// }

export {LayerComponent,LayerProps,ComponentProps}
