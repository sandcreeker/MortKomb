const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Sai', 'Kunai', 'Fists'],
  attack: function () {
    console.log(player1.name + '' + 'Fight...' );
  }
};

const player2 = {
  name: 'Sub-Zero',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ice-Sword', 'Icicles'],
  attack: function () {
    console.log(player2.name + '' + 'Fight...' );
  }
};

function createPlayer(playerClass, playerName) {
  const $player1 = document.createElement('div');
  $player1.classList.add(playerClass);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $progressbar.appendChild($life);
  $life.style.width = playerName.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $progressbar.appendChild($name);
  $name.innerText = playerName.name;

  const $img = document.createElement('img');
  $img.src = playerName.img;

  
  $arenas.appendChild($player1);
  

  $character.appendChild($img);

}

const $arenas = document.querySelector('.arenas');

createPlayer('player1', player1);
createPlayer('player2', player2);

player1.attack();
player2.attack();