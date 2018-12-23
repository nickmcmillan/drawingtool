import React from 'react'

import './Aside.scss'

const Aside = ({ children }) => (
  <aside className="Aside">
    {/* <button data-bind="js-aside-toggle" className="Aside_Toggle">
      +
      <span className="u-visuallyhidden">Toggle Controls</span>
    </button> */}
    <div className="Aside_Inner">

      {children}

    </div>

  </aside>
)

export default Aside
