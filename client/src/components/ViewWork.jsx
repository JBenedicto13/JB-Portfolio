import {React, useState, useEffect} from 'react'
import '../styles/viewwork.css';
import SS from '../assets/RE-SS.png';
import { useParams } from 'react-router-dom';
import http from '../utils/http.js';

const ViewWork = () => {
    
    const { id } = useParams();
    const [workData, setWorkData] = useState({});

    const getWorkData = () => {
        http.get(`works/view/${id}`)
        .then((res) => {
            setWorkData(res.data);
        })
    }

    const getScreenshots = () => {
        http.get('works/images/folder', { params: { folderName: 'Portfolio' } })
        .then((res) => {
            const imageUrls = res.data;
            console.log(res.data);
        })
        .catch((err) => {
            console.error('Error fetching images:', err);
        });
    }

    useEffect(() => {
        getScreenshots();
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
                    <span className='slider-control'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="83" viewBox="0 0 72 83" fill="none">
                            <path d="M70.75 81.7702L1 41.5L70.75 1.22982L70.75 81.7702Z" fill="#D9D9D9" stroke="black"/>
                        </svg>
                    </span>
                    <div className='images'>
                        <img src={SS} alt="" />
                    </div>
                    <span className='slider-control'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="83" viewBox="0 0 72 83" fill="none">
                            <path d="M1.25 1.22982L71 41.5L1.25 81.7702L1.25 1.22982Z" fill="#D9D9D9" stroke="black"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default ViewWork
