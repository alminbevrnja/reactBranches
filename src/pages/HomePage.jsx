import React from 'react'
import HeroComponent from '../components/HeroComponent'
import FeatureComponent from '../components/FeatureComponent'
import CustomersComponent from '../components/CustomersComponent'
import NewsComponent from '../components/NewsComponent'
import FooterComponent from '../components/FooterComponent'
import FooterBottom from '../components/FooterBottom'


function HomePage() {
  return (
    <div>
      <HeroComponent/>
      <FeatureComponent/>
      <CustomersComponent/>
      <NewsComponent/>
      <FooterComponent/>
      <FooterBottom/>
    </div>
  )
}

export default HomePage