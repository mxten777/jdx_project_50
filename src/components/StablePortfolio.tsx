import React, { useState } from 'react';
import { ExternalLink, Github, Mail, MapPin, User, Code } from 'lucide-react';

// 간단하고 깔끔한 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "E-커머스 플랫폼",
    description: "React와 Node.js로 구축한 현대적인 온라인 쇼핑몰",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop&q=80",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "팀 협업 도구",
    description: "실시간 채팅과 프로젝트 관리를 위한 협업 플랫폼",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&q=80",
    tech: ["Vue.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "데이터 대시보드",
    description: "비즈니스 인텔리전스를 위한 인터랙티브 대시보드",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&q=80",
    tech: ["Python", "FastAPI", "React"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 4,
    title: "모바일 앱",
    description: "React Native로 개발한 크로스플랫폼 모바일 앱",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop&q=80",
    tech: ["React Native", "Firebase"],
    github: "#",
    demo: "#",
    featured: false
  }
];

const skills = {
  "Frontend": ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  "Mobile": ["React Native", "Flutter"],
  "Tools": ["Git", "Docker", "AWS", "Figma"]
};

export const StablePortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-gray-900">김개발</h1>
            <nav className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm">소개</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 text-sm">프로젝트</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm">연락처</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 소개 */}
      <section id="about" className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              사용자 경험을 중시하며 확장 가능한 웹 애플리케이션을 개발하는 
              <span className="font-semibold text-blue-600"> 5년차 개발자</span>입니다.
            </p>
            <div className="flex justify-center space-x-6 text-gray-600">
              <span className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                서울, 한국
              </span>
              <span className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm">
                <Mail className="w-4 h-4 mr-2 text-purple-500" />
                dev@example.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 스킬 */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">기술 스택</h3>
            <p className="text-gray-600">다양한 기술로 풀스택 개발을 진행합니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, skillList], index) => {
              const colors = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-emerald-600', 
                'from-purple-500 to-violet-600',
                'from-orange-500 to-red-600'
              ];
              const bgColors = [
                'bg-blue-50 border-blue-200',
                'bg-green-50 border-green-200',
                'bg-purple-50 border-purple-200', 
                'bg-orange-50 border-orange-200'
              ];
              return (
                <div key={category} className={`${bgColors[index]} rounded-xl p-4 border hover:shadow-md transition-all`}>
                  <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${colors[index]} rounded-lg mb-3`}>
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">{category}</h4>
                  <div className="space-y-2">
                    {skillList.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                        <span className="text-xs text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 프로젝트 */}
      <section id="projects" className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-lg font-bold text-center mb-6 text-gray-900">주요 프로젝트</h3>
          
          {/* 필터 */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  filter === "all" 
                    ? "bg-white text-gray-900 shadow-sm" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                전체
              </button>
              <button
                onClick={() => setFilter("featured")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  filter === "featured" 
                    ? "bg-white text-gray-900 shadow-sm" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                주요
              </button>
            </div>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs rounded-full font-medium z-10 shadow-lg">
                        ⭐ 주요 프로젝트
                      </div>
                    )}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => {
                        const techColors = [
                          'bg-blue-100 text-blue-700 border-blue-200',
                          'bg-green-100 text-green-700 border-green-200',
                          'bg-purple-100 text-purple-700 border-purple-200'
                        ];
                        return (
                          <span 
                            key={tech}
                            className={`${techColors[techIndex % 3]} px-3 py-1 rounded-full text-xs font-medium border`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={project.demo}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        라이브 데모
                      </a>
                      <a 
                        href={project.github}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center border border-gray-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        소스코드
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section id="contact" className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">함께 일해요!</h3>
            <p className="text-blue-100 mb-8 text-lg">
              새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요. 
              <br />빠른 시일 내에 답변 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:dev@example.com"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                이메일 보내기
              </a>
              <a 
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/30 flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={selectedProject.demo}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  라이브 데모 보기
                </a>
                <a 
                  href={selectedProject.github}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
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