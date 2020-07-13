/**
 * @author zsp
 * @date 2020/7/10 11:13
 * @description
 */
import React from "react";
import style from './view.less'
import Layer from "@/core/Layer";
import {ComponentUtils} from "@/core/ComponentUtils";

interface IProps {
    renderData:Array<Layer<any>>
}
interface IState {

}
export default class View extends React.Component<IProps,IState>{
    render(){
        const {renderData}=this.props;
        return (
            <div id="h5Editor" className={style.phone}>
                {
                    renderData.map(item=>{
                        return ComponentUtils.getInstance().getComponent(item.componentType,item)
                    })
                }
            </div>
        )
    }
}
