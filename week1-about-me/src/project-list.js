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
      return `<a href="${url}" class="${type}-link button" target="_blank">${linkText}</a>`;
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
