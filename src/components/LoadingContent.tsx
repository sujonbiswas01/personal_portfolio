import React from 'react'

const LoadingContent = () => {
  return (
    <div>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(255,255,255,0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'background-color 0.3s'
    }}>
      <div style={{
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          border: '8px solid #f3f3f3',
          borderTop: '8px solid #555',
          borderRadius: '50%',
          width: 56,
          height: 56,
          animation: 'spin 1s linear infinite'
        }} />
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
    </div>
  )
}

export default LoadingContent