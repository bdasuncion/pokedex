To run:
cd pokedex
npm install
npm start

Challenges:
    I tried to make the PokemonResource method find() asyncronous using promises to better replicate an actual API call but the I could not get quite get it working properly with the filter, it was causing an infinite loop. 
    
    Also I wanted to inject the object for getting the resource to make it more flexible so we can use a mock, connecting to an sql or mongodb database, or from a file etc.
    
    This is my first time using React, so I had to learn it on the fly. My experience is more on Angular and in reality I am more of a backend developer that just happens to able to work on the frontend like additional functionality or small UI elements. 