import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Tactics Architect</title>
        <meta property="og:title" content="Corporate Tactics Architect" />
      </Helmet>
    </div>
  )
}

export default Home
