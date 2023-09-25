class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
 
  render() {
    this.innerHTML = `<h2>Club Finder</h2>`;
  }
}
 
customElements.define('nav-bar', NavBar);