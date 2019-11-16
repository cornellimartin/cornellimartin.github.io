const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainfall = document.createElement('p');
        let image = document.createElement('img');
    
        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        annualRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name);
        
        section.appendChild(h2);
        section.appendChild(motto);
        section.appendChild(yearFounded);
        section.appendChild(population);
        section.appendChild(annualRainfall);
        section.appendChild(image);
    
        document.querySelector('div.towns').appendChild(section);
    }
    }
  });


/*
Display the individual town data with the motto, year founded, population, and annual rainfall.


"towns": [
{
"name": "Franklin",
"photo": "franklin.jpg",
"motto": "Where you will grow!",
"yearFounded": 1788,
"currentPopulation": 30458,
"averageRainfall": 21,
"events": [
"March 4: March to the Drum of Donuts",
"September 5 - 11: Founder Days",
"December 1 - 26: Christmas in the Heart"
]
},

*/