class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  each(callback) {
    this.nodes.forEach(callback);
  }

  html(html) {
    if (typeof(html) === 'undefined') {
      return this.nodes[0].innerHTML;
    } else {
      this.each((node) => {
        node.innerHTML = html;
      } );
    }
  }

  empty() {
    this.each((node) => {
      node.innerHTML = "";
    } );
  }

  append() {

  }

  prepend() {

  }
}



module.exports = DomNodeCollection;
