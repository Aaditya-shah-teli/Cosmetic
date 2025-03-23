import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <StyledWrapper>
      <div className="skeleton-container">
        <div className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-text" />
          <div className="skeleton-price" />
        </div>
        <div className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-text" />
          <div className="skeleton-price" />
        </div>
        <div className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-text" />
          <div className="skeleton-price" />
        </div>
        <div className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-text" />
          <div className="skeleton-price" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
  width: 100vw;  /* Full screen width */
  background-color: #f0f0f0;
  padding: 0 16px;
  box-sizing: border-box; /* Make sure padding doesn't mess up the full screen layout */

  .skeleton-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    width: 100%;
    justify-items: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }

  .skeleton-card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    animation: skeleton-loading 1.5s ease-in-out infinite;
    width: 100%;
    max-width: 280px; /* Limit the width of each card */
  }

  .skeleton-image {
    width: 100%;
    height: 180px;
    background-color: #e0e0e0;
    border-radius: 8px;
    animation: skeleton-loading 1.5s ease-in-out infinite;
  }

  .skeleton-title,
  .skeleton-text,
  .skeleton-price {
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: skeleton-loading 1.5s ease-in-out infinite;
  }

  .skeleton-title {
    width: 70%;
    height: 20px;
    margin-top: 12px;
  }

  .skeleton-text {
    width: 90%;
    height: 16px;
    margin-top: 8px;
  }

  .skeleton-price {
    width: 50%;
    height: 16px;
    margin-top: 8px;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #d0d0d0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 767px) {
    .skeleton-container {
      grid-template-columns: 1fr; /* One card per row on small screens */
    }
  }

  /* Tablet and small desktop responsiveness */
  @media (max-width: 1024px) {
    .skeleton-container {
      grid-template-columns: repeat(2, 1fr); /* Two cards per row on medium screens */
    }
  }
`;