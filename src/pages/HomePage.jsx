import React from 'react'
import HeroComponent from '../components/HeroComponent'
import FeatureComponent from '../components/FeatureComponent'
import CustomersComponent from '../components/CustomersComponent'
import NewsComponent from '../components/NewsComponent'
import FooterComponent from '../components/FooterComponent'


function HomePage() {
  return (
    <div>
      <HeroComponent/>
      <FeatureComponent/>
      <CustomersComponent/>
      <NewsComponent/>
      <FooterComponent/>
    </div>
  )
}

export default HomePage