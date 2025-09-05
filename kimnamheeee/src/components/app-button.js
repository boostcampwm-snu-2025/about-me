class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="components/app-button.css">
      <button class="button">
        <div class="button-text">
          <slot></slot>
        </div>
      </button
    `;
    
    this.addEventListener('click', this.handleClick.bind(this));
  }
  
  handleClick() {
    const button = this.shadowRoot.querySelector('.button');
    button.classList.toggle('selected');
    
    this.dispatchEvent(new CustomEvent('button-click'));
  }
}

customElements.define('app-button', Button);

export default Button;