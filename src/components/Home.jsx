import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import NET from 'vanta/dist/vanta.net.min';
import useDarkMode from 'use-dark-mode';

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
};

function Home(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const darkMode = useDarkMode();
  const [data, setData] = useState(null);
  console.log('changed', myRef.current);
  useEffect(() => {
    if (!vantaEffect && myRef.current !== null) {
      console.log('Went in darkmode');
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
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      console.log('destroyed');
    };
  }, [myRef]);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <div ref={myRef}>
      <div className="homepage-container">
        <Fade>
          <div style={styles.mainContainer}>
            <h1 style={styles.nameStyle}>{data?.name}</h1>
            <div style={{ flexDirection: 'row' }}>
              <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>
            <Social />
          </div>
        </Fade>
      </div>
    </div>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
