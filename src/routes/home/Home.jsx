import React from 'react';
import { useContext } from 'react';
import ProjectStore from "../../context/store";
import { NavLink } from 'react-router-dom';
const Home = () => {
  const [state] = useContext(ProjectStore);

  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <NavLink to="/" className="hover:text-green-500">
              MyApp
            </NavLink>
          </div>
          <div className="space-x-4">
            <NavLink to="/" className="text-gray-300 hover:text-white" activeClassName="text-green-500 font-bold" exact >
              Home
            </NavLink>
            <NavLink to="/register" className="text-gray-300 hover:text-white" activeClassName="text-green-500 font-bold" >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="container max-w-4xl p-8 bg-gray-800 shadow-lg rounded-lg">
          <div className='flex justify-between items-center' >
            <p className='w-[108px]' >
            </p>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Registered Users</h2>
          <button className='py-[5px] px-[25px] bg-[red] text-[#fff] rounded-xl font-sans outline-none' onClick={handleClear}>
            Clear All
          </button>
          </div>
          <div className="flex flex-col gap-4">
            {state.users_data.length > 0 ? (
              state.users_data.map((user, id) => (
                <div key={id} className="p-4 bg-gray-700 border border-gray-600 rounded-lg text-white" >
                  <p className="text-lg font-semibold">{user.email}</p>
                  <p className="text-sm text-gray-400">{user.password}</p>
                  <p className="text-sm">{user.age} years old</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No users registered</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
