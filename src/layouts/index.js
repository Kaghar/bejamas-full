import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'




const Layout = ({ children, data }) => (

  
  
  <div>
    <Helmet
      title= 'Trucking'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        
      ]}
    />  
    <Header siteTitle='Bejamas' />
    <div> 
      {children()}
    </div>
  </div>
)


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout



