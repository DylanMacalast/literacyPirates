const ham1 = document.querySelector('.ham1');
const ham2 = document.querySelector('.ham2');
const ham3 = document.querySelector('.ham3');
const hamCont = document.querySelector('.ham__container');

const overlay = document.querySelector('.overlay');
console.log(ham1);

ham1.addEventListener('click' ,function(e){

        overlay.style.display = 'block';
    
});


ham2.addEventListener('click' ,function(e){

        overlay.style.display = 'block';
    
});
ham2.addEventListener('click' ,function(e){

        overlay.style.display = 'block';
    
});

hamCont.addEventListener('click' ,function(e){

        overlay.style.display = 'block';

    
});

const cross = document.querySelector('.cross');

cross.addEventListener('click' ,function(e){

        overlay.style.display = 'none';

    
});

