import _ from "lodash";
import print from "./print.js";

function component() {
  let element = document.createElement("div");
  let button = document.createElement("button");
  let br = document.createElement("br");
  button.innerHTML = "Click me and look at the console!";
  element.appendChild(br);
  element.appendChild(button);
  button.onclick = print;
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated print module!");
    print();
  });
}
