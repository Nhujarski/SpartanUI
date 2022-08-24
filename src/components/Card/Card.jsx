import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ header, body, footer, size }) => {
  return (
    <div className={['sui-card', `sui-card-${size}`].join(' ')}>
      <header className='sui-card-header-container'>
        <h1 className='sui-card-header'>{header}</h1>
      </header>
      <main className='sui-card-body-container'>
        <img className='sui-card-body' src={body} />
      </main>
      {footer ? (
        <footer className='sui-card-footer-container'>
          <div className='sui-card-footer'>{footer}</div>
        </footer>
      ) : null}
    </div>
  );
};

export default Card;
