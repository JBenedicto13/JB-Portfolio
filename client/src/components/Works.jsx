import '../styles/works.css';
import WebDevTechIcons from './data/webdevTech';
import http from '../utils/http';
import { useEffect, useState } from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import CardSkeleton from './CardSkeleton';

function Works(isDesktop) {

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
    <div id='works-section' className="works">
      <div className="works-header">
        <p>
          <span>Works</span>
          <br />
          Most of my works are personal and school projects.
        </p>
      </div>
      <div className='works-content'>
        {isLoading && <CardSkeleton cards={isDesktop ? 3 : 1} />}
        {
          currentItems.map((work) => {
            return (
              <div key={work.id} className='work-card'>
                <p>{work.title}</p>
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
 