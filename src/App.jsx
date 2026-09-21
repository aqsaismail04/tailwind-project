import { useState } from 'react'
import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {

  const [getData, setGetData] = useState([])

  const fetchData = async () => {

    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts')

      const data = await response.json()

      setGetData(data)

    } catch (error) {

      console.error('Error fetching data:', error)

    }

  }

  return (
    <div>

      <button
        onClick={fetchData} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Get Products
      </button>

    </div>
  )
}

export default App