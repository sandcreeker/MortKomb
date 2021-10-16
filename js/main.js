const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Sai', 'Kunai', 'Fists'],
  attack: function () {
    console.log(player1.name + '' + 'Fight...' );
  }
};

const player2 = {
  player: 2,
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ice-Sword', 'Icicles'],
  attack: function () {
    console.log(player2.name + '' + 'Fight...' );
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  };

  return $tag;

};

function createPlayer(playerName) {
  const $player1 = createElement('div', 'player' + playerName.player);
  

  const $progressbar = createElement('div', 'progressbar');
  
  $player1.appendChild($progressbar);

  const $character = createElement('div', 'character');
  
  $player1.appendChild($character);

  const $life = createElement('div', 'life');
  
  $progressbar.appendChild($life);
  $life.style.width = playerName.hp + '%';

  const $name = createElement('div', 'name');
  
  $progressbar.appendChild($name);
  $name.innerText = playerName.name;

  const $img = createElement('img');
  $img.src = playerName.img;

  $character.appendChild($img);

  return $player1;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' ' + '.life');

  player.hp -= (Math.ceil(Math.random() * 20));
  // player.hp -= 20;
  console.log(player.hp)
  
  

  $playerLife.style.width = player.hp + '%';
  

  if (player.hp < 0) {
    $arenas.appendChild(playerLose(player.name));
    $randomButton.disabled = true
  }

}

function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';

  return $loseTitle;
  
}

$randomButton.addEventListener('click', function(){
  console.log('click');
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

