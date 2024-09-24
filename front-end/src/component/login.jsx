import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/a', { userName, pwd });
            console.log(response);
            
            localStorage.setItem('user', JSON.stringify(response.data));
            // Redirect to Dashboard
        } catch (error) {
            alert('Invalid login details',error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
