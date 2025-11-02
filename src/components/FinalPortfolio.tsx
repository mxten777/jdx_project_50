import React, { useState } from 'react';

// 간단하고 안정적인 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "E-커머스 플랫폼",
    description: "React와 Node.js로 구축한 현대적인 온라인 쇼핑몰",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "팀 협업 도구",
    description: "실시간 채팅과 프로젝트 관리를 위한 협업 플랫폼",
    tech: ["Vue.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI 챗봇 서비스",
    description: "OpenAI API를 활용한 고객 상담 자동화 시스템",
    tech: ["Python", "FastAPI", "OpenAI"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 4,
    title: "데이터 대시보드",
    description: "비즈니스 인텔리전스를 위한 실시간 데이터 시각화",
    tech: ["React", "D3.js", "Python"],
    github: "#",
    demo: "#",
    featured: false
  }
];

const skills = {
  "Frontend": ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Linux"],
  "Tools": ["Git", "Figma", "VS Code", "Notion"]
};

export const FinalPortfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.featured);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    },
    header: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
      padding: '1rem 0'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    nav: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      transition: 'color 0.2s'
    },
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '4rem 0',
      color: 'white',
      textAlign: 'center' as const
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    heroSlogan: {
      fontSize: '1.3rem',
      marginBottom: '1.5rem',
      opacity: 0.95,
      fontWeight: '300'
    },
    heroDesc: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    heroInfo: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap' as const,
      fontSize: '0.95rem'
    },
    section: {
      padding: '3rem 0'
    },
    sectionContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center' as const,
      marginBottom: '2.5rem',
      color: '#1f2937'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    },
    skillCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    skillTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#374151',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em'
    },
    skillList: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '0.5rem'
    },
    skillTag: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.85rem',
      fontWeight: '500'
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2rem',
      gap: '0.5rem'
    },
    filterButton: {
      padding: '0.5rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    filterButtonActive: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    filterButtonInactive: {
      backgroundColor: '#f3f4f6',
      color: '#6b7280'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    projectCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    },
    projectContent: {
      padding: '1.5rem'
    },
    projectTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      color: '#1f2937'
    },
    projectDesc: {
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: '1rem'
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },
    techTag: {
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.8rem',
      fontWeight: '500'
    },
    projectButtons: {
      display: 'flex',
      gap: '0.75rem'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '0.5rem 1.25rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      border: 'none',
      cursor: 'pointer'
    },
    secondaryButton: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      padding: '0.5rem 1.25rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      border: 'none',
      cursor: 'pointer'
    },
    footer: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '3rem 0',
      textAlign: 'center' as const
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    footerDesc: {
      marginBottom: '2rem',
      opacity: 0.8
    },
    footerButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap' as const
    },
    modal: {
      position: 'fixed' as const,
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      zIndex: 9999
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'auto'
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    closeButton: {
      position: 'absolute' as const,
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      {/* 헤더 */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>김개발</div>
          <nav style={styles.nav}>
            <a href="#about" style={styles.navLink}>소개</a>
            <a href="#skills" style={styles.navLink}>기술</a>
            <a href="#projects" style={styles.navLink}>프로젝트</a>
            <a href="#contact" style={styles.navLink}>연락처</a>
          </nav>
        </div>
      </header>

      {/* 히어로 */}
      <section id="about" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Full Stack Developer</h1>
          <p style={styles.heroSlogan}>
            "코드로 세상을 바꾸는 개발자"
          </p>
          <p style={styles.heroDesc}>
            사용자 경험을 최우선으로 생각하며, 혁신적이고 확장 가능한 
            웹 애플리케이션을 개발하는 5년차 풀스택 개발자입니다.
          </p>
          <div style={styles.heroInfo}>
            <span>📍 서울, 대한민국</span>
            <span>✉️ dev@example.com</span>
            <span>💼 5년 경력</span>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section id="skills" style={{ ...styles.section, backgroundColor: '#f9fafb' }}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>기술 스택</h2>
          <div style={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div 
                key={category} 
                style={styles.skillCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <h3 style={styles.skillTitle}>{category}</h3>
                <div style={styles.skillList}>
                  {skillList.map((skill) => (
                    <span key={skill} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 */}
      <section id="projects" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>주요 프로젝트</h2>
          
          <div style={styles.filterButtons}>
            <button
              onClick={() => setFilter("all")}
              style={{
                ...styles.filterButton,
                ...(filter === "all" ? styles.filterButtonActive : styles.filterButtonInactive)
              }}
            >
              전체 프로젝트
            </button>
            <button
              onClick={() => setFilter("featured")}
              style={{
                ...styles.filterButton,
                ...(filter === "featured" ? styles.filterButtonActive : styles.filterButtonInactive)
              }}
            >
              주요 프로젝트
            </button>
          </div>

          <div style={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                style={styles.projectCard}
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
                <div style={styles.projectContent}>
                  {project.featured && (
                    <div style={{
                      backgroundColor: '#fbbf24',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      display: 'inline-block',
                      marginBottom: '1rem'
                    }}>
                      🌟 주요 프로젝트
                    </div>
                  )}
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDesc}>{project.description}</p>
                  <div style={styles.projectTech}>
                    {project.tech.map((tech) => (
                      <span key={tech} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div style={styles.projectButtons}>
                    <a 
                      href={project.demo} 
                      style={styles.primaryButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      라이브 데모
                    </a>
                    <a 
                      href={project.github} 
                      style={styles.secondaryButton}
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
      <section id="contact" style={styles.footer}>
        <div style={styles.sectionContent}>
          <h2 style={styles.footerTitle}>함께 프로젝트를 만들어가요!</h2>
          <p style={styles.footerDesc}>
            새로운 아이디어나 협업 기회가 있으시면 언제든 연락주세요.
            <br />더 나은 서비스를 함께 만들어갈 수 있을 것 같습니다.
          </p>
          <div style={styles.footerButtons}>
            <a 
              href="mailto:dev@example.com"
              style={{ ...styles.primaryButton, backgroundColor: '#3b82f6' }}
            >
              📧 이메일 보내기
            </a>
            <a 
              href="#"
              style={{ ...styles.secondaryButton, backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
            >
              💼 GitHub 보기
            </a>
          </div>
        </div>
      </section>

      {/* 모달 */}
      {selectedProject && (
        <div style={styles.modal} onClick={() => setSelectedProject(null)}>
          <div style={{ ...styles.modalContent, position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeButton}
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{selectedProject.description}</p>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>사용 기술</h4>
              <div style={styles.projectTech}>
                {selectedProject.tech.map((tech) => (
                  <span key={tech} style={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
            <div style={styles.projectButtons}>
              <a href={selectedProject.demo} style={styles.primaryButton}>
                라이브 데모 보기
              </a>
              <a href={selectedProject.github} style={styles.secondaryButton}>
                GitHub 소스코드
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};