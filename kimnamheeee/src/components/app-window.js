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
  }

  open () {
    this.inner.style.display = 'block';
  }
  
  close () {
    this.inner.style.display = 'none';
    this.dispatchEvent(new CustomEvent('window-close'));
  }
}

customElements.define('app-window', Window);

export default Window;