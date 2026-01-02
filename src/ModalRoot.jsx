import React from 'react'
import ReactDOM from 'react-dom';

const ModalRoot = ({children}) => {
  return ReactDOM.createPortal(<div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'red'
  }}>
    <div style={{
        margin: '16pz 0px'
    }}>
        {children}
    </div>
  </div>, document.getElementById('modal-root1'))
}

export default ModalRoot