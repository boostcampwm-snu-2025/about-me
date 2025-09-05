class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="components/app-button.css">
      <button class="button">
        <div class="button-content">
          <img class="button-icon" src="" alt="" style="display: none;">
          <div class="button-text">
            <slot></slot>
          </div>
        </div>
      </button>
    `;
    
    this.addEventListener('click', this.handleClick.bind(this));
  }

  static get observedAttributes() { return ['type', 'src', 'size']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if ((name === 'type' || name === 'src') && oldValue !== newValue) {
      this.updateIcon();
    }
    if (name === 'size' && oldValue !== newValue) {
      this.updateSize(newValue);
    }
  }

  updateSize(newValue) {
    const button = this.shadowRoot.querySelector('.button');
    const text = this.shadowRoot.querySelector('.button-text');
    switch (newValue) {
      case 'sm':
        button.style.minWidth = '135px';
        button.style.height = '40px';
        text.style.fontSize = '20px';
        break;
      case 'md':
        button.style.minWidth = '153px';
        button.style.height = '52px';
        text.style.fontSize = '24px';
        break;
    }
  }

  updateIcon() {
    const icon = this.shadowRoot.querySelector('.button-icon');
    const type = this.getAttribute('type');
    if (type === 'image') {
      const iconSize = this.getAttribute('size');
      const src = this.getAttribute('src');
      if (src) {
        switch (iconSize) {
          case 'sm':
            icon.style.width = '40px';
            icon.style.height = '40px';
            break;
          case 'md':
            icon.style.width = '52px';
            icon.style.height = '52px';
            break;
        }
        icon.src = src;
        icon.style.display = 'inline-block';
      }
    } else {
      icon.style.display = 'none';
    }
  }
  
  handleClick() {
    const button = this.shadowRoot.querySelector('.button');
    button.classList.toggle('selected');
    
    this.dispatchEvent(new CustomEvent('button-click'));
  }
}

customElements.define('app-button', Button);

export default Button;
