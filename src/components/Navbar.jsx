import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <h1>My App</h1>

      <ul className='flex space x-4 p-3 cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <ul className='flex space x-4 p-3 cursor-pointer'>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  )
}

export default Navbar