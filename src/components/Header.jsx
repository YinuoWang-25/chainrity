import React from 'react';

const styles = {
  container: {
      height: '100vh',
  },
  header: {
      height: '0.5vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #e0e0e0'
  },

  brand: {
    flex: 1,
    padding: '20px'
  },
  
  buttonComponent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    paddingRight: "20px"
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease'
  }
};

export const Header = () => {
  return (
    <div style={styles.header}>
      <Brand />
      <Button />
    </div>
  );
}

const Brand = () => {
  return (
    <div style={styles.brand}>
      <h1>Chanrity</h1>
    </div>
  );
}

const Button = () => {
  return (
    <div style={styles.buttonComponent}>
      <button style={styles.button} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}>
        Connect Wallet
      </button>
    </div>
  );
}
