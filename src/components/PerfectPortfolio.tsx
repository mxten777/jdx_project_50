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

export const PerfectPortfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* 헤더 */}
      <header style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '1rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
                    <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.8rem' }}>🎵</span>
            <span>VIBE CODING</span>
          </div>
          {/* 데스크톱 네비게이션 */}
          <nav style={{ 
            display: window.innerWidth < 768 ? 'none' : 'flex', 
            gap: '2rem',
            fontSize: '1rem'
          }}>
            <a href="#about" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}>소개</a>
            <a href="#skills" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}>기술</a>
            <a href="#projects" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}>프로젝트</a>
            <a href="#contact" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}>연락처</a>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: window.innerWidth >= 768 ? 'none' : 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              gap: '4px'
            }}
            aria-label="메뉴 열기"
          >
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#374151',
              transition: 'all 0.3s',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
            }}></div>
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#374151',
              transition: 'all 0.3s',
              opacity: isMobileMenuOpen ? 0 : 1
            }}></div>
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#374151',
              transition: 'all 0.3s',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
            }}></div>
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 60,
            display: window.innerWidth >= 768 ? 'none' : 'block'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: '80px',
              right: '1rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '1rem 0',
              minWidth: '200px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
              border: '1px solid #e5e7eb'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <a 
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                display: 'block',
                padding: '0.75rem 1.5rem', 
                color: '#374151', 
                textDecoration: 'none',
                fontSize: '1rem',
                borderBottom: '1px solid #f3f4f6',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              📖 소개
            </a>
            <a 
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                display: 'block',
                padding: '0.75rem 1.5rem', 
                color: '#374151', 
                textDecoration: 'none',
                fontSize: '1rem',
                borderBottom: '1px solid #f3f4f6',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              🛠️ 기술 스택
            </a>
            <a 
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                display: 'block',
                padding: '0.75rem 1.5rem', 
                color: '#374151', 
                textDecoration: 'none',
                fontSize: '1rem',
                borderBottom: '1px solid #f3f4f6',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              🌟 프로젝트
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                display: 'block',
                padding: '0.75rem 1.5rem', 
                color: '#374151', 
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              📧 연락처
            </a>
          </div>
        </div>
      )}

      {/* 히어로 섹션 */}
      <section id="about" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: window.innerWidth < 768 ? '0 1rem' : '0 2rem' 
        }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.5rem', 
            borderRadius: '50px', 
            marginBottom: window.innerWidth < 768 ? '1.5rem' : '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <span style={{ fontSize: window.innerWidth < 768 ? '1.2rem' : '1.5rem', marginRight: '0.5rem' }}>🎵</span>
            <span style={{ 
              fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem', 
              fontWeight: '600', 
              letterSpacing: '0.1em' 
            }}>VIBE CODING</span>
          </div>
          
          <h1 style={{ 
            fontSize: window.innerWidth < 768 ? '2.5rem' : window.innerWidth < 1024 ? '3rem' : '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem', 
            textShadow: '0 4px 8px rgba(0,0,0,0.2)',
            lineHeight: '1.1'
          }}>
            MVP Universe Developer
          </h1>
          
          <p style={{ 
            fontSize: window.innerWidth < 768 ? '1.1rem' : '1.4rem', 
            marginBottom: '1.5rem', 
            opacity: 0.95, 
            fontWeight: '300',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            lineHeight: '1.4'
          }}>
            "40개의 별, 한 바퀴의 여정. 당신의 아이디어가 빛나는 순간."
          </p>
          
          <p style={{ 
            fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', 
            marginBottom: '2rem', 
            opacity: 0.9, 
            lineHeight: '1.7',
            textAlign: window.innerWidth < 768 ? 'left' : 'center'
          }}>
            혁신의 궤도를 돌며 사용자 경험을 최우선으로 생각하는 개발자입니다.
            {window.innerWidth >= 768 && <br/>}
            <strong>40개의 MVP</strong>를 통해 검증된 기술력으로 당신의 비전을 현실로 만들어갑니다.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: window.innerWidth < 768 ? '1.5rem' : '2.5rem', 
            flexWrap: 'wrap', 
            fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem' }}>🌟</span>
              <span>{window.innerWidth < 768 ? 'MVP 40개' : 'MVP 40개 완성'}</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem' }}>📍</span>
              <span>Seoul, Korea</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem' }}>💎</span>
              <span>Premium Quality</span>
            </span>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section id="skills" style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              🛠️ Tech Arsenal
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              40개 MVP를 통해 검증된 최신 기술 스택으로 당신의 비전을 구현합니다
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 
              ? '1fr' 
              : window.innerWidth < 1024 
                ? 'repeat(2, 1fr)' 
                : 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: window.innerWidth < 768 ? '1rem' : '1.5rem'
          }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div 
                key={category}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  padding: window.innerWidth < 768 ? '1rem' : '1.5rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ 
                  fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', 
                  fontWeight: '600', 
                  marginBottom: window.innerWidth < 768 ? '0.75rem' : '1rem', 
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: window.innerWidth < 768 ? '0.375rem' : '0.5rem' }}>
                  {skillList.map((skill) => (
                    <span 
                      key={skill}
                      style={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        padding: window.innerWidth < 768 ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: window.innerWidth < 768 ? '0.8rem' : '0.85rem',
                        fontWeight: '500'
                      }}
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
      <section id="projects" style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: '#1f2937' 
            }}>
              🌟 MVP Universe
            </h2>
            <p style={{ 
              fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', 
              color: '#6b7280', 
              maxWidth: '700px', 
              margin: '0 auto',
              padding: window.innerWidth < 768 ? '0 1rem' : '0'
            }}>
              {window.innerWidth < 768 
                ? '혁신의 궤도를 도는 검증된 MVP들' 
                : '혁신의 궤도를 돌며 탄생한 검증된 MVP들 - 각각이 특별한 가치를 창출합니다'
              }
            </p>
          </div>
          
          {/* 필터 */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '2rem', 
            gap: window.innerWidth < 768 ? '0.375rem' : '0.5rem',
            flexWrap: 'wrap',
            padding: window.innerWidth < 768 ? '0 1rem' : '0'
          }}>
            <button
              onClick={() => setFilter("all")}
              style={{
                padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: window.innerWidth < 768 ? '0.8rem' : '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                backgroundColor: filter === "all" ? '#3b82f6' : '#f3f4f6',
                color: filter === "all" ? 'white' : '#6b7280'
              }}
            >
              전체 프로젝트
            </button>
            <button
              onClick={() => setFilter("featured")}
              style={{
                padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: window.innerWidth < 768 ? '0.8rem' : '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                backgroundColor: filter === "featured" ? '#3b82f6' : '#f3f4f6',
                color: filter === "featured" ? 'white' : '#6b7280'
              }}
            >
              주요 프로젝트
            </button>
          </div>

          {/* 프로젝트 그리드 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 
              ? '1fr' 
              : window.innerWidth < 1024 
                ? '1fr' 
                : 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: window.innerWidth < 768 ? '1.5rem' : '2rem',
            padding: window.innerWidth < 768 ? '0 1rem' : '0'
          }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  margin: window.innerWidth < 768 ? '0 auto' : '0',
                  maxWidth: window.innerWidth < 768 ? '100%' : 'none'
                }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ padding: window.innerWidth < 768 ? '1rem' : '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    marginBottom: window.innerWidth < 768 ? '0.75rem' : '1rem',
                    flexWrap: window.innerWidth < 480 ? 'wrap' : 'nowrap',
                    gap: window.innerWidth < 480 ? '0.5rem' : '0'
                  }}>
                    {project.featured && (
                      <div style={{
                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 8px rgba(251, 191, 36, 0.3)'
                      }}>
                        ⭐ FEATURED
                      </div>
                    )}
                    <div style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      marginLeft: 'auto'
                    }}>
                      {project.mvpNumber}
                    </div>
                  </div>
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '1.1rem' : '1.2rem', 
                    fontWeight: '700', 
                    marginBottom: window.innerWidth < 768 ? '0.5rem' : '0.75rem', 
                    color: '#1f2937', 
                    lineHeight: '1.3' 
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6', 
                    marginBottom: window.innerWidth < 768 ? '0.75rem' : '1rem',
                    fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem'
                  }}>
                    {project.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: window.innerWidth < 768 ? '0.375rem' : '0.5rem', 
                    marginBottom: window.innerWidth < 768 ? '1rem' : '1.5rem' 
                  }}>
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        style={{
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          padding: window.innerWidth < 768 ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: window.innerWidth < 768 ? '0.75rem' : '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    gap: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
                    flexDirection: window.innerWidth < 480 ? 'column' : 'row'
                  }}>
                    <a 
                      href={project.demo}
                      style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.25rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontSize: window.innerWidth < 768 ? '0.85rem' : '0.9rem',
                        textAlign: 'center',
                        flex: window.innerWidth < 480 ? '1' : 'none',
                        fontWeight: '500'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      라이브 데모
                    </a>
                    <a 
                      href={project.github}
                      style={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.25rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontSize: window.innerWidth < 768 ? '0.85rem' : '0.9rem',
                        fontWeight: '500',
                        textAlign: 'center',
                        flex: window.innerWidth < 480 ? '1' : 'none'
                      }}
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
      <section id="contact" style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '20px', 
            padding: window.innerWidth < 768 ? '2rem 1rem' : '3rem 2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h2 style={{ 
              fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem', 
              fontWeight: '700', 
              marginBottom: '1rem', 
              textAlign: 'center' 
            }}>
              🚀 다음 MVP는 당신과 함께
            </h2>
            <p style={{ 
              marginBottom: '2rem', 
              opacity: 0.9, 
              fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem', 
              textAlign: 'center', 
              lineHeight: '1.6' 
            }}>
              {window.innerWidth < 768 ? (
                <>혁신의 궤도에서 만날 다음 프로젝트를 기다리고 있습니다. 당신의 아이디어가 빛나는 순간을 함께 만들어보세요.</>
              ) : (
                <>혁신의 궤도에서 만날 다음 프로젝트를 기다리고 있습니다.<br />당신의 아이디어가 빛나는 순간을 함께 만들어보세요.</>
              )}
            </p>
            <div style={{ 
              textAlign: 'center', 
              fontSize: window.innerWidth < 768 ? '0.8rem' : '0.9rem', 
              opacity: 0.8, 
              marginBottom: '2rem',
              padding: window.innerWidth < 768 ? '0 0.5rem' : '0'
            }}>
              {window.innerWidth < 768 ? (
                <>💎 Premium Quality<br/>🎵 Vibe Coding<br/>🌟 MVP Specialist</>
              ) : (
                '💎 Premium Quality · 🎵 Vibe Coding · 🌟 MVP Specialist'
              )}
            </div>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: window.innerWidth < 768 ? '0.75rem' : '1rem', 
            flexWrap: 'wrap',
            padding: window.innerWidth < 768 ? '0 1rem' : '0'
          }}>
            <a 
              href="mailto:dev@example.com"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: window.innerWidth < 768 ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem',
                flex: window.innerWidth < 480 ? '1' : 'none',
                textAlign: 'center'
              }}
            >
              📧 이메일 보내기
            </a>
            <a 
              href="https://github.com"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                padding: window.innerWidth < 768 ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem',
                flex: window.innerWidth < 480 ? '1' : 'none',
                textAlign: 'center'
              }}
            >
              💼 GitHub 보기
            </a>
          </div>
        </div>
      </section>

      {/* 모달 */}
      {selectedProject && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            zIndex: 9999
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: window.innerWidth < 768 ? '1.5rem' : '2rem',
              maxWidth: window.innerWidth < 768 ? '95%' : '600px',
              width: '100%',
              maxHeight: window.innerWidth < 768 ? '90vh' : '80vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h2 style={{ 
              fontSize: window.innerWidth < 768 ? '1.3rem' : '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem' 
            }}>
              {selectedProject.title}
            </h2>
            <p style={{ 
              marginBottom: '1.5rem', 
              lineHeight: '1.6',
              fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem'
            }}>
              {selectedProject.description}
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                fontSize: window.innerWidth < 768 ? '0.95rem' : '1rem'
              }}>사용 기술</h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: window.innerWidth < 768 ? '0.375rem' : '0.5rem' 
              }}>
                {selectedProject.tech.map((tech) => (
                  <span 
                    key={tech}
                    style={{
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      padding: window.innerWidth < 768 ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: window.innerWidth < 768 ? '0.75rem' : '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
              flexDirection: window.innerWidth < 480 ? 'column' : 'row'
            }}>
              <a 
                href={selectedProject.demo} 
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: window.innerWidth < 768 ? '0.85rem' : '0.9rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  flex: window.innerWidth < 480 ? '1' : 'none'
                }}
              >
                라이브 데모 보기
              </a>
              <a 
                href={selectedProject.github} 
                style={{
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  padding: window.innerWidth < 768 ? '0.4rem 1rem' : '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: window.innerWidth < 768 ? '0.85rem' : '0.9rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  flex: window.innerWidth < 480 ? '1' : 'none'
                }}
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