import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal'
import endpoints from '../constants/endpoints'
import Social from './Social'
import FallbackSpinner from './FallbackSpinner'
import NET from 'vanta/dist/vanta.net.min'
import useDarkMode from 'use-dark-mode'
import { Coffee } from './Coffee'
import Button from '@mui/material/Button'

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

function Home(props) {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const darkMode = useDarkMode(true)
  const [data, setData] = useState(null)
  const [isIntoCoffee, setIsIntoCoffee] = useState(false)

  const handleClick = () => {
    setIsIntoCoffee((s) => !s)
  }

  function startAnimation() {
    setVantaEffect(
      NET(
        darkMode.value
          ? {
              el: myRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x46b6,
              backgroundColor: 0x90909,
              points: 12.0,
            }
          : {
              el: myRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x8c8cff,
              backgroundColor: 0xf3ffff,
              points: 9.0,
            }
      )
    )
  }

  useEffect(() => {
    console.log('darkMode.value', darkMode)
    if (!vantaEffect && myRef.current !== null) {
      startAnimation()
    }
  })

  useEffect(() => {
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err)
  }, [])

  return data ? (
    <div ref={myRef} className="homepage-container">
      <Fade>
        <div className="homepage-content" style={styles.mainContainer}>
          <h1 style={styles.nameStyle}>{data?.name}</h1>

          <div style={{ flexDirection: 'row' }}>
            {/* <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2> */}
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: data?.roles,
              }}
            />
          </div>
          {isIntoCoffee && <Coffee />}
          <Social />
          <Button className="coffee-btn" variant="outlined" onClick={handleClick}>
            {isIntoCoffee ? 'stop' : 'Do u want some coffee?'}
          </Button>
        </div>
      </Fade>
    </div>
  ) : (
    <FallbackSpinner />
  )
}

export default Home
