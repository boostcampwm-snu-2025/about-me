// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // message 요소를 찾기
    const messageElement = document.getElementById('message');
    
    // Hello World 메시지 추가
    messageElement.textContent = 'Hello World!';
    
    // 추가적인 스타일링 효과
    messageElement.style.opacity = '0';
    messageElement.style.transition = 'opacity 1s ease-in-out';
    
    // 페이드인 효과
    setTimeout(() => {
        messageElement.style.opacity = '1';
    }, 500);
    
    // 콘솔에도 메시지 출력
    console.log('Hello World! JavaScript가 성공적으로 실행되었습니다.');
});
