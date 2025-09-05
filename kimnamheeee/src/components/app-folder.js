const ICON_MAP = {
  'default': '/assets/icons/folder-icon.svg',
  'main': '/assets/icons/folder-icon2.svg',
};

class Folder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="components/app-folder.css">
      <div class="folder">
        <img src="" alt="folder icon" class="folder-icon">
        <slot></slot>
      </div>
    `;
    this.icon = this.shadowRoot.querySelector('.folder-icon');
    if (!this.hasAttribute('type')) this.type = 'default';
    this.updateIcon();
  }

  static get observedAttributes() { return ['type']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type' && oldValue !== newValue) this.updateIcon();
  }

  updateIcon() {
    const type = this.type || 'default';
    this.icon.src = ICON_MAP[type]
  }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }
  
}

customElements.define('app-folder', Folder);
