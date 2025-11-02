import { useState, useEffect, useCallback } from 'react';

export const useRotationControl = () => {
  const [isRotating, setIsRotating] = useState(true);

  const toggleRotation = useCallback(() => {
    setIsRotating(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // 스페이스바 또는 엔터키로 슬라이드 제어
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        toggleRotation();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleRotation]);

  return {
    isRotating,
    toggleRotation,
  };
};