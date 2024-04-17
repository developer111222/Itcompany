import React from 'react'

const NewsLetter = () => {
  return (
    <main className="main-content">
      <div className='news'>
      <div className='flex' style={{flex: "1 1 0%"}}>
        <div className='left-col'>
          <h2 style={{color:"white"}}>Signup For Our Newsletter</h2>
          <p style={{color:"white"}}>Stay up to date with the cool tech HCode & the World is building.</p>
        </div>
        <div className='right-col'>
          <form className='flex' style={{gap:"20px"}}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      </div>
      </main>
  )
}

export default NewsLetter
