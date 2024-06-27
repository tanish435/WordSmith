import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const [theme, setTheme] = useState('light')

  const lightTheme = () => {
    setTheme('light')
  }

  const darkTheme = () => {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  useEffect(() => {
    authService?.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div>
        <div>
          <Toaster />
        </div>
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  ) : null
}

export default App
