import '../styles/works.css';
import WebDevTechIcons from './data/webdevTech';
import http from '../utils/http';
import { useEffect, useState, useRef } from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import CardSkeleton from './CardSkeleton';
import { gsap } from 'gsap';

function Works(isDesktop) {

  // Animation with GSAP
  const worksRef = useRef(null);

  useEffect(() => {
    const worksElement = worksRef.current;
    const headerTitle = worksElement.querySelector('#header-title');
    const headerDescription = worksElement.querySelector('#header-description');
    const workTitle = worksElement.querySelector('#work-title');
    const worksContents = worksElement.querySelector('.works-content');

    gsap.set([headerTitle, headerDescription, workTitle, worksContents], { opacity: 0, y: 50 });

    const animateElements = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if the elements are present in the DOM before accessing their bounding client rectangle
      const isHeaderTitleVisible = headerTitle && headerTitle.getBoundingClientRect().top < windowHeight;
      const isHeaderDescriptionVisible = headerDescription && headerDescription.getBoundingClientRect().top < windowHeight;
      const isWorkTitleVisible = workTitle && workTitle.getBoundingClientRect().top < windowHeight;
      const isWorksContents = worksContents && worksContents.getBoundingClientRect().top < windowHeight;

      if (isHeaderTitleVisible) {
        gsap.to(headerTitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        gsap.to(headerTitle, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      }

      if (isHeaderDescriptionVisible) {
        gsap.to(headerDescription, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        gsap.to(headerDescription, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      }

      if (isWorkTitleVisible) {
        gsap.to(workTitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        gsap.to(workTitle, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      }

      if (isWorksContents) {
        gsap.to(worksContents, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        gsap.to(worksContents, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      }
    };

    // Attach the 'scroll' event listener with throttle to limit the number of triggers
    const throttleAnimate = throttle(animateElements, 100); // Adjust the throttle time as needed

    window.addEventListener('scroll', throttleAnimate);

    return () => {
      // Remove the 'scroll' event listener on component unmount
      window.removeEventListener('scroll', throttleAnimate);
    };
  }, []);

  // Throttle function to limit the frequency of function calls
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // Pagination
  const cld = new Cloudinary({cloud: {cloudName: 'dxnta6ljp'}});
  const [worksData, setWorksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isDesktop ? 3 : 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = worksData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getWorksData = () => {
    http.get('works/view')
    .then((res) => {
      setWorksData(res.data);
      setIsLoading(false);
    })
  }

  const viewWork = (id) => {
    window.location.href='work/view/' + id;
  }
  
  useEffect(() => {
    getWorksData();
  }, [])

  return (
    <div ref={worksRef} id='works-section' className="works">
      <div className="works-header">
        <p>
          <span id='header-title'>Works</span>
          <br />
          <p id='header-description'>Most of my works are personal and school projects.</p>
        </p>
      </div>
      <div className='works-content'>
        {isLoading && <CardSkeleton cards={isDesktop ? 3 : 1} />}
        {
          currentItems.map((work) => {
            return (
              <div key={work.id} className='work-card'>
                <p id='work-title'>{work.title}</p>
                <div onClick={() => viewWork(work.id)} className='work-card-body'>
                  <img className='work-cover' src={work.thumbnail} alt="RE_Work" />
                  <div className='tech-icons'>
                    {
                      work.tools.map((tool, index) => {
                        const icon = WebDevTechIcons.find((icon) => icon.name === tool);
                        if (icon) {
                          return (
                            <span key={index}>{icon.svg}</span>
                          )
                        }
                      })
                    }
                  </div>
                </div>
                <div className='action-buttons'>
                  <a href={work.github != '' ? work.github : '#'} target='_blank'>GITHUB</a>
                  <a href={work.url != '' ? work.url : '#'} target='_blank'>VISIT</a>
                </div>
              </div>
            )
          })
        }
      </div>
        <div className='works-controls'>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>PREV</button>
          <button onClick={handleNextPage} disabled={indexOfLastItem >= worksData.length}>NEXT</button>
        </div>
    </div>
  );
}

export default Works;
 