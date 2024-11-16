const curtain = document.getElementById('curtain');
const lamp = document.getElementById('lamp');
const light = document.getElementById('light');
const wizard = document.getElementById('wizard');
const Hat = document.getElementById('Hat');
const Rabbit = document.getElementById('Rabbit');
const Bird = document.getElementById('Bird');

curtain.addEventListener('click', function() {
    this.classList.remove('lift');
    this.classList.add('open');
});

curtain.addEventListener('mouseenter', function() {
    if (!this.classList.contains('open')) {
        this.classList.add('lift');
    }
});

curtain.addEventListener('mouseleave', function() {
    if (!this.classList.contains('open')) {
        this.classList.remove('lift');
    }
});

lamp.addEventListener('click', function() {
    if (!light.classList.contains('active')) {
        light.style.display = 'block'; 

        setTimeout(() => {
            light.classList.add('active');
        }, 10); 
    } else {
        light.classList.remove('active');
    }
    wizard.classList.toggle('on');
    Hat.classList.toggle('on');
    Rabbit.classList.toggle('on');
    Bird.classList.toggle('on');
});

Rabbit.addEventListener('click', function() {
    this.style.transform = 'translateY(15vh)';
    Bird.style.display = 'block';
    setTimeout(() => {
        this.style.display = 'none';
        Bird.style.transform = 'translateY(-15vh)';
    }, 500);
});

Bird.addEventListener('click', function() {
    this.style.transform = 'translateY(0px)';
    Rabbit.style.display = 'block';
    setTimeout(() => {
        this.style.display = 'none';
        Rabbit.style.transform = 'translateY(0px)';
    }, 500);
});