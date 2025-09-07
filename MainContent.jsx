import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3', minHeight: '200px' }}>
      <h2 style={{ textAlign: 'center', color: 'darkslategray' }}>Welcome to My City Collection</h2>
      <p style={{ marginTop: '15px', lineHeight: '1.6', color: '#444' }}>
        Here you can find details about some of my favorite cities around the world. Each city has unique features, culture, and attractions that make it special.
      </p>
    </main>
  );
}

export default MainContent;