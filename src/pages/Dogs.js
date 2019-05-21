import React from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';

function Dogs({ data }) {
  return (
    <div className="p-4">
      <Link
        to={'/'}
        className="inline-block mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Bo back
      </Link>
      {!data.error && data.dogs.length ? (
        <div className="pt-4">
          <ul className="flex flex-wrap">
            {data.dogs.map((dogImage, index) => (
              <li style={{ height: '250px', flex: '1 1 200px' }} key={index}>
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src={dogImage}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Oh noes... {data.error}</strong>
        </div>
      )}
    </div>
  );
}

Dogs.getInitialProps = async function(props) {
  console.log(props);
  const dogParam = qs.parse(props.location.search).dog;
  if (dogParam) {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${dogParam}/images`
      );
      const responseJSON = await response.json();

      if (responseJSON.code === '404') {
        return {
          error: responseJSON.message,
          dogs: []
        };
      }

      return {
        dogs: responseJSON.message.splice(0, 12)
      };
    } catch (e) {
      console.error(e);
    }
  }

  return {
    error: 'Please define `dog` query param',
    dogs: []
  };
};

export default Dogs;
