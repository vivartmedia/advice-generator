// src/components/AdviceGenerator.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdviceGenerator: React.FC = () => {
  const [advice, setAdvice] = useState<string>('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  const handleNewAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <img src="/images/advice-icon.png" className="card-img-top" alt="Advice Icon" />
            <div className="card-body text-center">
              <h5 className="card-title">Here's Your Advice:</h5>
              <p className="card-text">{advice}</p>
              <button className="btn btn-primary" onClick={handleNewAdvice}>Get New Advice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdviceGenerator;
