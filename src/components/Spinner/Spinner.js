import React from 'react';
import Spinner from 'react-spinkit';
import styles from './Spinner.module.css';

const SpinnerLoader = () => (
  <Spinner
    className={styles.spinner}
    name="ball-spin-fade-loader"
    color="#3784fe"
    fadeIn="none"
  />
);

export default SpinnerLoader;
