const DomNodeCollection = require("./dom_node_collection");

window.$l = arg => {
  if (typeof(arg) === 'string') {
    return getNodesFromDom(arg);
  } else if (arg instanceof HTMLElement) {
    return new DomNodeCollection([arg]);
  }
};

function getNodesFromDom(selector) {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new DomNodeCollection(nodesArray);
}
