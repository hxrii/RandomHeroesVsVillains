//jshint esversion:6
const jsdom = require('jsdom')
const supervillains = require('supervillains');
const superheroes = require('superheroes');



let heroGenerate = ()=>{

var myHero = superheroes.random();
console.log("Hero is : "+myHero);
return myHero;
}

let villainGenerate = ()=>{

var Villain = supervillains.random();
console.log("Villain is : "+Villain);
return Villain;
}

jquery(".refresh").on("click",function(){
    jquery("#hero").text(heroGenerate());
    jquery("#villain").text(villainGenerate());
})

