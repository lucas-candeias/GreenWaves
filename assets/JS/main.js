
// ====== EFEITO DE REVELAÇÃO ===== //

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

// SECTION 1
window.revelar1 = ScrollReveal({reset:true})
revelar1.reveal('.efeito-revelar1',
{  
    duration: 3000,   
    distance: '60px'
})
// SECTION 2
window.revelar2 = ScrollReveal({reset:true})
revelar2.reveal('.efeito-revelar2',
{
    duration: 4500,
    distance: '80px'
})
// BOX SECTION 2
window.box1 = ScrollReveal({reset:true})
box1.reveal('.efeito-box1',
{
    duration: 3000,
    distance: '70px'
})
window.box2 = ScrollReveal({reset:true})
box2.reveal('.efeito-box2',
{
    duration: 4000,
    distance: '70px'
})
window.box3 = ScrollReveal({reset:true})
box3.reveal('.efeito-box3',
{
    duration: 5000,
    distance: '70px'
})

// SECTION 3 
window.secbox1 = ScrollReveal({reset:true})
secbox1.reveal('.sec-box1',
{
    duration: 3500,
    distance: '90px'
})

window.secbox2 = ScrollReveal({reset:true})
secbox2.reveal('.sec-box2',
{
    duration: 4500,
    distance: '90px'
})

// SECTION 5 
window.revelar5 = ScrollReveal({reset:true})
revelar5.reveal('.efeito-revelar5',
{
    duration: 4500,
    distance: '90px'
})

window.revelar6 = ScrollReveal({reset:true})
revelar6.reveal('.efeito-revelar6',
{
    duration: 4500,
    distance: '60px'
})

