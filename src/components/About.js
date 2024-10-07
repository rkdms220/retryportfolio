import React, { useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 0.5, // 요소가 50% 보일 때 트리거
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // 요소가 보이면 클래스 추가
        } else {
          entry.target.classList.remove('visible'); // 요소가 보이지 않으면 클래스 제거
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    return () => {
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

  return (
    <section id="about">
      <div className='fade-in'>
        <div className='desc'>
        <h2 className='about'>About Me</h2>
        <p className='intro'>Infinite Challenge, Change, and Passion</p>
        <p className='about-me'>프론트엔드 개발자로서 웹 디자인의 기초를 다지며 사용자 경험(UX)과 인터페이스(UI) 설계에 대한 이해를 갖추고 꾸준히 나를 성장시킬 수 있는 기회를 모색하며 도전을 주저하지 않고 있습니다. 지속적인 학습과 성장을 통해, 창의적이고 실용적인 웹 솔루션을 제공하기 위해 노력하고 있습니다.</p>
        <p className='about-me2'>새로운 기회를 찾아나서는 저의  흥미로운 여정을 함께 즐겨보시겠어요?</p>
        <a className='game-btn' href=" https://rkdms220.github.io/gameportfolio/" target='blank'>I'm Ready!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
