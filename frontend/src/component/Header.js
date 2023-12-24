
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import headerImage from '../img/jobbgg.png';
import headImage from '../img/jobbg.png';
import SearchInputEl from './SearchInputEl';

const Header = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [highlightedLetters, setHighlightedLetters] = useState([]);
  const [highlightingIndex, setHighlightingIndex] = useState(-1);

  const jobWords = ['Job','Career', 'Position', 'Path', 'Call'];

  // Adjust start positions for each word
  const startPositions = [0,0,0,0,0,0]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % jobWords.length);
      setHighlightedLetters([]); 
      setHighlightingIndex(startPositions[wordIndex]); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [jobWords]);

  useEffect(() => {
    let timer;
    const currentWordLength = jobWords[wordIndex]?.length;

    if (highlightingIndex < currentWordLength) {
      timer = setTimeout(() => {
        setHighlightedLetters((prev) => {
          const updatedLetters = [...prev];
          updatedLetters.push(jobWords[wordIndex][highlightingIndex]);
          return updatedLetters;
        });
        setHighlightingIndex((prev) => prev + 1);
      }, 300); 
    }
    return () => clearTimeout(timer);
  }, [highlightingIndex, jobWords, wordIndex]);

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 350,
    background: `url(${headImage}) no-repeat left, url(${headerImage}) no-repeat right`,
    backgroundSize: 'contain',
    backgroundPosition: 'left, right',
    backgroundColor: '#3f0b54',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  };



  return (
    <>
      <Box sx={headerStyle}>
        <div style={{ textAlign: 'center', maxWidth: '98%' }}>
          <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
            <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
              <span style={{ backgroundImage: `linear-gradient(to right, #6a11cb, #2575fc)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '3rem' }}>JOB GUILD</span>
              <div>
                <span style={{ color: '#fff' }}>Where Innovation Meets Diversity</span>
              </div>
            </h1>
            <p style={{ textAlign: 'center', maxWidth: '98%', color: '#c72697' }}>
              <span style={{ position: 'relative' }}>
                Unlock Your Potential, Secure Your Dream {highlightedLetters.join('')} in 4 Steps!
                {/* <span style={strokeStyle}></span> */}
              </span>
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%' }}>
            <SearchInputEl />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Header;



