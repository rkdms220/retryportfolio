import React, { useState, useEffect } from 'react';
import '../styles/Main.css';
import About from './About';

const Main = () => {
  const [isVisible, setIsVisible] = useState(true);

    // 스크롤 감지 함수
    const handleScroll = () => {
      const mainSection = document.getElementById('home');
      if (mainSection) {
        const mainHeight = mainSection.offsetHeight; // 메인 섹션의 높이
        const currentScroll = window.scrollY; // 현재 스크롤 위치
  
        // 로그 출력 디버깅
        console.log(`Current scroll: ${currentScroll}, Main section height: ${mainHeight}`);
  
        // 스크롤이 메인 섹션 높이보다 크면 비디오 숨기기
        if (currentScroll >= mainHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        console.log("Main section not found.");
      }
    };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');

    const handleMouseMove = (element) => {
      element.addEventListener('mousemove', (e) => {
        const x = (e.offsetX - element.offsetWidth / 2) / 10;
        const y = (e.offsetY - element.offsetHeight / 2) / 10;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
      });
    };

    handleMouseMove(h1);
    handleMouseMove(p);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <video
          className={`background-video ${!isVisible ? 'hidden' : ''}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio id="background-audio" loop>
          <source src="/images/audio.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <h1>Welcome to <br/><span>My Portfolio!</span></h1>
        <p>Explore my creative world.</p>
      </div>
    </section>
  );
};

export default Main;
