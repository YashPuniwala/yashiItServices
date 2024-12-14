    import React from 'react'
    
    const MsgBox = ({txtColor, userName}) => {
      return (
      <h1 style={{ color: txtColor }}>Hello, {userName}</h1>
      )
    }
    
    export default MsgBox