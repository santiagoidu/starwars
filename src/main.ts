const axios = require('axios').default;

axios
  .get('https://swapi.dev/api/people/')
  .then(response => {
    const text = response.data.results.map(character => {
      return `
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>              
                    <strong>${character.name}</strong>
                    <br/>
                    Birth year: ${character.birth_year}<br/>
                    Eye color: ${character.eye_color}<br/>
                    Gender: ${character.gender}<br/>
                    Hair color: ${character.hair_color}<br/>
                    Height: ${character.height}<br/>
                  </p>
                </div>
              </div>
            </article>
          </div>
      `;
    }).join('');

    document.getElementById('section').innerHTML = text;
  })
  .catch(err => {
    console.log(err);
  });
