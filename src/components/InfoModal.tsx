import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Layers } from 'lucide-react';
import type { MVPProject } from '../data/mvpProjects';

interface InfoModalProps {
  project: MVPProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* 모달 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
          >
            <div className="glass p-6 rounded-2xl max-h-[80vh] overflow-y-auto">
              {/* 헤더 */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      #{project.id}
                    </span>
                    <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>
                
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 썸네일 */}
              <div className="mb-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x300/667eea/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>

              {/* 정보 섹션 */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* 개발 정보 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Calendar size={20} />
                    개발 정보
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">개발 기간:</span>
                      <span className="text-white">{project.developmentPeriod}</span>
                    </div>
                  </div>
                </div>

                {/* 기술 스택 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Layers size={20} />
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-sm px-3 py-1 rounded-full border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 주요 기능 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">주요 기능</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1.5 w-1.5 h-1.5 bg-current rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 액션 버튼 */}
              <div className="flex gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  프로젝트 보기
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl font-semibold text-gray-300 border border-gray-600 hover:bg-white/10 transition-all"
                >
                  닫기
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};