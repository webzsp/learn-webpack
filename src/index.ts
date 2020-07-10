
import H5Editor from "./component/baseLayout/H5Editor";
import {ComponentUtils} from "@/core/ComponentUtils";
import TestComponent, {Config} from "@/test/test";

// @ts-ignore
ComponentUtils.getInstance().registerComponent({component:TestComponent,configComponent:Config,type:TestComponent.type})


export default H5Editor;
