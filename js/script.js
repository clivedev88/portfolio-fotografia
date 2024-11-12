// NAVEGAÇÃO COM ROLAGEM SUAVE
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ROLAGEM SUAVE PARA SEÇÕES
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
document.getElementById('contactButton').addEventListener('click', function() {
    smoothScrollTo('contact');
});
document.getElementById('portfolioButton').addEventListener('click', function() {
    smoothScrollTo('portfolio');
});

// FUNÇÕES DE ABERTURA E FECHAMENTO DO POPUP DE CONTATO
function openContactPopup() {
    document.getElementById('contactPopup').style.display = 'flex';
}
function toggleContactPopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

// ABERTURA DO POPUP DE CONTATO AO CLICAR EM ITENS DO PORTFÓLIO
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        openContactPopup();
    });
});
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('click', function() {
        openContactPopup();
    });
});

// FECHAR POPUP DE CONTATO AO CLICAR FORA DO CONTEÚDO
document.getElementById('contactPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        toggleContactPopup();
    }
});

// BOTÃO "VOLTAR AO TOPO"
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > window.innerHeight) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
function scrollToHome() {
    smoothScrollTo('home');
}

// POPUP DE CHAT COM ANIMAÇÃO DE SUBIDA
function toggleChatPopup() {
    const chatPopup = document.getElementById('chatPopup');
    if (chatPopup.classList.contains('slide-up-from-button')) {
        chatPopup.classList.remove('slide-up-from-button');
        chatPopup.classList.add('slide-down-to-button');
        setTimeout(() => {
            chatPopup.classList.add('hidden');
        }, 500);
    } else {
        chatPopup.classList.remove('slide-down-to-button', 'hidden');
        chatPopup.classList.add('slide-up-from-button');
    }
}

// FORMULÁRIO DO CHAT
function showForm() {
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';
}

// FUNÇÕES DE ABERTURA E FECHAMENTO DO POPUP DE CONTATO COM ANIMAÇÃO
function toggleContactPopupAnimated() {
    const contactPopup = document.getElementById('contactPopup');
    if (contactPopup.classList.contains('fade-in')) {
        contactPopup.classList.remove('fade-in');
        contactPopup.classList.add('fade-out');
        setTimeout(() => {
            contactPopup.classList.add('hidden');
        }, 500);
    } else {
        contactPopup.classList.remove('fade-out', 'hidden');
        contactPopup.classList.add('fade-in', 'slide-up');
    }
}
