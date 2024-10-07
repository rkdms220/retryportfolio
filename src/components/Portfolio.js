import React, { useState, useEffect, useRef } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [modalImage, setModalImage] = useState(null);
  const imageRefs = useRef([]); // 이미지 DOM 요소들을 참조하기 위한 useRef 배열
  const imageData = [
    'images/work1.jpg',
    'images/work2.jpg',
    'images/work3.jpg',
    'images/work4.jpg',
    'images/work5.jpg',
    'images/work6.jpg',
    'images/work7.jpg',
    'images/work8.jpg'
  ];

  useEffect(() => {
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // 요소가 보이면 fade-in 클래스 추가
        } else {
          entry.target.classList.remove('fade-in'); // 요소가 안보이면 fade-in 클래스 제거
        }
      });
    });

    // 각 이미지 요소에 Observer를 연결
    imageRefs.current.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    // 컴포넌트 언마운트 시 Observer 해제
    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="portfolio">
      <div className="content">
        <h2>My Portfolio</h2>
        <p>Here are some of my works...</p>

        <div className="gallery">
          {imageData.map((imageSrc, index) => (
            <div
              className="gallery-item"
              key={index}
              ref={(el) => (imageRefs.current[index] = el)} // 각 이미지 요소 참조 저장
              onClick={() => openModal(imageSrc)}
            >
              <img src={imageSrc} alt={`Work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
