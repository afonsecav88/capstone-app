import React from 'react'
import { CallToAction } from './CallToAction'
import { Specials } from './Specials';
import { CustomersSay } from './CustomersSay';

export const HomePage  = () => {
  return (
    <>
    <CallToAction/>
    <Specials/>
    <CustomersSay/>
    </>
  )
}
