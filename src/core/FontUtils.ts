/**
 * @author zsp
 * @date 2020/7/8 16:58
 * @description 字体工具类
 */
import Font from "./Font";

class FontUtils {
  private _fontList: Array<Font>;
  static instance: FontUtils;

  /**
   *
   * @param fontList
   */
  constructor(fontList?: Array<Font>) {
    this._fontList = fontList || [];
  }

  get fontList(): Array<Font> {
    return this._fontList;
  }

  set fontList(value: Array<Font>) {
    this._fontList = value;
  }

  static getInstance() {
    if (FontUtils.instance) {
      return FontUtils.instance;
    }
    FontUtils.instance = new FontUtils();
    return FontUtils.instance;
  }

  /**
   *
   * @param font 要注册的远程字体,或字体列表
   */
  registerFont(font: Font | Array<Font>) {
    if (!(font instanceof Font) && font.length) {
      this.fontList.push(...font);
    } else {
      if (font instanceof Font) {
        this.fontList.push(font);
      }
    }
    // if(hasObject(this.fontList,font,id)){
    //   return
    // }
    // this.fontList.push(font);
    // 需要去重,这里没写

    this.insertStyle();
  }

  generatorStyle() {
    let style = this.fontList
      .map(item => {
        return `@font-face {
  font-family: ${item.name};
  src: url("${item.url}");
}`;
      })
      .join(';');
    let dom = document.createElement('style');
    dom.innerHTML = style;
    dom.type = 'text/css';
    return dom;
  }

  insertStyle() {
    let str = this.generatorStyle();
    document.getElementsByTagName('head')[0].appendChild(str);
  }
}
