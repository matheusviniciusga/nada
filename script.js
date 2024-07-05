var button = document.querySelector(".no");
var position = 0;
var isAnimating = false;

button.addEventListener("click", function() {
    if(!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 100 : 0;
        button.style.trasnform = `translate(0px, ${position}px)`;
        button.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

button.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 100 : 0;
        button.style.transform = `translate(0px, ${position}px)`;
        button.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    const parte1 = document.getElementById('parte1');
    const parte2 = document.getElementById('parte2');
    const parte3 = document.getElementById('parte3');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('fecha-modal');

    botao1.addEventListener('click', () => {
        parte1.classList.remove('visible');
        parte1.classList.add('hidden');
        setTimeout(() => {
            parte1.style.display = 'none';
            parte2.style.display = 'block';
            parte2.classList.remove('hidden');
            parte2.classList.add('visible');

            setTimeout(() => {
                parte2.classList.remove('visible');
                parte2.classList.add('hidden');
                setTimeout(() => {
                    parte2.style.display = 'none';
                    parte3.style.display = 'block';
                    parte3.classList.remove('hidden');
                    parte3.classList.add('visible');
                }, 500); 
            }, 3000);
        }, 500);
    });

    botao2.addEventListener('click', () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.remove('hidden');
            modal.classList.add('visible');
        }, 10);
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('visible');
        modal.classList.add('hidden');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    });
});