const form = document.getElementById('form');
const email = document.getElementById('email');
const errorIcon = document.querySelector('.icon-error');
const errorText = document.querySelector('.text-error');
const logoDesktop = document.querySelector('.logo-desktop');
const logoMobile = document.querySelector('.logo-mobile');
const recizeText = document.getElementById('recize')

const updateImage = () => {
    let screenWidth = window.innerWidth;
    if(screenWidth >= 1000) {
        logoMobile.classList.add('hide')
        logoDesktop.classList.remove('hide')
        recizeText.classList.add('recize')
    } else if (screenWidth < 1000) {
        logoMobile.classList.remove('hide')
        logoDesktop.classList.add('hide')
        recizeText.classList.remove('recize')
    }
}

updateImage()

window.addEventListener('resize', updateImage);


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => { 
    let emailValue = email.value.trim();


    if(emailValue === '') {
        errorText.classList.remove('hide');
        email.classList.add('email-error');
        errorIcon.classList.remove('hide')
    } else if (!isValidEmail(emailValue)) {
        errorText.classList.remove('hide');
        email.classList.add('email-error');
        errorIcon.classList.remove('hide')
    } else {
        errorText.classList.add('hide');
        email.classList.remove('email-error');
        errorIcon.classList.add('hide');
    }

}