import _ from "lodash";
import "./style/index.css";

function createDomElement() {
  let dom = document.createElement("div");
  dom.innerHTML = _.join(["aicoder.com", "hao", "xuexi"]);
  return dom;
}
let divDom = createDomElement();
document.body.appendChild(divDom);
