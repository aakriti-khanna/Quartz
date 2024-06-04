import React from 'react'
import { Gallery } from '../../Components/Gallery';
import "./GalleryP.css"

const GalleryP = () => {
  return (


    <div className="Gall">

        <div className="Gall1">
          <h1>Gallery</h1>
          <div className="lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
       <div className='Gall2 p-4'>
         <Gallery />
    </div>
    </div>
   
  )
}

export default GalleryP

