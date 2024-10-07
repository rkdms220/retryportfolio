import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // 음소거 상태 관리

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 음소거 상태 토글
  const toggleMute = () => {
    const audio = document.getElementById('background-audio');
    if (audio) {
      if (isMuted) {
        audio.muted = false; // 음소거 해제
        audio.play(); // 음소거 해제 시 음악 재생
      } else {
        audio.muted = true; // 음소거 설정
      }
      setIsMuted(!isMuted); // 상태 업데이트
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Seong Gaeun</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">My Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      {/* 음소거 버튼 */}
      <button onClick={toggleMute} className="audio-button">
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
      </button>

      {/* 오디오 요소 추가 */}
      <audio id="background-audio" loop>
        <source src="/images/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </nav>
  );
};

export default Navbar;
