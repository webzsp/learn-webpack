/**
 * @author zsp
 * @date 2020/7/9 20:32
 * @description
 */
import React from 'react'
import style from './test.less'

export default class Test123 extends React.Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log(style);
        return <div className={style.color}>o6772o22222</div>;
    }
}
