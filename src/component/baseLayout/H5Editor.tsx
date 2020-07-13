/**
 * @author zsp
 * @date 2020/7/8 9:44
 * @description  编辑布局
 */

import React  from 'react';
import style from './H5Editor.module.less';
import EventBus from "../../core/Event";
import Layer from "../../core/Layer";
import {CHANGE_RENDER_DATA_ITEM} from "../../constant/event";
import View from "@/component/view/View";
import TestComponent, {Config} from "@/test/test";
import {ComponentUtils} from "@/core/ComponentUtils";
import {DOM_LAYER, getParentByType} from "@/utils/DomUtils";

interface IProps {
  renderData?: Array<Layer<any>>;
  change?: Function;
}
interface IState {
  renderData: Array<Layer<any>>;
}

class H5Editor extends React.Component<IProps, IState> {
  readonly state: IState = {
    renderData: [],
  };

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.renderData) {
      return { ...prevState, renderData: nextProps.renderData };
    }
    return prevState;
  }

  registerEvent(){
     let h5Editor=document.getElementById('h5Editor');
     if(h5Editor){
       h5Editor.addEventListener('click',this.handlerClick.bind(this),true)
     }
  }
  handlerClick(e:Event){
    console.log(e.target);
    // @ts-ignore
    let layer=getParentByType(e.target || document.body, DOM_LAYER);
    if(!layer){
      const {renderData=[]} = this.state;
      this.setState({
        renderData:renderData.map(item=>{
          item.isActive=false;
          return item
        })
      })
    }
  }
  componentDidMount(): void {
    this.registerEvent();
    EventBus.addListener(CHANGE_RENDER_DATA_ITEM, (data: Layer<any>) =>
      this.changeRenderData(data),
    );
    let layer=new Layer<any>({componentType:TestComponent.type, componentConfig:{src:'http://img3.imgtn.bdimg.com/it/u=2534506313,1688529724&fm=26&gp=0.jpg'}});
    layer.layerConfig.rect.width=120;
    layer.layerConfig.rect.height=120;
    this.setState({
      renderData:[layer]
    })
  }

  getChangeRenderData(renderDataItem: Layer<any>): Array<Layer<any>> {
    const { renderData = [] } = this.state;
    return renderData.map(item => {
      // @ts-ignore
      if (item.UUID === renderDataItem.UUID) {
        return renderDataItem;
      }
      return item;
    });
  }

  changeRenderData = (renderDataItem: Layer<any>) => {
    let renderData = this.getChangeRenderData(renderDataItem);
    if (this.props.change) {
      this.props.change(renderData);
      return;
    }
    this.setState({
      renderData: renderData,
    });
  };


  render() {
    const { renderData = [] } = this.state;
    return (
      <div className={style.H5editor}>
        <div className="header">
          <button >导出图片</button>
        </div>
        <div className="content">
          <div className="phone">
            <div className="phone-content">
              <div className="phone-image">
                <View renderData={renderData} />
              </div>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </div>
    );
  }
}

export default H5Editor;
