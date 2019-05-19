import React from 'react';
import { Link } from 'react-router-dom';

function App({ route, history, data }) {
  console.log(data);
  function handleSubmit(event) {
    history.push(`/dogs/${event.target.dog.value}`);
    event.preventDefault();
  }

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-xs">
        <h1 className="text-2xl p-4">Doggo's paradise</h1>
        <div className="max-w-md rounded overflow-hidden shadow-lg px-4 pt-4">
          <form method="get" action="/" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Which dogs do you want to see and rate?
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={route ? route.params.dog : ''}
                name="dog"
                required
              />
            </label>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Search
            </button>

            <ul className="pt-4">
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <Link to={'/dogs/poodle'}>#poodle</Link>
              </li>
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <Link to={'/dogs/dachshund'}>#dachshund</Link>
              </li>
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                <Link to={'/dogs/corgi'}>#corgi</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

// App.getInitialProps = async function(props) {
//   await Promise.resolve();
//   return {
//     name: 'foo'
//   };
// };
