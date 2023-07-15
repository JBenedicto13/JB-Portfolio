import {React, useState, useEffect} from 'react'
import '../styles/viewwork.css';
import { useParams } from 'react-router-dom';
import http from '../utils/http.js';

const ViewWork = () => {
    
    const { id } = useParams();
    const [workData, setWorkData] = useState({});
    const [imgUrls, setImgUrls] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = imgUrls.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const getWorkData = async () => {
        await http.get(`works/view/${id}`)
        .then((res) => {
            setWorkData(res.data);
            getScreenshots(res.data.images);
        })
    }

    const getScreenshots = async (folderName) => {
        await http.get('works/screenshots', { params: { folderName: folderName } })
        .then((res) => {
            setImgUrls(res.data.resources);
        })
        .catch((err) => {
            console.error('Error fetching images:', err);
        });
    }

    useEffect(() => {
        getWorkData();
    },[])

  return (
    <div className='viewWork'>
     <div className='main-content'>
        <div className='header'>
            <h1>{workData.title}</h1>
        </div>
        <div className='content'>
            <div className='description'>
                <p>{workData.description}</p>
            </div>
            <div className='screenshots'>
                <div className='title'>
                    <p>Screenshots</p>
                </div>
                <div className='screenshot-slider'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className='slider-control'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="83" viewBox="0 0 72 83" fill="none">
                            <path d="M70.75 81.7702L1 41.5L70.75 1.22982L70.75 81.7702Z" fill="#D9D9D9" stroke="black"/>
                        </svg>
                    </button>
                    <div className='images'>
                        {
                            currentItems.map((img) => {
                                return (
                                    <img key={img.asset_id} src={img.url} alt={img.filename} />
                                )
                            })
                        }
                        
                    </div>
                    <button onClick={handleNextPage} disabled={indexOfLastItem >= imgUrls.length} className='slider-control'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="83" viewBox="0 0 72 83" fill="none">
                            <path d="M1.25 1.22982L71 41.5L1.25 81.7702L1.25 1.22982Z" fill="#D9D9D9" stroke="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default ViewWork
