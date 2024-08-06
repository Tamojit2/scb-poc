import React from 'react'
import Header from '../utils/Header'
import NavigationData from './NavigationData'

const Navigation = () => {
  return (
    <>
        <Header text={'QUICK NAVIGATION'}/>
        <div className='navigation-class' >
            <NavigationData />
        </div>
    </>
  )
}

export default Navigation