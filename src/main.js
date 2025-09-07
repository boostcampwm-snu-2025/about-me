// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // Hello World 문자열을 동적으로 추가
    const dynamicContent = document.getElementById('dynamic-content');
    
    // 새로운 paragraph 요소 생성
    const helloElement = document.createElement('p');
    helloElement.textContent = 'Hello World! 🌍';
    helloElement.style.fontSize = '24px';
    helloElement.style.color = '#007bff';
    helloElement.style.fontWeight = 'bold';
    helloElement.style.textAlign = 'center';
    helloElement.style.marginTop = '20px';
    
    // 요소를 페이지에 추가
    dynamicContent.appendChild(helloElement);
    
    console.log('Hello World가 성공적으로 추가되었습니다!');
});