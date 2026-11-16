import { useState } from 'react'
import './App.css'
function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="container">
      <h1>
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h1>
      <p>
        {isLogin
          ? 'Login to your account'
          : 'Register to get started'}
      </p>
      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p>
        {isLogin
          ? "Don't have an account?"
          : 'Already have an account?'}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? ' Register' : ' Login'}
        </span>
      </p>
    </div>
  )
}
export default App