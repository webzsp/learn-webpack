const a={
  "page": [],
  "data": [
    {
      "page": "",
       id:'',
      "childrenLayer": [],
      "layerConfig": {
        "animate": {},
        "font": {},
        "rect":{}
      },
      "component":{
        id:"",
        type:'',
        componentConfig:{}
      }
    }
  ]
};
// data 是渲染的数据,其中的每一项其实就是图层的信息,图层包括页码信息,子图层(组合图层用的),图层的基本配置(动画,字体等)
// componentConfig 是组件的配置,一般情况下一个图层包含一个组件,组合就是包含多个图层,图层再去包含组件,
// 当有组合图层的情况出现组件的宽高就不等于图层了,只有当图层不是组合的:组件的宽高才会等于图层的宽高

// 你的组件到我这来叫图层
