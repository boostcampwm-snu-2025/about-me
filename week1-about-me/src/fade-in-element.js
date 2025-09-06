// components/fade-in-element/FadeInElement.js
import { createObserver } from "./utils/create-observer.js";

class FadeInElement extends HTMLElement {
  // 기본 설정값들
  static get defaults() {
    return {
      delay: "0",
    };
  }

  // 지원하는 모든 속성들
  static get observedAttributes() {
    return ["delay"];
  }

  constructor() {
    super();

    // 내부 상태
    this._observer = null;
    this._isVisible = false;
    this._isInitialized = false;

    // 바인딩
    this._handleVisible = this._handleVisible.bind(this);
    this._handleInvisible = this._handleInvisible.bind(this);
  }

  // ===========================================
  // Lifecycle Methods
  // ===========================================

  // DOM에 삽입 될 때 실행
  // 렌더링, 이벤트 등록, 데이터 로드 등 실행
  connectedCallback() {
    if (!this._isInitialized) {
      this._init();
      this._isInitialized = true;
    }
  }

  // DOM에서 제거될 때 실행
  // 클린업 함수 삽입
  disconnectedCallback() {
    this._cleanup();
  }

  // 관찰 중인 속성이 변경될 때
  // UI 업데이트
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (this._isInitialized) {
      this._handleAttributeChange(name, newValue);
    }
  }

  // ===========================================
  // Private Methods
  // ===========================================

  // connectedCallback 시 실행
  _init() {
    this._setupAnimation(); // 클래스 변경 -> 애니메이션 적용
    this._setupIntersectionObserver(); // observer 활성화
    this._dispatchEvent("initialized"); // 이벤트 적용
  }

  _setupAnimation() {
    // 초기 상태 설정
    this._removeDelayClasses();
    this.classList.remove("visible");

    // delay 클래스 추가
    const delay = this._getAttributeWithDefault("delay");
    if (delay !== "0") {
      this.classList.add(`delay-${delay}`);
    }
  }

  _setupIntersectionObserver() {
    this._cleanup();
    this._observer = createObserver(this._handleVisible, this._handleInvisible);
    this._observer.observe(this);
  }

  _handleVisible(entry) {
    if (this._isVisible) {
      return;
    }

    this._isVisible = true;
    this.classList.add("visible");
    this._dispatchEvent("fadein", { entry });
  }

  _handleInvisible(entry) {
    if (!this._isVisible) return;

    this._isVisible = false;
    this.classList.remove("visible");
    this._dispatchEvent("fadeout", { entry });

    // observer를 다시 관찰 상태로 만들어서 다시 들어올 때 애니메이션 실행
    if (this._observer) {
      this._observer.observe(this);
    }
  }

  // disconnectedCallback에서 실행
  _cleanup() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  }

  // attributeChangedCallback에서 실행
  _handleAttributeChange() {
    this._setupAnimation();
  }

  // 기타 유틸성 함수
  _removeDelayClasses() {
    this.className = this.className.replace(/\bdelay-\d+\b/g, "").trim();
  }

  _getAttributeWithDefault(name) {
    return this.getAttribute(name) || FadeInElement.defaults[name];
  }

  _dispatchEvent(type, detail = {}) {
    this.dispatchEvent(
      new CustomEvent(type, {
        detail: { element: this, ...detail },
        bubbles: true,
        cancelable: true,
      })
    );
  }
}

// Custom Element 등록
customElements.define("fade-in-element", FadeInElement);
