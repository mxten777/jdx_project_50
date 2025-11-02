import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, MapPin, Mail, Award } from 'lucide-react';

// 실제 포트폴리오 데이터
const personalInfo = {
  name: "김개발",
  title: "Full Stack Developer",
  location: "서울, 대한민국",
  email: "dev@example.com",
  phone: "+82-10-1234-5678",
  website: "https://portfolio.com",
  github: "https://github.com/username",
  bio: "5년차 풀스택 개발자로, 사용자 경험을 중시하며 효율적이고 확장 가능한 웹 애플리케이션을 개발합니다. React, Node.js, Python 기반의 다양한 프로젝트 경험이 있습니다."
};

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"],
  "Backend": ["Node.js", "Python", "Express", "FastAPI", "Django", "PostgreSQL"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Nginx", "Linux", "Git"],
  "Tools": ["VS Code", "Figma", "Notion", "Slack", "Jira", "Postman"]
};

const projects = [
  {
    id: 1,
    title: "E-커머스 플랫폼",
    description: "Next.js와 Stripe을 활용한 현대적인 온라인 쇼핑몰. 관리자 대시보드, 실시간 주문 추적, 결제 시스템을 포함한 풀스택 솔루션입니다.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true,
    year: "2024",
    status: "완료",
    highlights: ["월 1000+ 주문 처리", "99.9% 업타임", "모바일 최적화"]
  },
  {
    id: 2,
    title: "팀 협업 도구",
    description: "Slack과 Notion을 결합한 형태의 팀 협업 플랫폼. 실시간 채팅, 프로젝트 관리, 파일 공유 기능을 통합했습니다.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    github: "https://github.com/example/collaboration",
    demo: "https://collab-demo.com",
    featured: true,
    year: "2024",
    status: "완료",
    highlights: ["100+ 동시 사용자", "실시간 동기화", "파일 드래그앤드롭"]
  },
  {
    id: 3,
    title: "데이터 분석 대시보드",
    description: "비즈니스 인텔리전스를 위한 인터랙티브 대시보드. Chart.js와 D3.js를 활용한 다양한 데이터 시각화를 제공합니다.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    techStack: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
    github: "https://github.com/example/dashboard",
    demo: "https://dashboard-demo.com",
    featured: false,
    year: "2023",
    status: "완료",
    highlights: ["실시간 데이터 업데이트", "커스텀 차트", "PDF 리포트 생성"]
  },
  {
    id: 4,
    title: "AI 챗봇 서비스",
    description: "OpenAI API를 활용한 고객 상담 챗봇. 자연어 처리와 머신러닝을 통해 고객 문의를 자동으로 분류하고 응답합니다.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
    techStack: ["React", "OpenAI API", "Node.js", "Docker", "AWS"],
    github: "https://github.com/example/chatbot",
    demo: "https://chatbot-demo.com",
    featured: false,
    year: "2023",
    status: "완료",
    highlights: ["95% 문의 자동 해결", "다국어 지원", "학습 알고리즘"]
  },
  {
    id: 5,
    title: "부동산 매물 플랫폼",
    description: "지도 기반 부동산 검색 서비스. Kakao Map API와 연동하여 위치 기반 매물 검색과 가격 비교 기능을 제공합니다.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
    techStack: ["React", "Kakao Map API", "Express", "MySQL", "AWS S3"],
    github: "https://github.com/example/realestate",
    demo: "https://realestate-demo.com",
    featured: false,
    year: "2022",
    status: "완료",
    highlights: ["10만+ 매물 데이터", "지도 클러스터링", "가격 예측 모델"]
  },
  {
    id: 6,
    title: "블로그 CMS",
    description: "개발자를 위한 마크다운 기반 블로그 플랫폼. 코드 하이라이팅, 태그 시스템, SEO 최적화 기능을 포함합니다.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c86884?w=600&h=400&fit=crop&q=80",
    techStack: ["Next.js", "MDX", "Prisma", "SQLite", "Vercel"],
    github: "https://github.com/example/blog",
    demo: "https://blog-demo.com",
    featured: false,
    year: "2022",
    status: "진행중",
    highlights: ["마크다운 에디터", "자동 배포", "SEO 스코어링"]
  }
];

const experience = [
  {
    company: "테크 스타트업",
    position: "Senior Full Stack Developer",
    period: "2022.03 - 현재",
    description: "React/Node.js 기반의 B2B SaaS 플랫폼 개발 리드. 사용자 수 10배 증가 및 서버 응답 속도 50% 개선 달성.",
    achievements: ["신규 기능 개발 리드", "코드 리뷰 프로세스 구축", "주니어 개발자 멘토링"]
  },
  {
    company: "웹 에이전시",
    position: "Frontend Developer",
    period: "2020.01 - 2022.02",
    description: "다양한 클라이언트의 웹사이트 및 웹앱 개발. React, Vue.js를 활용한 20+ 프로젝트 완성.",
    achievements: ["반응형 웹 전문화", "성능 최적화 경험", "클라이언트 직접 소통"]
  }
];

export const CleanPortfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ["all", "featured", "web", "mobile", "backend"];
  
  const filteredProjects = projects.filter(project => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return project.featured;
    return project.techStack.some(tech => 
      selectedCategory === "web" ? ["React", "Vue.js", "Next.js"].includes(tech) :
      selectedCategory === "mobile" ? ["React Native", "Flutter"].includes(tech) :
      selectedCategory === "backend" ? ["Node.js", "Python", "FastAPI"].includes(tech) : false
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">소개</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">프로젝트</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">경력</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">연락처</a>
            </div>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{personalInfo.title}</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{personalInfo.bio}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </span>
              <a href={personalInfo.github} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 스킬 섹션 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">기술 스킬</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">주요 프로젝트</h3>
          
          {/* 카테고리 필터 */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {category === "all" ? "전체" : 
                   category === "featured" ? "주요" :
                   category === "web" ? "웹" :
                   category === "mobile" ? "모바일" : "백엔드"}
                </button>
              ))}
            </div>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="bg-yellow-400 text-black px-3 py-1 text-sm font-medium">
                    주요 프로젝트
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-gray-400 text-sm">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.demo}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      데모
                    </a>
                    <a 
                      href={project.github}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 경력 섹션 */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">경력</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                    <p className="text-lg text-blue-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 flex items-center gap-2 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <Award className="w-4 h-4 text-green-500" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">연락하기</h3>
          <p className="text-xl text-gray-600 mb-8">새로운 기회나 협업에 대해 언제든지 연락해주세요!</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              이메일 보내기
            </a>
            <a 
              href={personalInfo.github}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center gap-3"
            >
              <Github className="w-5 h-5" />
              GitHub 보기
            </a>
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">기술 스택</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">주요 성과</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <Award className="w-4 h-4 text-green-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.demo}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  라이브 데모 보기
                </a>
                <a 
                  href={selectedProject.github}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  소스코드 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};