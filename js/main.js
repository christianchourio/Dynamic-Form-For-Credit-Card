let card = document.querySelector('#card'),
btnOpenForm = document.querySelector('#btn-open-form'),
form = document.querySelector('#card-form');

card.addEventListener('click', () => {
    card.classList.toggle('active');
});

btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active');
    form.classList.toggle('active');
});
