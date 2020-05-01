const burger = document.getElementById('burger_img');
const hamCont = document.querySelector('.ham__container');

const overlay = document.querySelector('.overlay');



burger.addEventListener('click' ,function(e){

        overlay.style.display = 'block';
    
});


hamCont.addEventListener('click' ,function(e){

        overlay.style.display = 'block';

    
});

const cross = document.getElementById('cross_img');
cross.addEventListener('click' ,function(e){

        overlay.style.display = 'none';

    
});


console.log('Hello from Callum and Dylan, The creators of the site!');

