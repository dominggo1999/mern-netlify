import React, { useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { Routes, Route } from 'react-router-dom';
import { API_URL } from './config/apiUrl';

export const Box = styled.div`
  ${tw`
    w-full 
    h-screen 
    bg-black 
    flex 
    justify-center
    items-center
    text-white
    text-2xl
  `}
`;

const App = () => {
  useEffect(() => {
    const call = async () => {
      const res = await fetch(`${API_URL}/test`);
      const message = await res.json();
      console.log(message);
    };

    call();
  }, []);

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={<p>Home</p>}
        />
        <Route
          path="/about"
          element={<p>About</p>}
        />
      </Routes>
    </Box>
  );
};

export default App;
