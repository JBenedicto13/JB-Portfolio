import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/card-skeleton.css'

const CardSkeleton = ({cards}) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
        <div key={index} className='work-card card-skeleton'>
            <p className='cs-title'><Skeleton count={2} /></p>
            <div className='cs-body'>
                <div className='cs-image'><Skeleton width={500} height={300} /></div>
                <div className='cs-icons'>
                    <Skeleton inline={true} height={50} width={50} borderRadius={50} count={4} />
                </div>
            </div>
            <div className='cs-action-buttons'>
                <Skeleton inline={true} height={50} width={250} count={2} />
            </div>
        </div>
    ))
    
  
}

export default CardSkeleton
