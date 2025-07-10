import { useState, useRef, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function LazyCompareSlider({
  beforeSrc,
  afterSrc,
  alt = '',
  className = ''
}: {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px', // Загружаем заранее, когда до элемента остается 200px
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={beforeSrc} alt={`Before ${alt}`} />}
          itemTwo={<ReactCompareSliderImage src={afterSrc} alt={`After ${alt}`} />}
        />
      ) : (
        <div style={{ height: '400px', background: '#f5f5f5' }} /> // Заглушка
      )}
    </div>
  );
}

export default LazyCompareSlider