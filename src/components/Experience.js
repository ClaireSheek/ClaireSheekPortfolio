import React from 'react'

function Experience({company, date, title, description, item1, item2, item3}) {
  return (
    <div className="experience">
      <div className="positionInfo">
        <h3 className="accentColor">{company}</h3>
        <h4 className="accentColor">{date}</h4>
      </div>
      <h4 className="accentColor">{title}</h4>
      <p>{description}</p>
      <h4>Noted Accopmlishments:</h4>
      <ol>
        {item1}
        {item2}
        {item3}
      </ol>
      
    </div>
  )
}

export default Experience
