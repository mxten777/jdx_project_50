import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 40개 MVP 프로젝트 데이터 생성
const generateMVPProjects = () => {
  const categories = ["E-Commerce", "SaaS Platform", "Mobile App", "Web Service", "AI/ML Tool", "Blockchain", "IoT Solution", "Gaming"];
  const techStacks = [
    ["React", "Node.js", "MongoDB"], ["Vue.js", "Express", "PostgreSQL"], ["Angular", "Python", "Django"],
    ["Next.js", "Prisma", "MySQL"], ["React Native", "Firebase"], ["Flutter", "Dart", "Cloud"],
    ["Svelte", "FastAPI", "Redis"], ["TypeScript", "GraphQL", "Docker"]
  ];
  const statuses = ["completed", "active", "in-progress"];
  
  return Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    title: `${categories[index % categories.length]} ${Math.floor(index / categories.length) + 1}`,
    description: `Innovative ${categories[index % categories.length].toLowerCase()} solution with modern features`,
    image: `https://picsum.photos/400/300?random=${index + 1}`,
    techStack: techStacks[index % techStacks.length],
    status: statuses[index % statuses.length],
    link: "#"
  }));
};

const mvpProjects = generateMVPProjects();

export const FerrisWheel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [rotation, setRotation] = useState(0);

  // 자동 회전
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % mvpProjects.length;
        setRotation(-newIndex * (360 / mvpProjects.length));
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % mvpProjects.length;
    setCurrentIndex(newIndex);
    setRotation(-newIndex * (360 / mvpProjects.length));
  };

  const prevProject = () => {
    const newIndex = (currentIndex - 1 + mvpProjects.length) % mvpProjects.length;
    setCurrentIndex(newIndex);
    setRotation(-newIndex * (360 / mvpProjects.length));
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setRotation(-index * (360 / mvpProjects.length));
  };

  const currentProject = mvpProjects[currentIndex];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      {/* 관람차 파티클 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
          </div>
        ))}
      </div>
      
      {/* 헤더 */}
      <header className="absolute top-6 left-6 right-6 z-30">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BAIKAL
            </h1>
            <p className="text-sm text-purple-300">40 Projects • Ferris Wheel</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">
              {currentIndex + 1} / {mvpProjects.length}
            </p>
          </div>
        </div>
      </header>

      {/* 간단하고 확실한 관람차 */}
      <main className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
        
        {/* 관람차 중심점 - 확실히 보이게 */}
        <div className="relative w-[500px] h-[500px] bg-white rounded-full shadow-2xl">
          
          {/* 관람차 테두리 - 매우 진하게 */}
          <div className="absolute inset-0 rounded-full border-[12px] border-purple-800 bg-purple-100 shadow-2xl"></div>
          <div className="absolute inset-8 rounded-full border-8 border-purple-600"></div>
          <div className="absolute inset-16 rounded-full border-4 border-purple-400"></div>
          
          {/* 스포크들 - 8개 방향, 매우 굵고 진하게 */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-60 h-2 bg-purple-800 origin-left shadow-lg"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            />
          ))}
          
          {/* 중심축 - 매우 크고 진하게 */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-purple-800 rounded-full shadow-2xl border-4 border-purple-600"></div>
          
          {/* 회전 컨테이너 */}
          <div 
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* 40개 곤돌라 - 확실히 보이게 */}
            {mvpProjects.map((project, index) => {
              const angle = (index * 360) / mvpProjects.length;
              const radian = (angle * Math.PI) / 180;
              const radius = 220; // 더 큰 반지름
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              
              return (
                <div
                  key={project.id}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* 곤돌라 - 임시로 색상 블록 */}
                  <div
                    className={`w-16 h-16 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-white font-bold ${
                      index === currentIndex 
                        ? 'scale-125 shadow-xl bg-purple-500 border-2 border-purple-300' 
                        : 'scale-100 bg-purple-700/80 hover:bg-purple-600'
                    }`}
                    style={{ transform: `rotate(${-rotation}deg)` }}
                    onClick={() => goToProject(index)}
                  >
                    {/* 일단 숫자로 표시 */}
                    <span className="text-sm">{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-72">
          <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <div className="space-y-3">
              <div>
                <span className="text-purple-400 text-xs">PROJECT #{currentIndex + 1}</span>
                <h2 className="text-xl font-bold text-white">{currentProject.title}</h2>
                <p className="text-gray-300 text-sm">{currentProject.description}</p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-1">
                  {currentProject.techStack.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setShowModal(true)}
                className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm transition-colors"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </main>      {/* 회전관람차 브랜딩 */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="space-y-1">
          <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio Ferris Wheel
          </p>
          <p className="text-xs text-gray-500">
            ✦ 40 Projects • Innovation Universe ✦
          </p>
        </div>
      </div>

      {/* 관람차 컨트롤 */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="flex items-center gap-4 bg-black/60 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30">
          <button
            onClick={prevProject}
            className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-all"
            title="Previous Project"
          >
            <ChevronLeft size={18} className="text-purple-300" />
          </button>

          <div className="text-center">
            <div className="text-xs text-purple-300 font-medium">CABIN</div>
            <div className="text-lg font-bold text-white">
              {String(currentIndex + 1).padStart(2, '0')}
            </div>
          </div>
          
          <button
            onClick={nextProject}
            className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-all"
            title="Next Project"
          >
            <ChevronRight size={18} className="text-purple-300" />
          </button>
        </div>

        {/* 자동 회전 상태 */}
        <div className="mt-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/30 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-xs text-purple-300">Auto Rotating</span>
          </div>
        </div>
      </div>

      {/* 회전 진행 원형 바 */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative w-16 h-16">
          {/* 배경 원 */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="4"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - (currentIndex + 1) / mvpProjects.length)}`}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
          {/* 중앙 텍스트 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-purple-300 font-medium">RIDE</div>
              <div className="text-sm font-bold text-white">
                {Math.round(((currentIndex + 1) / mvpProjects.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 준비중 모달 */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-900 rounded-lg p-6 border border-gray-700 max-w-sm w-full mx-4"
            >
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
                
                <h3 className="text-xl font-bold text-white">준비중</h3>
                
                <p className="text-gray-300 text-sm">
                  현재 프로젝트 페이지를 준비 중입니다.
                </p>
                
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition-colors"
                >
                  확인
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};