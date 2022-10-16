const btcenter = document.getElementById('bt-center');
function toggleMenu(event){
    const nav=document.getElementById('nav');
    nav.classList.toggle('active')
    const main=document.getElementById('main');
    main.classList.toggle('off')
}
btcenter.addEventListener('click',toggleMenu);
btcenter.addEventListener('touchstart',toggleMenu);