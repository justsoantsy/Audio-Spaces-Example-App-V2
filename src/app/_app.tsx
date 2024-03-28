// src/app/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../globals.css'; // Adjust the relative path to point to your globals.css

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
