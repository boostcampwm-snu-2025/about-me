window.addEventListener("DOMContentLoaded", () => {
            const header = document.getElementById("main-header");
            if (header) {
                // 약간의 지연을 두고 애니메이션 시작
                setTimeout(() => {
                    header.classList.add("show");
                }, 170);
            }
        });