async function getComponent() {
    let element = document.createElement("div");
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML = _.join(["<p>", "Hello", "webpack", "</p>"], " ");
    return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
