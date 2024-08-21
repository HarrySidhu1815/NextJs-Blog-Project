import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={'/images/site/profile.png'} alt={'Harry Picture'} width={300} height={300} />
      </div>
      <h1>Hi, I'm Harry</h1>
      <p>I blog about the web developement and data science frameworks like torch and react</p>
    </section>
  )
}
