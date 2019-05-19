import React from 'react';

function Favorites() {
  return (
    <div>
      <h1>Favs</h1>
    </div>
  );
}

// Favorites.getInitialProps = async function(data) {
//   const response = await fetch(
//     `https://dog.ceo/api/breed/${data.route.params.dog}/images`
//   );
//   const responseJSON = await data.json();
//   return {
//     dogs: responseJSON.message
//   };
// };

export default Favorites;
