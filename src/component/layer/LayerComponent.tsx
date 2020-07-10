/**
 * @author zsp
 * @date 2020/7/10 18:31
 * @description 图层组件
 */
import React from "react";

 class LayerComponent extends React.Component{

    render(){
        const {children}=this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}

function layerWrapComponent (Component:any){
     return <LayerComponent><Component/></LayerComponent>
}

export {layerWrapComponent}
