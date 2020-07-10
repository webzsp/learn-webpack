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

interface IProps {
  renderData?: Array<Layer<any>>;
  change?: Function;
}
interface IState {
  renderData: Array<any>;
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

  componentDidMount(): void {
    EventBus.addListener(CHANGE_RENDER_DATA_ITEM, (data: Layer<any>) =>
      this.changeRenderData(data),
    );
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
