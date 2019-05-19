import React from 'react';
import { isSW } from '../util/is-sw';

function Dogs({ data }) {
  return (
    <div>
      {data.dogs && data.dogs.length ? (
        <div className="pt-8">
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
        <h1>no dogs</h1>
      )}
    </div>
  );
}

Dogs.getInitialProps = async function(props) {
  console.log(props);
  if (props.match.params.dog) {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${props.match.params.dog}/images`
      );
      const responseJSON = await response.json();

      console.log(responseJSON);
      return {
        dogs: responseJSON.message.splice(0, 12)
      };
    } catch (e) {
      console.error(e);
    }
  }

  return {
    dogs: []
  };
};

export default Dogs;
