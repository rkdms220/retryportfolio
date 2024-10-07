import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 요소가 화면에 보이면 visible 클래스 추가
        } else {
          setIsVisible(false); // 요소가 화면을 벗어나면 visible 클래스 제거
        }
      });
    }, { threshold: 0.1 }); // 10%만 화면에 보여도 감지

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'visible' : ''}`} // visible 클래스를 토글
    >
      {children}
    </div>
  );
};

export default FadeInSection;
