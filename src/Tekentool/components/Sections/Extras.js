import React from 'react'

import './Controls.scss'
import './Section.scss'

const Extras = ({
  onCheckboxChange,
  iconType,
  exportPNG,
  clearCanvas,
  serialize,
  destroy,
}) => (
  <section className="Section">
    <h2 className="Section-heading">Extras</h2>
    <div className="btn-wrapper">
      <input
        className="Checkbox"
        type="checkbox"
        onChange={onCheckboxChange}
        name="toggle-icon-types"
        checked={iconType === 'alternateIcon'}
        id="js-checkbox"
      />
      <label htmlFor="js-checkbox" className="Label">Use symbols</label>
    </div>

    <button onClick={serialize} className="Button">Save + Restore ✨</button>
    <button onClick={exportPNG} className="Button">Export to png</button>
    <button onClick={clearCanvas} className="Button">Clear canvas</button>
    <button onClick={destroy} className="Button">Destroy</button>
  </section>
)

export default Extras
