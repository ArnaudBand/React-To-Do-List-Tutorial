import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '10px 0',
    lineHeight: '1.5em',
    border: '1px solid #000',
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '2em',
          fontWeight: '600',
          lineHeight: '1em',
          color: '#eec',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        todos
      </h1>
    </header>
  );
};

export default Header;
