import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, Code, Star } from 'lucide-react';

// 실제 포트폴리오 프로젝트 데이터
const portfolioProjects = [
  {
    id: 1,
    title: "AI 챗봇 플랫폼",
    description: "OpenAI API를 활용한 맞춤형 챗봇 서비스로 고객 상담을 자동화하고 24/7 지원을 제공합니다.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&q=80",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB"],
    year: 2024,
    category: "AI/ML",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "실시간 협업 툴",
    description: "팀 프로젝트를 위한 실시간 협업 플랫폼으로 문서 공유와 화상회의를 통합했습니다.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&q=80",
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    year: 2024,
    category: "Web App",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: true,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "E-커머스 솔루션",
    description: "현대적인 온라인 쇼핑몰 플랫폼으로 결제, 재고관리, 분석 기능을 포함합니다.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&q=80",
    techStack: ["Vue.js", "Express", "Stripe", "AWS"],
    year: 2023,
    category: "E-commerce",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: false,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "데이터 시각화 대시보드",
    description: "비즈니스 인텔리전스를 위한 인터랙티브 대시보드로 실시간 데이터 분석을 지원합니다.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&q=80",
    techStack: ["React", "D3.js", "Python", "FastAPI"],
    year: 2023,
    category: "Dashboard",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: true,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "모바일 헬스케어 앱",
    description: "건강 관리를 위한 모바일 애플리케이션으로 운동, 식단, 수면 패턴을 추적합니다.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&q=80",
    techStack: ["React Native", "Firebase", "TensorFlow"],
    year: 2023,
    category: "Mobile",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: false,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    title: "블록체인 DApp",
    description: "탈중앙화 애플리케이션 프로토타입으로 스마트 컨트랙트와 Web3 통합을 구현했습니다.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&q=80",
    techStack: ["React", "Solidity", "Web3.js", "Ethereum"],
    year: 2022,
    category: "Blockchain",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: false,
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 7,
    title: "IoT 모니터링 시스템",
    description: "스마트 홈을 위한 IoT 디바이스 모니터링 및 제어 시스템입니다.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&q=80",
    techStack: ["Python", "MQTT", "InfluxDB", "Grafana"],
    year: 2022,
    category: "IoT",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: false,
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 8,
    title: "게임 개발 플랫폼",
    description: "2D 게임 개발을 위한 웹 기반 게임 엔진과 에디터를 구현했습니다.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop&q=80",
    techStack: ["TypeScript", "WebGL", "Canvas API", "Node.js"],
    year: 2022,
    category: "Gaming",
    github: "https://github.com/sample",
    demo: "https://demo.com",
    featured: false,
    color: "from-pink-500 to-rose-600"
  }
];

export const Portfolio3D: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 마우스 이동 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>

      {/* 헤더 */}
      <header className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            3D 포트폴리오 갤러리
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            마우스를 움직여 3D 공간을 탐험하고, 프로젝트 카드를 클릭해보세요
          </p>
        </div>
      </header>

      {/* 3D 갤러리 컨테이너 */}
      <main 
        ref={containerRef}
        className="relative z-10 p-8 min-h-[80vh] flex items-center justify-center"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          style={{
            transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
          }}
        >
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredCard === index ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: `
                  translateZ(${hoveredCard === index ? '100px' : '0px'})
                  rotateY(${(index % 4 - 1.5) * 10}deg)
                  rotateX(${Math.sin(index * 0.5) * 5}deg)
                `,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* 카드 */}
              <div className={`
                relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden
                border border-white/20 shadow-2xl
                transform transition-all duration-500
                ${hoveredCard === index ? 'scale-105 shadow-3xl' : 'scale-100'}
                ${project.featured ? 'ring-2 ring-yellow-400/50' : ''}
              `}>
                {/* Featured 배지 */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                )}

                {/* 프로젝트 이미지 */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* 카드 내용 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                {selectedProject.featured && (
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                )}
              </div>
              
              <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    기술 스택
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">프로젝트 정보</h4>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="text-purple-300">카테고리:</span> {selectedProject.category}</p>
                    <p><span className="text-purple-300">년도:</span> {selectedProject.year}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.demo}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  라이브 데모 보기
                </a>
                <a 
                  href={selectedProject.github}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};