const switchbutton = document.querySelector('#switch');
const body = document.querySelector('body')

switchbutton.addEventListener('click', switchTheme());

function switchTheme() {
        body.classList.toggle('dark-html')
        console.log('negro')
};
