/* PhotoOverlay.js */

import "./PhotoOverlay.css";

import catImage from "../../images/angry_cat.webp";

const PhotoOverlay = () => {
  return /* html */ `
    <div class="photo-overlay__container">
      <img class="photo-overlay__image" src=${catImage} alt="고양이!" />
      <span class="photo-overlay__text">귀여운 고양이 사진을 드립니다!</span>
    </div>
  `;
};

export default PhotoOverlay;
