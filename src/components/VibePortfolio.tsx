import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "🚀 AI-Powered SaaS Platform",
    description: "혁신적인 AI 기반 비즈니스 자동화 플랫폼 - 사용자 생산성 300% 향상",
    tech: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com/vibecoding",
    demo: "https://ai-saas-demo.com",
    featured: true,
    mvpNumber: "MVP #001"
  },
  {
    id: 2,
    title: "🎯 Real-time Analytics Dashboard",
    description: "실시간 데이터 분석과 비즈니스 인텔리전스를 위한 프리미엄 대시보드",
    tech: ["Vue.js", "D3.js", "Python", "Redis"],
    github: "https://github.com/vibecoding",
    demo: "https://analytics-demo.com",
    featured: true,
    mvpNumber: "MVP #002"
  },
  {
    id: 3,
    title: "🌐 Next-Gen E-Commerce Engine",
    description: "차세대 전자상거래 엔진 - 컨버전율 250% 증가 검증완료",
    tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
    github: "https://github.com/vibecoding",
    demo: "https://ecommerce-demo.com",
    featured: true,
    mvpNumber: "MVP #003"
  },
  {
    id: 4,
    title: "🤖 Smart Automation Suite",
    description: "비즈니스 프로세스 스마트 자동화 - 인건비 60% 절감 달성",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes"],
    github: "https://github.com/vibecoding",
    demo: "https://automation-demo.com",
    featured: true,
    mvpNumber: "MVP #004"
  },
  {
    id: 5,
    title: "📱 Cross-Platform Mobile App",
    description: "크로스플랫폼 모바일 앱 - 앱스토어 4.9점 평점 기록",
    tech: ["React Native", "Firebase", "GraphQL"],
    github: "https://github.com/vibecoding",
    demo: "https://mobile-demo.com",
    featured: false,
    mvpNumber: "MVP #005"
  },
  {
    id: 6,
    title: "🔐 Blockchain Security Platform",
    description: "블록체인 기반 보안 플랫폼 - 해킹 시도 0건 달성",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    github: "https://github.com/vibecoding",
    demo: "https://blockchain-demo.com",
    featured: false,
    mvpNumber: "MVP #006"
  }
];

const skills = {
  "🎨 Frontend Mastery": ["React 19", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
  "⚡ Backend Power": ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  "☁️ Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Serverless"],
  "🚀 AI & Innovation": ["OpenAI API", "TensorFlow", "LangChain", "Vector DB", "RAG"]
};

export const VibePortfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-3xl">🎵</span>
            <span>VIBE CODING</span>
          </div>
          
          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex gap-8 text-base">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">소개</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">기술</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">프로젝트</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">연락처</a>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1"
            aria-label="메뉴 열기"
          >
            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></div>
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-60 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-20 right-4 bg-white rounded-xl py-4 min-w-[200px] shadow-xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { href: "#about", icon: "📖", label: "소개" },
              { href: "#skills", icon: "🛠️", label: "기술 스택" },
              { href: "#projects", icon: "🌟", label: "프로젝트" },
              { href: "#contact", icon: "📧", label: "연락처" }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors ${
                  index < 3 ? 'border-b border-gray-100' : ''
                }`}
              >
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 히어로 섹션 */}
      <section id="about" className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8 border border-white border-opacity-20">
            <span className="text-xl sm:text-2xl mr-2">🎵</span>
            <span className="text-sm sm:text-base font-semibold tracking-wider">VIBE CODING</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            MVP Universe Developer
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 opacity-95 font-light">
            "40개의 별, 한 바퀴의 여정. 당신의 아이디어가 빛나는 순간."
          </p>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            혁신의 궤도를 돌며 사용자 경험을 최우선으로 생각하는 개발자입니다.
            <br className="hidden sm:block" />
            <strong>40개의 MVP</strong>를 통해 검증된 기술력으로 당신의 비전을 현실로 만들어갑니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">🌟</span>
              <span>MVP 40개 완성</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">📍</span>
              <span>Seoul, Korea</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">💎</span>
              <span>Premium Quality</span>
            </span>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section id="skills" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              🛠️ Tech Arsenal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              40개 MVP를 통해 검증된 최신 기술 스택으로 당신의 비전을 구현합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
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

      {/* 프로젝트 */}
      <section id="projects" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              🌟 MVP Universe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              혁신의 궤도를 돌며 탄생한 검증된 MVP들 - 각각이 특별한 가치를 창출합니다
            </p>
          </div>
          
          {/* 필터 */}
          <div className="flex justify-center mb-8 gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              전체 프로젝트
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                filter === "featured"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              주요 프로젝트
            </button>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    {project.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                        ⭐ FEATURED
                      </div>
                    )}
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-xl text-xs font-semibold ml-auto">
                      {project.mvpNumber}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      라이브 데모
                    </a>
                    <a
                      href={project.github}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section id="contact" className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white border-opacity-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              🚀 다음 MVP는 당신과 함께
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              혁신의 궤도에서 만날 다음 프로젝트를 기다리고 있습니다.
              <br className="hidden sm:block" />
              당신의 아이디어가 빛나는 순간을 함께 만들어보세요.
            </p>
            
            <div className="text-sm opacity-80 mb-8">
              💎 Premium Quality · 🎵 Vibe Coding · 🌟 MVP Specialist
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:dev@example.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                📧 이메일 보내기
              </a>
              <a
                href="https://github.com"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white border-opacity-30"
              >
                💼 GitHub 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 모달 */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              {selectedProject.title}
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedProject.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">사용 기술</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={selectedProject.demo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                라이브 데모 보기
              </a>
              <a
                href={selectedProject.github}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                GitHub 소스코드
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};