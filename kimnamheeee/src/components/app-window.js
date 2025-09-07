class Window extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="components/app-window.css">
      <div class="window">
        <div class="window-header">
          <div class="window-title">
            <slot name="title"></slot>
          </div>
          <div class="window-controls">
            <slot name="controls"></slot>
          </div>
        </div>
        <div class="window-content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
    this.inner = this.shadowRoot.querySelector('.window');
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  connectedCallback() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (!this.contains(e.target)) {
      this.close();
    }
  }

  open () {
    this.inner.style.display = 'flex';
  }
  
  close () {
    this.inner.style.display = 'none';
  }
}

customElements.define('app-window', Window);

export default Window;