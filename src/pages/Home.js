import React from 'react';
import { Link } from 'react-router-dom';

function App({ route, history, data }) {
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
                list="doggos"
                required
              />
            </label>
            <datalist id="doggos">
              <option value="affenpinscher">🐶</option>
              <option value="african">🐶</option>
              <option value="airedale">🐶</option>
              <option value="akita">🐶</option>
              <option value="appenzeller">🐶</option>
              <option value="basenji">🐶</option>
              <option value="beagle">🐶</option>
              <option value="bluetick">🐶</option>
              <option value="borzoi">🐶</option>
              <option value="bouvier">🐶</option>
              <option value="boxer">🐶</option>
              <option value="brabancon">🐶</option>
              <option value="briard">🐶</option>
              <option value="bulldog">🐶</option>
              <option value="bullterrier">🐶</option>
              <option value="cairn">🐶</option>
              <option value="cattledog">🐶</option>
              <option value="chihuahua">🐶</option>
              <option value="chow">🐶</option>
              <option value="clumber">🐶</option>
              <option value="cockapoo">🐶</option>
              <option value="collie">🐶</option>
              <option value="coonhound">🐶</option>
              <option value="corgi">🐶</option>
              <option value="cotondetulear">🐶</option>
              <option value="dachshund">🐶</option>
              <option value="dalmatian">🐶</option>
              <option value="dane">🐶</option>
              <option value="deerhound">🐶</option>
              <option value="dhole">🐶</option>
              <option value="dingo">🐶</option>
              <option value="doberman">🐶</option>
              <option value="elkhound">🐶</option>
              <option value="entlebucher">🐶</option>
              <option value="eskimo">🐶</option>
              <option value="frise">🐶</option>
              <option value="germanshepherd">🐶</option>
              <option value="greyhound">🐶</option>
              <option value="groenendael">🐶</option>
              <option value="hound">🐶</option>
              <option value="husky">🐶</option>
              <option value="keeshond">🐶</option>
              <option value="kelpie">🐶</option>
              <option value="komondor">🐶</option>
              <option value="kuvasz">🐶</option>
              <option value="labrador">🐶</option>
              <option value="leonberg">🐶</option>
              <option value="lhasa">🐶</option>
              <option value="malamute">🐶</option>
              <option value="malinois">🐶</option>
              <option value="maltese">🐶</option>
              <option value="mastiff">🐶</option>
              <option value="mexicanhairless">🐶</option>
              <option value="mix">🐶</option>
              <option value="mountain">🐶</option>
              <option value="newfoundland">🐶</option>
              <option value="otterhound">🐶</option>
              <option value="papillon">🐶</option>
              <option value="pekinese">🐶</option>
              <option value="pembroke">🐶</option>
              <option value="pinscher">🐶</option>
              <option value="pointer">🐶</option>
              <option value="pomeranian">🐶</option>
              <option value="poodle">🐶</option>
              <option value="pug">🐶</option>
              <option value="puggle">🐶</option>
              <option value="pyrenees">🐶</option>
              <option value="redbone">🐶</option>
              <option value="retriever">🐶</option>
              <option value="ridgeback">🐶</option>
              <option value="rottweiler">🐶</option>
              <option value="saluki">🐶</option>
              <option value="samoyed">🐶</option>
              <option value="schipperke">🐶</option>
              <option value="schnauzer">🐶</option>
              <option value="setter">🐶</option>
              <option value="sheepdog">🐶</option>
              <option value="shiba">🐶</option>
              <option value="shihtzu">🐶</option>
              <option value="spaniel">🐶</option>
              <option value="springer">🐶</option>
              <option value="stbernard">🐶</option>
              <option value="terrier">🐶</option>
              <option value="vizsla">🐶</option>
              <option value="weimaraner">🐶</option>
              <option value="whippet">🐶</option>
              <option value="wolfhound">🐶</option>
            </datalist>
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
