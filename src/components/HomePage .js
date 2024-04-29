import React from 'react'
import { CallToAction } from './CallToAction'
import { Specials } from './Specials';
import { CustomersSay } from './CustomersSay';
import { About } from './About';


export const HomePage  = () => {
  return (
    <>
    <CallToAction/>
    <Specials/>
    <CustomersSay/>
    <About/>
    </>
  )
}
