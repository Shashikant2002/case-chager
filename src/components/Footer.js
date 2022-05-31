import React from 'react'

const Footer = (props) => {
    let DarkStyle = {
        color: props.mode === 'dark' ? '#fff' : 'black',             
        backgroundColor: props.mode === 'dark' ? 'rgb(33 37 41)' : '#fff'
    }
  return (
    <>
      <div className={`footer bg-${props.mode} text-${props.mode} text-center mt-5 py-2`}>
        <p className='m-0' style={DarkStyle}>© 2022 <a className={`text-${DarkStyle}`} href="https://www.weebinnovation.com/">Weeb Innovation</a>. All rights reserved. Privacy Policy.</p>
      </div>
      
    </>
  )
}

export default Footer
