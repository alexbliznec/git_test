'use string'
const fs = require('fs');

module.exports.pokemons = require('./pokemonsList');


//const hiddenPokemon = pokemons[Math.floor(Math.random()*pokemons.length)];


for (let i = 0; i < 10; i++){
    fs.mkdir(`0${i+1}`, err =>{
        if (err){
            new Error('произошла ошибка');
        }
        console.log('папки созданы');
    });
}

const hide = (path, pokArr) => {
    fs.appendFile(`${path}/pokemon.txt`, `${pokArr[Math.floor(Math.random()*pokArr.length)]} \n`, err =>{
        if (err) {
        new Error('Покемон не спрятался');
            }
        fs.readFile(`${path}/pokemon.txt`, 'utf8', (err, data) => {
            if(err){
                new Error('ошибка, файл не прочтен');
                }
            console.log(`спрятан покемон ${data}`);
            })
        });
    }   

  //  hide('01', pokemons);
  //  hide('02', pokemons);

module.exports.hide = hide;

const seek = (path, err) => {
    if (err){
        throw console.error('error');
    }
    fs.readFile(`${path}/pokemon.txt`, 'utf8', (err, data) =>{
        if (err){
            throw console.error('error');
        }
        console.log(`Найден покемон ${data}`);
    });
}

module.exports.seek = seek;
