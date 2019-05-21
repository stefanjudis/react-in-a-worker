import React from 'react';
import { Link } from 'react-router-dom';

function App({ route, history, data }) {
  function handleSubmit(event) {
    history.push(`/dogs/?dog=${event.target.dog.value}`);
    event.preventDefault();
  }

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-xs">
        <h1 className="text-2xl p-4">Doggo's paradise</h1>
        <div className="max-w-md rounded overflow-hidden shadow-lg px-4 pt-4">
          <form method="get" action="/dogs" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Which dogs do you want to see?
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={route ? route.params.dog : ''}
                name="dog"
                list="doggos"
                required
              />
            </label>
            <datalist id="doggos">
              <option value="affenpinscher">wufff!</option>
              <option value="african">wufff!</option>
              <option value="airedale">wufff!</option>
              <option value="akita">wufff!</option>
              <option value="appenzeller">wufff!</option>
              <option value="basenji">wufff!</option>
              <option value="beagle">wufff!</option>
              <option value="bluetick">wufff!</option>
              <option value="borzoi">wufff!</option>
              <option value="bouvier">wufff!</option>
              <option value="boxer">wufff!</option>
              <option value="brabancon">wufff!</option>
              <option value="briard">wufff!</option>
              <option value="bulldog">wufff!</option>
              <option value="bullterrier">wufff!</option>
              <option value="cairn">wufff!</option>
              <option value="cattledog">wufff!</option>
              <option value="chihuahua">wufff!</option>
              <option value="chow">wufff!</option>
              <option value="clumber">wufff!</option>
              <option value="cockapoo">wufff!</option>
              <option value="collie">wufff!</option>
              <option value="coonhound">wufff!</option>
              <option value="corgi">wufff!</option>
              <option value="cotondetulear">wufff!</option>
              <option value="dachshund">wufff!</option>
              <option value="dalmatian">wufff!</option>
              <option value="dane">wufff!</option>
              <option value="deerhound">wufff!</option>
              <option value="dhole">wufff!</option>
              <option value="dingo">wufff!</option>
              <option value="doberman">wufff!</option>
              <option value="elkhound">wufff!</option>
              <option value="entlebucher">wufff!</option>
              <option value="eskimo">wufff!</option>
              <option value="frise">wufff!</option>
              <option value="germanshepherd">wufff!</option>
              <option value="greyhound">wufff!</option>
              <option value="groenendael">wufff!</option>
              <option value="hound">wufff!</option>
              <option value="husky">wufff!</option>
              <option value="keeshond">wufff!</option>
              <option value="kelpie">wufff!</option>
              <option value="komondor">wufff!</option>
              <option value="kuvasz">wufff!</option>
              <option value="labrador">wufff!</option>
              <option value="leonberg">wufff!</option>
              <option value="lhasa">wufff!</option>
              <option value="malamute">wufff!</option>
              <option value="malinois">wufff!</option>
              <option value="maltese">wufff!</option>
              <option value="mastiff">wufff!</option>
              <option value="mexicanhairless">wufff!</option>
              <option value="mix">wufff!</option>
              <option value="mountain">wufff!</option>
              <option value="newfoundland">wufff!</option>
              <option value="otterhound">wufff!</option>
              <option value="papillon">wufff!</option>
              <option value="pekinese">wufff!</option>
              <option value="pembroke">wufff!</option>
              <option value="pinscher">wufff!</option>
              <option value="pointer">wufff!</option>
              <option value="pomeranian">wufff!</option>
              <option value="poodle">wufff!</option>
              <option value="pug">wufff!</option>
              <option value="puggle">wufff!</option>
              <option value="pyrenees">wufff!</option>
              <option value="redbone">wufff!</option>
              <option value="retriever">wufff!</option>
              <option value="ridgeback">wufff!</option>
              <option value="rottweiler">wufff!</option>
              <option value="saluki">wufff!</option>
              <option value="samoyed">wufff!</option>
              <option value="schipperke">wufff!</option>
              <option value="schnauzer">wufff!</option>
              <option value="setter">wufff!</option>
              <option value="sheepdog">wufff!</option>
              <option value="shiba">wufff!</option>
              <option value="shihtzu">wufff!</option>
              <option value="spaniel">wufff!</option>
              <option value="springer">wufff!</option>
              <option value="stbernard">wufff!</option>
              <option value="terrier">wufff!</option>
              <option value="vizsla">wufff!</option>
              <option value="weimaraner">wufff!</option>
              <option value="whippet">wufff!</option>
              <option value="wolfhound">wufff!</option>
            </datalist>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Search
            </button>

            <ul className="pt-4">
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <Link to={'/dogs/?dog=poodle'}>#poodle</Link>
              </li>
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <Link to={'/dogs/?dog=dachshund'}>#dachshund</Link>
              </li>
              <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                <Link to={'/dogs/?dog=corgi'}>#corgi</Link>
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
