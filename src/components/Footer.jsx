import React from 'react'

function Footer() {
  return (
    <footer className="bg-secondary text-white text-center py-3">
    <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
  </footer>
);
}

export default Footer