import React from 'react'

import './Header.scss'

const Header = ({onLegendClick}) => (
  <header className="Header">
    <h1 className="Header_Title">TEKENTOOL</h1>
    <div>
      <button className="Header_Btn" onClick={onLegendClick} data-bind="js-legend-toggle">
        Legenda
      </button>
      <button className="Header_Btn">
        Annuleer
      </button>
      <button className="Header_Btn Header_Btn--primary">
        Opslaan
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1230, -120)" fill="currentColor">
              <g transform="translate(165, 95)">
                <g transform="translate(947, 0)">
                  <polygon points="124 30 119.5 25 118 26.5 121 30 118 33.5 119.5 35" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  </header>
)

export default Header
