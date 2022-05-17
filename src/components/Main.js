import React, { useState, useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twiterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
export const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img src={activePunk.image_preview_url} alt="" />
          </div>
        </div>
        <div className="punkDetails" style={{ color: '#fff' }}>
          {/* <div className="title">nome</div> */}
          <div className="title">{activePunk.name}</div>

          {/* <span className="itemNumber">tokenid</span> */}
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              className="selectedPunk"
              src={activePunk.owner.profile_img_url}
              alt="/"
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="ownerHandle">{activePunk.owner.address}</div>
              <div className="ownerHandle">felipesimoes.eth</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twiterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      Main
    </div>
  )
}
