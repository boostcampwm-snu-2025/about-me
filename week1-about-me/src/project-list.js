const PROJECTS = [
  {
    title: "인턴하샤",
    timeline: "2024년 12월 ~ 2025년 7월",
    position: "PM, 기획영업, 프론트엔드",
    introduce:
      "서울대학교 학생과 스타트업 인턴을 매칭하는 서비스입니다. 사전 예약자 100명을 모았으나 스타트업 인턴을 원하는 수요가 적어 프로젝트를 중단하였습니다.",
    links: {
      github: "https://github.com/wafflestudio/internhasha-web",
      presentation:
        "https://drive.google.com/file/d/1vC4KNs5Hsb6nfkcpmReEgIr9atOR946F/view?usp=sharing",
    },
    technologies: [
      "React",
      "TypeScript",
      "Tailwindcss",
      "TanStack Query",
      "CloudFront",
      "S3",
    ],
  },
  {
    title: "키워드 및 이상형 기반 애니메이션 캐릭터 추천",
    timeline: "2024년 여름",
    position: "팀장, 프론트엔드, 디자인",
    introduce:
      "SKYST 2기 해커톤에서 제작한 프로젝트로, 총 100명 중 2등상을 수상하였습니다. 자신의 이상형과 똑닮은 애니메이션 캐릭터 또는 버츄얼 유튜버를 소개합니다. 서로 다른 차원에서의 사랑을 경험해보세요. ",
    links: {
      github: "https://github.com/Pironeer-APP/Pironeer_Attend_Web_Client",
      presentation:
        "https://drive.google.com/file/d/1WSwTzz_1GWgSoMKOv0_UJwrBAad-2TXB/view?usp=drive_link",
      demo: "https://youtube.com/shorts/PF1ulFbeA2s?si=v9wPH183NkQVmt6W",
    },
    technologies: ["React", "JavaScript", "CSS Module"],
  },
  {
    title: "쉐낏투유",
    timeline: "2025년 여름",
    position: "프론트엔드",
    introduce:
      'SKYST 3기 해커톤에서 제작한 프로젝트로, 총 100명 중 3등상을 수상하였습니다. 신해철의 "그대에게"에 어울리는 서비스를 개발하는 것이 해커톤의 주제였습니다. "그대에게"가 표현하는 청춘의 열정, 응원을 서비스로 표현하였습니다. 각 대학별로 그대에게 리듬에 맞춰 핸드폰을 흔들면 학교별 점수가 집계되는 학교 대항 리듬게임을 개발하였습니다.',
    links: {
      github:
        "https://github.com/hwanheejung/yonsei-milk-waffle-web?tab=readme-ov-file",
    },
    technologies: ["React", "TypeScript", "Tailwindcss", "Vercel"],
  },
  {
    title: "동아리 출석 및 과제 확인 웹사이트",
    timeline: "2024년 6월",
    position: "프론트엔드, 디자인",
    introduce:
      "동아리 세션 진행 시 출석 코드를 사용하여 간편하게 출석을 확인할 수 있도록 하였습니다. 이와 함께 현재까지의 출결 및 과제 채점 결과를 확인할 수 있도록 하였습니다.",
    links: {
      github: "https://github.com/Pironeer-APP/Pironeer_Attend_Web_Client",
    },
    technologies: ["React", "JavaScript", "Styled Component"],
  },
];

const linkTypeMap = {
  github: "깃허브",
  presentation: "발표 자료",
  demo: "데모",
  website: "웹사이트",
};

const container = document.getElementById("project-container");

const createProjectCard = (project, index) => {
  const delayClass = `delay-${Math.min(index + 1, 6)}`;

  const linksHTML = Object.entries(project.links)
    .filter(([_, url]) => url.trim().length !== 0)
    .map(([type, url]) => {
      const linkText = linkTypeMap[type] || type;
      return `<a href="${url}" class="${type}-link button" target="_blank" norefferer>${linkText}</a>`;
    })
    .join("");

  const techHTML = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  return `
        <div class="fade-in-element ${delayClass}">
            <div class="project-card">
                <div class="project-title-wrapper">
                    <h4 class="project-title">${project.title}</h4>
                    <span class="project-timeline">${project.timeline}</span>
                    <span class="project-position">${
                      project.position
                    }</span>           
                    <div class="project-link">
                        ${linksHTML}
                    </div>
                </div>
                <div class="project-introduce-section">
                    <span class="font-bold">소개</span>
                    <p class="project-introduce">${project.introduce}</p>
                </div>
                ${techHTML ? `<div class="project-tech">${techHTML}</div>` : ""}
            </div>
        </div>
    `;
};

const renderProjects = () => {
  const projectsHTML = PROJECTS.map((project, index) =>
    createProjectCard(project, index)
  ).join("");

  container.innerHTML = projectsHTML;
};

renderProjects();
