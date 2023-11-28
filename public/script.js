
   // Criação de uma função para animar elementos

//    Função que anima os elementos de baixo para cima
function animateElement(element, duration, options) {
    gsap.from(element, {
        duration: duration,
        opacity: 0,
        y: 50,
        ease: "power2.out",

        stagger: {
            amount: 0.5,
            from: "start"
        },
        ...options
    });
}

// Chama a função para animar os elementos da página
animateElement(".logo", 1, { delay: 0.5 });
animateElement(".foto", 0.5);
animateElement("h1", 0.5, { delay: 0.5 });
animateElement("p", 0.5, { delay: 0.5 });
animateElement(".midias a", 0.5, { delay: 1, stagger: 0.3 });
animateElement(".ods", 1, { delay: 0.5 });

// Função para atrasar todas as divs menos a home para a logo aparecer primeiro
gsap.utils.toArray("div:not(.home)").forEach((div, index) => {
    animateElement(div, 1, { delay: 0.7 + index * 0.3 });
});
    
