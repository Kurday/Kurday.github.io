window.onload = function(e){

  const cards = document.querySelectorAll('.card'),
        card__button = document.querySelector('.card__button'),
        front = document.querySelector('.front'),
        back = document.querySelector('.back'),
        card__backbutton = document.querySelector('.card__backbutton');
       










//***********PARALLAX EFFECT*********************************************************
function InitParallax(){
    for(let i=0; i<cards.length; i++){
      const card = cards[i];
      card.addEventListener('mousemove', parallax);
      // document.addEventListener('mousemove', parallax); если хотим на весь документ
    }

    function parallax(event){
      this.querySelectorAll('.card__layer').forEach(card__layer => {
        //для каждого слоя своя скорость
        let speed = card__layer.getAttribute('data-speed')
        //задаем свойство с изменяющимся параметром
        card__layer.style.transform = `translateX(${event.clientY*speed/1000}px)`;

      });
    }
}





//*********3D HOVER EFFECT ON THE CARD*********************************
function initCards(){
    //перебираем массив элементов cards и вызываем функции
    for(let i=0; i<cards.length; i++){
      const card = cards[i];
      card.addEventListener('mousemove', startRotate);
      card.addEventListener('mouseout', stopRotate);
    }

    function startRotate(event){
      const cardItem = this.querySelector('.card-item')
      const halfHeight = cardItem.offsetHeight / 2;
      const halfWidth = cardItem.offsetWidth / 2;

      cardItem.style.transform = 'rotateX('+ - (event.offsetY - halfHeight) / 10 
      +'deg) rotateY('+(event.offsetX - halfWidth ) / 10+'deg)';
    }

    function stopRotate(event){
      const cardItem = this.querySelector('.card-item')
      cardItem.style.transform = 'rotate(0)';
    }
}




front.addEventListener('click', function(event){
  const target = event.target
  const frontButton = target.closest('.front');

  if (frontButton) {
     console.log('нажали');
    } 
});




//кнопка перевертышь на фронтальной части карты
card__button.onclick = function(){
  front.classList.add("front__active");
  back.classList.add("back__active");
  card__button.classList.add("hide");
  card__backbutton.classList.add("buttonBack");
};

//кнопка на Обратной стороне карточки
card__backbutton.onmousemove = function(){
  // card__backbutton.classList.add("buttonMove");
  card__backbutton.addEventListener('mousemove', function(){card__backbutton.classList.add("buttonMove")});
   card__backbutton.addEventListener('mouseout', function(){card__backbutton.classList.remove("buttonMove")});
}




// initialize functions
InitParallax();
initCards();
}


