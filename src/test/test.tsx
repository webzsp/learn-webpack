/**
 * @author zsp
 * @date 2020/7/10 18:47
 * @description
 */
import React from "react";
import LayerConfig from "@/core/LayerConfig";


interface ConfigProps {
    componentConfig:{
        src:string
    }
    layerConfig:LayerConfig
}

export default class TestComponent extends React.Component<ConfigProps>{
    static type: any;

    render(){
        const {componentConfig,layerConfig}=this.props;
        console.log(layerConfig.rect.width,layerConfig.rect.height);
        return (
            <div>
                <img draggable={"false"} style={{width:'100%',height:'100%'}} src={componentConfig.src} alt=""/>
            </div>
        )
    }
}
function Config (){
    return <div>我是配置</div>
}
// @ts-ignore
TestComponent.type='plainImage';
export {TestComponent,Config}


