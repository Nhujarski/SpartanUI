import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Wrapper from '../Wrapper/Wrapper';

const Card = ({ header, body, footer }) => {
  return (
    <Wrapper>
      <div className='sui-card'>
        <header className='sui-card-header-container'>
          <h1 className='sui-card-header'>{header}</h1>
        </header>
        <main className='sui-card-body-container'>
          <p className='sui-card-body'>{body}</p>
        </main>
        <footer className='sui-card-footer-container'>
          <p className='sui-card-footer'>{footer}</p>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Card;
