import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ProjectStore from "../../context/store";

const Register = () => {
  const [state, dispatch] = useContext(ProjectStore);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch({type: 'REGISTER_USER', email, password, age });
  };
  console.log(state)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container max-w-lg p-8 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>
        <form onSubmit={handleSubmitRegister} className='flex flex-col gap-4' autoComplete="off">
          <input required className='p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400' type="email" name="email" placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
          <input required className='p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400' type="password" name="new-password" placeholder="Password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)}/>
          <input required className='p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400' type="number" name="age" placeholder="Age" autoComplete="off" onChange={(e) => setAge(e.target.value)} style={{ MozAppearance: 'textfield',WebkitAppearance: 'none',appearance: 'none'}} />
          <button className='mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300' >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
