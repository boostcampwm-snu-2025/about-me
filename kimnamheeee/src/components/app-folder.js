class Folder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="components/app-folder.css">
      <div class="folder">
        <img src="" alt="folder icon" class="icon" width="80px" height="80px">
        <slot></slot>
      </div>
    `;
    this.icon = this.shadowRoot.querySelector('.icon');
    this.updateIcon();
  }

  static get observedAttributes() { return ['src', 'mode']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && oldValue !== newValue) this.updateIcon();
    if (name === 'mode' && oldValue !== newValue) this.updateMode(newValue);
  }

  updateIcon() {
    this.icon.src = this.getAttribute('src');
  }

  updateMode(value) {
    const folder = this.shadowRoot.querySelector('.folder');
    if (value === 'light') {
      folder.style.color = 'var(--color-black)';
    } else if (value === 'dark') {
      folder.style.color = 'var(--color-white)';
    }
  }
}

customElements.define('app-folder', Folder);

export default Folder;