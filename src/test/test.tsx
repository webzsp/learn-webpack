/**
 * @author zsp
 * @date 2020/7/10 18:47
 * @description
 */
import React from "react";

export default class TestComponent extends React.Component{
    static type: any;

    render(){
        return (
            <div>
                我是组件
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


