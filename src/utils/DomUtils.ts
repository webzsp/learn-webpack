/**
 * @author zsp
 * @date 2020/7/12 19:34
 * @description Dom 相关的常量和函数
 */

export const DOM_LAYER='dom-layer';

/**
 * @description 查看元素是不是图层元素
 * @param dom 元素
 */
export function isDomLayer (dom:HTMLElement):boolean{
    return dom.getAttribute('type')===DOM_LAYER;
}

/**
 * @description 设置html元素类型
 * @param type 类型常量
 */
export function expendAttrType (type:string):object{
    return {type}
}

/**
 * @description 返回父级节点列表中是否含有指定属性的,有的话返回最近的一个父级节点,没有的话返回false
 * @param dom dom节点
 * @param type 查询的类型字符串
 */
export function getParentByType (dom:HTMLElement,type:string):boolean|HTMLElement{
    let parent=dom;
    while (parent&&parent.getAttribute){
        if(parent.getAttribute('type')===type){
            return  parent;
        }
        // @ts-ignore
        parent=parent.parentNode;
    }
    return false
}


/**
 * @param id 扩展的图层id
 */
export function expendLayerAttr(id:string){
    return {'layer_Id':id};
}

/**
 *
 * @param layer 获取layer的id
 */
export  function getLayerId (layer:HTMLElement):string{
    return  layer.getAttribute('layer_Id')||''
}
