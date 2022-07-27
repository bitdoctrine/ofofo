import { useState } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signin } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
    <div className="w-full h-[95vh] bg-blue-100 flex flex-col justify-center items-start p-16">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start">
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>log in</button>
      </form>
    </div>
  );
}
