import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { API_BASE } from "../utils/api";

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_BASE + '/api/login', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ email, password })
      });
      const json = await res.json();
      if(!res.ok){ toast.error(json?.message || 'Login failed'); return; }
      localStorage.setItem('token', json.token);
      // check test status
      const me = await fetch(API_BASE + '/api/freelancer/me', {
        headers: { 'Authorization': `Bearer ${json.token}` }
      });
      const meJson = await me.json();
      const testGiven = meJson.profile?.test_given;
      if(testGiven) navigate('/coming-soon');
      else navigate('/welcome');
    } catch(e){
      toast.error('Login error');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <Toaster />
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
