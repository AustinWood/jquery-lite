window.$l = arg => {
  if (typeof(arg) === 'string') {
    return getNodesFromDom(arg);
  }
};

function getNodesFromDom(selector) {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return nodesArray;
}
