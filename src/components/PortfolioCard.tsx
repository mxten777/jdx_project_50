import React from 'react';
import type { MVPProject } from '../data/mvpProjects';

interface PortfolioCardProps {
  project: MVPProject;
  index: number;
  total: number;
  isSelected: boolean;
  onClick: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-200 ${
        isSelected ? 'scale-105' : 'hover:scale-105'
      }`}
      onClick={onClick}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-200 hover:shadow-xl">
        {/* 프로젝트 썸네일 */}
        <div className="relative h-32 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // 이미지 로드 실패 시 그라데이션 배경
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'w-full h-full flex items-center justify-center text-white font-bold text-3xl';
                fallback.style.background = `linear-gradient(135deg, 
                  hsl(${(project.id * 137.5) % 360}, 70%, 60%), 
                  hsl(${(project.id * 137.5 + 60) % 360}, 70%, 50%))`;
                fallback.textContent = project.id.toString();
                parent.insertBefore(fallback, target);
              }
            }}
          />
          
          {/* 카테고리 배지 */}
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {project.category}
          </div>
          
          {/* ID 번호 */}
          <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {project.id}
          </div>
        </div>
        
        {/* 프로젝트 정보 */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-base mb-2 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          
          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-700/50 text-gray-200 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-gray-400 text-xs py-1">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
          
          {/* 개발 기간 */}
          <div className="mt-3 text-xs text-gray-400">
            개발기간: {project.developmentPeriod}
          </div>
        </div>
      </div>
    </div>
  );
};