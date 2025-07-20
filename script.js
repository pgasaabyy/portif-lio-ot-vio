// Dados das empresas
const companiesData = {
    'uniao-quimica': {
        name: 'União Química Farmacêutica Nacional',
        period: 'Novembro 2024 - Maio 2025',
        position: 'Coordenador de Segurança do Trabalho, Saúde, Meio Ambiente e Emergências',
        achievements: [
            'Coordenação de programas de SSMA em ambiente farmacêutico',
            'Gestão de emergências e preparação para respostas',
            'Implementação de protocolos de segurança específicos para indústria farmacêutica',
            'Manutenção de certificações ISO e BPF (Boas Práticas de Fabricação)'
        ]
    },
    'wacker': {
        name: 'Wacker Química do Brasil',
        period: 'Agosto 2016 - Novembro 2024 (8+ anos)',
        position: 'Gerente de EHSS & PS & SGI / Coordenador de SGI',
        achievements: [
            'Liderança de equipes multidisciplinares em ambiente químico multinacional',
            'Implementação e manutenção de múltiplas certificações ISO (45001, 14001, 9001)',
            'Gestão integrada de Saúde, Segurança, Meio Ambiente e Segurança Patrimonial',
            'Desenvolvimento de cultura de segurança com metodologia DuPont',
            'Redução significativa de incidentes e melhoria contínua de indicadores',
            'Gestão de auditorias de 1ª, 2ª e 3ª partes'
        ]
    },
    'borealis': {
        name: 'Borealis Brasil',
        period: 'Novembro 2015 - Agosto 2016',
        position: 'Consultor de SSMA, Qualidade e Sustentabilidade',
        achievements: [
            'Consultoria especializada em sistemas de gestão integrados',
            'Implementação de programas de sustentabilidade corporativa',
            'Otimização de processos de SSMA e Qualidade',
            'Desenvolvimento de estratégias de ESG para o setor petroquímico'
        ]
    },
    'faber-castell': {
        name: 'A.W. Faber-Castell',
        period: 'Outubro 2009 - Janeiro 2015 (5+ anos)',
        position: 'Gerente de Sustentabilidade-ESG / SGI/ EHS/SSMA Corporativo',
        achievements: [
            'Estruturação da área de Sustentabilidade corporativa',
            'Implementação de programas de ESG e responsabilidade socioambiental',
            'Gestão de certificações FSC, RSPO e Atuação Responsável',
            'Desenvolvimento de projetos de redução de impacto ambiental',
            'Liderança em sustentabilidade para divisões Stationery e Cosméticos',
            'Implementação de metodologias Lean Manufacturing e TPM'
        ]
    },
    'mitsubishi': {
        name: 'Mitsubishi Motors',
        period: 'Janeiro 2008 - Outubro 2009',
        position: 'Supervisor de Produção, Produtividade, Qualidade e SSO',
        achievements: [
            'Supervisão de processos produtivos no setor automotivo',
            'Implementação de sistemas de qualidade IATF 16949',
            'Gestão de segurança ocupacional em linha de produção',
            'Otimização de processos e melhoria de produtividade',
            'Coordenação de equipes multifuncionais na área de Cabine'
        ]
    },
    'parker': {
        name: 'Parker Hannifin',
        period: 'Março 2006 - Dezembro 2007',
        position: 'Coordenador de Qualidade, Produtividade, Meio Ambiente e SSO',
        achievements: [
            'Coordenação de sistemas integrados de gestão',
            'Implementação de programas de qualidade e produtividade',
            'Gestão ambiental e de segurança ocupacional',
            'Desenvolvimento de processos de melhoria contínua',
            'Atuação na divisão Seals & Refrigeration'
        ]
    }
};

// Função para abrir o modal
function openCompanyModal(companyKey) {
    console.log('Tentando abrir modal para:', companyKey);
    
    const company = companiesData[companyKey];
    if (!company) {
        console.error('Dados da empresa não encontrados para:', companyKey);
        return;
    }
    
    const modal = document.getElementById('company-modal');
    const modalName = document.getElementById('modal-company-name');
    const modalPeriod = document.getElementById('modal-period');
    const modalPosition = document.getElementById('modal-position');
    const modalAchievements = document.getElementById('modal-achievements');
    
    if (!modal) {
        console.error('Modal não encontrado no DOM');
        return;
    }
    
    if (!modalName || !modalPeriod || !modalPosition || !modalAchievements) {
        console.error('Elementos do modal não encontrados');
        return;
    }
    
    // Preencher dados do modal
    modalName.textContent = company.name;
    modalPeriod.textContent = company.period;
    modalPosition.textContent = company.position;
    
    // Limpar e preencher achievements
    modalAchievements.innerHTML = '';
    company.achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = achievement;
        modalAchievements.appendChild(li);
    });
    
    // Mostrar modal
    modal.style.display = 'block';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal aberto para:', company.name);
}

// Função para fechar o modal
function closeCompanyModal() {
    console.log('Fechando modal');
    
    const modal = document.getElementById('company-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Aguarda a animação terminar
        document.body.style.overflow = 'auto';
    }
}

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando funcionalidades...');
    
    // Inicializar modais das empresas
    const companyItems = document.querySelectorAll('.company-item.clickable');
    console.log('Elementos .company-item.clickable encontrados:', companyItems.length);
    
    companyItems.forEach((item, index) => {
        const companyKey = item.getAttribute('data-company');
        console.log(`Configurando empresa ${index + 1}: ${companyKey}`);
        
        if (companyKey) {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                console.log('Clique detectado em:', companyKey);
                openCompanyModal(companyKey);
            });
            
            // Adiciona estilo de cursor pointer
            item.style.cursor = 'pointer';
            console.log(`Listener adicionado para: ${companyKey}`);
        } else {
            console.warn('Elemento sem data-company:', item);
        }
    });
    
    // Event listener para fechar modal no botão X
    const closeButton = document.querySelector('.close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            closeCompanyModal();
        });
        console.log('Listener do botão fechar adicionado');
    } else {
        console.warn('Botão .close-modal não encontrado');
    }
    
    // Fechar modal clicando fora dele
    const modal = document.getElementById('company-modal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeCompanyModal();
            }
        });
        console.log('Listener para fechar modal ao clicar fora adicionado');
    }
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCompanyModal();
        }
    });
    
    console.log('Funcionalidades do modal inicializadas');
    
    // Inicializar outras funcionalidades
    initScrollAnimations();
    initCounterAnimations();
    initSmoothScrolling();
    initMobileMenu();
    initHeaderScroll();
    
    console.log('Portfolio carregado com sucesso! 🚀');
});

// Animações de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.about-card, .project-card, .stat-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Animação de contadores
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.parentElement.querySelector('.stat-label').textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.parentElement.querySelector('.stat-label').textContent.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
    
    element.style.animation = 'countUp 0.6s ease-out';
}

// Scroll suave para links internos
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Menu mobile
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}

// Header com scroll
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 10) {
            header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }
        
        if (window.innerWidth <= 768) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
}