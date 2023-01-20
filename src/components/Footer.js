import React from 'react'

export const Footer = () => {
  let stickyFooter={
        position:"fix",
        width:'100%',
        top:"92.8vh",
  }
  return (
    <>
   <footer style={stickyFooter} className="flex-shrink-0 py-4 bg-dark text-white-50 mt-4">
    <div className="container text-center">
      <small>Copyright &copy; Your Website</small>
    </div>
  </footer>
    </>

  )
}