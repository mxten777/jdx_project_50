import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';
import { mvpProjects } from '../data/mvpProjects';

export const FerrisWheel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const currentProject = mvpProjects[currentIndex];

  // 자동 재생
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mvpProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % mvpProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + mvpProjects.length) % mvpProjects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-screen text-white overflow-hidden relative flex flex-col" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>
      {/* 헤더 배경 분리선 */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)', zIndex: 25 }} />
      {/* 헤더 - 안정적인 반응형 */}
      <header className="relative w-full z-30 px-4 py-3 sm:px-6 sm:py-4" style={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
            <h1 className="font-title text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
              <span className="gradient-text">BAIKAL</span>
              <span className="font-light text-gray-400"> SYSTEMS</span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <p className="font-caption text-xs sm:text-sm text-gray-500">
                MVP Exhibition — {mvpProjects.length} Projects
              </p>
              <p className="font-display hidden sm:block text-sm text-gray-300 italic">
                "Where Innovation Meets Excellence"
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-title text-lg sm:text-xl lg:text-2xl text-white">
                {String(currentIndex + 1).padStart(2, '0')}
                <span className="font-caption text-xs sm:text-sm text-gray-400 ml-1">
                  / {String(mvpProjects.length).padStart(2, '0')}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all hover:scale-105"
            >
              {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>
        {/* 헤더 하단 분리선 */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)' }} />
      </header>

      {/* 메인 전시 영역 - 안정적인 레이아웃 */}
      <main className="flex-1 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            
            {/* 프로젝트 이미지 */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.95, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: 20 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative w-full max-w-lg mx-auto"
                >
                  <div 
                    className="overflow-hidden bg-gray-900 relative"
                    style={{ 
                      aspectRatio: '5/4', 
                      borderRadius: '1rem',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <img
                      src={currentProject.thumbnail}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/1200x675/667eea/ffffff?text=${encodeURIComponent(currentProject.title)}`;
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0,0,0,0.2) 100%)' }}
                    />
                    
                    {/* 미묘한 빛 효과 */}
                    <div 
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
                      }}
                    />
                  </div>
                  
                  {/* 프로젝트 번호 - 안정적인 위치 */}
                  <div 
                    className="absolute font-title flex items-center justify-center z-10"
                    style={{ 
                      top: '-0.75rem', 
                      right: '-0.75rem', 
                      width: '3rem', 
                      height: '3rem',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      color: '#1a1a1a',
                      borderRadius: '50%',
                      fontSize: '1rem',
                      fontWeight: '800',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.9)',
                      border: '2px solid rgba(255, 255, 255, 0.95)'
                    }}
                  >
                    {String(currentProject.id).padStart(2, '0')}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 프로젝트 정보 */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
                  className="space-y-4"
                  style={{ maxWidth: '450px' }}
                >
                  {/* 카테고리 */}
                  <div className="inline-block mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full tracking-wide shadow-lg">
                      {currentProject.category}
                    </span>
                  </div>

                  {/* 제목 - 프리미엄 타이포그래피 */}
                  <div className="space-y-3">
                    <div className="relative">
                      <h2 
                        className="font-title text-white text-heading"
                        style={{ 
                          textShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                          wordBreak: 'keep-all',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          fontFeatureSettings: '"ss01" 1, "ss02" 1'
                        }}
                      >
                        {currentProject.title}
                      </h2>
                      {/* 제목 하이라이트 */}
                      <div 
                        className="absolute -bottom-1 left-0"
                        style={{
                          width: '55px',
                          height: '3px',
                          background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                          borderRadius: '2px',
                          boxShadow: '0 2px 8px rgba(139, 92, 246, 0.4)'
                        }}
                      />
                    </div>
                  </div>

                  {/* 설명 - 프리미엄 타이포그래피 */}
                  <p 
                    className="font-body text-body-small"
                    style={{ 
                      color: '#d1d5db', 
                      maxWidth: '100%',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                      fontFeatureSettings: '"kern" 1, "liga" 1'
                    }}
                  >
                    {currentProject.description}
                  </p>

                  {/* 기술 스택 - 프리미엄 타이포그래피 */}
                  <div className="space-y-3.5">
                    <h3 
                      className="font-caption"
                      style={{ 
                        fontSize: '0.7rem', 
                        color: '#888888',
                        fontWeight: '600',
                        lineHeight: '1.4'
                      }}
                    >
                      TECHNOLOGY STACK
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {currentProject.techStack.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="font-mono transition-all hover:scale-105 hover:bg-white/10"
                          style={{
                            padding: '0.55rem 1.1rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#e5e7eb',
                            borderRadius: '0.75rem',
                            fontSize: '0.72rem',
                            fontWeight: '500',
                            lineHeight: '1.3',
                            letterSpacing: '0.01em'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {currentProject.techStack.length > 4 && (
                        <span
                          className="font-mono"
                          style={{
                            padding: '0.55rem 1.1rem',
                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            color: '#a78bfa',
                            borderRadius: '0.75rem',
                            fontSize: '0.72rem',
                            fontWeight: '500',
                            lineHeight: '1.3',
                            letterSpacing: '0.01em'
                          }}
                        >
                          +{currentProject.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 개발 정보 - 프리미엄 타이포그래피 */}
                  <div className="flex gap-8">
                    <div className="space-y-1">
                      <h4 
                        className="font-caption"
                        style={{ 
                          fontSize: '0.65rem', 
                          color: '#888888',
                          fontWeight: '600',
                          lineHeight: '1.3'
                        }}
                      >
                        PERIOD
                      </h4>
                      <p 
                        className="font-body"
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: '600', 
                          color: '#ffffff',
                          lineHeight: '1.4',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {currentProject.developmentPeriod}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 
                        className="font-caption"
                        style={{ 
                          fontSize: '0.65rem', 
                          color: '#888888',
                          fontWeight: '600',
                          lineHeight: '1.3'
                        }}
                      >
                        FEATURES
                      </h4>
                      <p 
                        className="font-body"
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: '600', 
                          color: '#ffffff',
                          lineHeight: '1.4',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {currentProject.features.length} Items
                      </p>
                    </div>
                  </div>

                  {/* 액션 버튼 - 한 화면 최적화 */}
                  <div className="pt-4 space-y-3">
                    <button
                      onClick={() => setShowComingSoonModal(true)}
                      className="inline-flex items-center gap-2.5 font-body transition-all hover:scale-105 hover:shadow-2xl group"
                      style={{
                        padding: '0.9rem 1.8rem',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        color: '#1a1a1a',
                        borderRadius: '1rem',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        lineHeight: '1.3',
                        letterSpacing: '-0.005em',
                        boxShadow: '0 12px 30px rgba(255, 255, 255, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        textDecoration: 'none'
                      }}
                    >
                      <span>VIEW PROJECT</span>
                      <ExternalLink 
                        size={14} 
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                      />
                    </button>
                    
                    {/* 추가 정보 링크 - 프리미엄 타이포그래피 */}
                    <div className="flex items-center gap-6">
                      <button 
                        className="font-caption text-white/50 hover:text-white/80 transition-all hover:translate-x-0.5"
                        style={{ 
                          fontSize: '0.65rem',
                          lineHeight: '1.4',
                          letterSpacing: '0.05em'
                        }}
                      >
                        DETAILS →
                      </button>
                      <button 
                        className="font-caption text-white/50 hover:text-white/80 transition-all hover:translate-x-0.5"
                        style={{ 
                          fontSize: '0.65rem',
                          lineHeight: '1.4',
                          letterSpacing: '0.05em'
                        }}
                      >
                        STUDY →
                      </button>
                      <button 
                        className="font-caption text-white/50 hover:text-white/80 transition-all hover:translate-x-0.5"
                        style={{ 
                          fontSize: '0.65rem',
                          lineHeight: '1.4',
                          letterSpacing: '0.05em'
                        }}
                      >
                        TEAM →
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* 갤러리 슬로건 */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
        <div className="space-y-1">
          <p className="font-display text-sm sm:text-base text-white italic font-medium">
            Innovation in Motion
          </p>
          <p className="font-caption text-xs text-gray-400 tracking-wider hidden sm:block">
            CURATED COLLECTION OF DIGITAL EXCELLENCE
          </p>
        </div>
      </div>

      {/* 네비게이션 컨트롤 */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-xl rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/10 shadow-2xl">
        
          <button
            onClick={prevProject}
            className="transition-all hover:scale-105 hover:bg-white/10"
            style={{
              padding: '0.4rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)'
            }}
          >
            <ChevronLeft size={14} />
          </button>
          
          {/* 프로젝트 도트 네비게이션 - 더 컴팩트하게 */}
          <div className="flex items-center gap-1">
            {mvpProjects.slice(0, Math.min(5, mvpProjects.length)).map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className="transition-all hover:scale-110"
                style={{
                  width: index === currentIndex % Math.min(5, mvpProjects.length) ? '1.2rem' : '0.3rem',
                  height: '0.3rem',
                  borderRadius: '0.15rem',
                  backgroundColor: index === currentIndex % Math.min(5, mvpProjects.length) 
                    ? '#ffffff' 
                    : 'rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
            {mvpProjects.length > 5 && (
              <div 
                className="font-caption"
                style={{ 
                  fontSize: '0.65rem', 
                  color: '#888888',
                  marginLeft: '0.5rem'
                }}
              >
                +{mvpProjects.length - 5}
              </div>
            )}
          </div>
          
          <button
            onClick={nextProject}
            className="transition-all hover:scale-105 hover:bg-white/10"
            style={{
              padding: '0.4rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)'
            }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* 흐르는 슬로건 텍스트 - 한 화면 최적화 */}
      <div className="fixed bottom-2 left-0 w-full z-5 overflow-hidden">
        <div 
          className="flowing-text font-display"
          style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.15)',
            fontStyle: 'italic',
            fontWeight: '500'
          }}
        >
          혁신의 궤도를 돌다 — Baikal Systems MVP Universe ✦ 40개의 별, 한 바퀴의 여정 ✦ Innovation Beyond Boundaries ✦
        </div>
      </div>

      {/* 배경 별빛 효과 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '1.5px',
              height: '1.5px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* 홀로그램 테두리 효과 - 더 안정적인 위치 */}
      <div 
        className="fixed pointer-events-none z-5 hologram"
        style={{
          top: '1.5rem',
          left: '1.5rem',
          right: '1.5rem',
          bottom: '1.5rem',
          border: '1px solid rgba(139, 92, 246, 0.12)',
          borderRadius: '1.25rem',
          background: 'transparent'
        }}
      />

      {/* 진행 바 */}
      <div 
        className="fixed bottom-0 left-0 w-full z-10"
        style={{ height: '2px', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
      >
        <motion.div
          style={{ 
            height: '100%',
            background: 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / mvpProjects.length) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* 준비중 모달 */}
      <AnimatePresence>
        {showComingSoonModal && (
          <>
            {/* 모달 배경 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoonModal(false)}
              className="fixed inset-0 z-50"
              style={{ 
                background: 'rgba(0, 0, 0, 0.8)', 
                backdropFilter: 'blur(20px)' 
              }}
            />
            
            {/* 모달 콘텐츠 - 반응형 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed z-50"
              style={{ 
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                  borderRadius: 'clamp(1rem, 3vw, 1.2rem)',
                  padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1.2rem, 3vw, 1.8rem)',
                  width: 'clamp(280px, 80vw, 300px)',
                  maxWidth: '90vw',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div className="text-center space-y-4">
                  {/* 아이콘 */}
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                    </motion.div>
                  </div>
                  
                  {/* 제목 */}
                  <h3 className="font-title text-xl font-bold text-white">
                    준비중
                  </h3>
                  
                  {/* 설명 */}
                  <p className="font-body text-gray-300 text-sm leading-relaxed">
                    현재 프로젝트 페이지를<br />
                    준비 중입니다.
                  </p>
                  
                  {/* 닫기 버튼 */}
                  <button
                    onClick={() => setShowComingSoonModal(false)}
                    className="font-body px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-sm font-semibold hover:scale-105 transition-all"
                  >
                    확인
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};