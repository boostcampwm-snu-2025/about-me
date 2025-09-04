/**
 * 자기소개 페이지의 동적 기능을 관리하는 JavaScript 파일
 * 타이핑 애니메이션과 소개글 변경 기능을 포함
 */

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 타이핑 애니메이션 초기화
    initializeTypingAnimation();
    
    // 소개글 변경 버튼 기능 초기화
    initializeIntroChanger();
    
    // 부드러운 스크롤 기능 초기화
    initializeSmoothScroll();
    
    console.log('자기소개 페이지 JavaScript가 성공적으로 로드되었습니다.');
});

/**
 * 타이핑 애니메이션을 초기화하는 함수
 * 이름을 한 글자씩 타이핑하듯이 표시
 */
function initializeTypingAnimation() {
    const typingElement = document.getElementById('typing-name');
    const name = '최승민'; // 타이핑될 이름
    let currentIndex = 0;
    
    // 초기에는 빈 문자열
    typingElement.textContent = '';
    
    /**
     * 타이핑 효과를 생성하는 내부 함수
     */
    function typeWriter() {
        if (currentIndex < name.length) {
            typingElement.textContent += name.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, 200); // 200ms 간격으로 타이핑
        } else {
            // 타이핑 완료 후 커서 깜빡임 효과 유지
            typingElement.classList.add('typing-complete');
        }
    }
    
    // 1초 후 타이핑 시작
    setTimeout(typeWriter, 1000);
}

/**
 * 소개글 변경 기능을 초기화하는 함수
 * 버튼 클릭 시 다양한 소개 메시지를 순환 표시
 */
function initializeIntroChanger() {
    const changeButton = document.getElementById('changeIntroBtn');
    const introText = document.getElementById('dynamic-intro');
    
    // 다양한 소개 메시지 배열
    const introMessages = [
        '서울대학교 전기정보공학부 4학년 재학중이며,<br>2026 Fall cycle EECS PhD 지원을 준비하고 있습니다.',
        '머신러닝과 컴퓨터 시스템에 관심이 많고,<br>새로운 기술을 배우는 것을 좋아합니다.',
        '문제 해결을 통해 세상을 더 나은 곳으로 만들고 싶은<br>예비 연구자입니다.',
        '코딩과 연구를 통해 혁신적인 솔루션을 만들어가는<br>개발자이자 연구자가 되고 싶습니다.'
    ];
    
    let currentMessageIndex = 0;
    
    /**
     * 소개 메시지를 변경하는 함수
     */
    function changeIntroMessage() {
        // 페이드 아웃 효과
        introText.style.opacity = '0';
        
        setTimeout(() => {
            currentMessageIndex = (currentMessageIndex + 1) % introMessages.length;
            introText.innerHTML = introMessages[currentMessageIndex];
            
            // 페이드 인 효과
            introText.style.opacity = '1';
        }, 300);
    }
    
    // 버튼 클릭 이벤트 리스너 추가
    changeButton.addEventListener('click', changeIntroMessage);
    
    // 초기 CSS 전환 효과 설정
    introText.style.transition = 'opacity 0.3s ease-in-out';
}

/**
 * Function to initialize smooth scroll functionality for navigation links
 */
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Execute smooth scroll
                smoothScrollToElement(targetSection);
            }
        });
    });
}

/**
 * Function to smoothly scroll to specified element
 * @param {Element} targetElement - Target element to scroll to
 */
function smoothScrollToElement(targetElement) {
    const headerHeight = 80; // Fixed header height
    const targetPosition = targetElement.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}