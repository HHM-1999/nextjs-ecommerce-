import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useRouter } from 'next/router'
import NavbarComp from '../components/Navbar'
const noAuthRequired = ['/', '/login', '/signup']

function App({ Component, pageProps }: AppProps) {
 const router = useRouter()

    return (
    <AuthContextProvider>
     <NavbarComp></NavbarComp>
      {noAuthRequired.includes(router.pathname) ? (
          
             <Component {...pageProps} />
      
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
 
}

export default App;
