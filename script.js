const openBtn = document.querySelector('.title');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.container')
const music = document.querySelector('.music')

openBtn.addEventListener('click', () => {
    container.classList.add('open');
    music.play();
})

closeBtn.addEventListener('click', () => {
    container.classList.remove('open');
    music.pause();
})