// Checkout simples para coleta de nome e email
document.addEventListener('DOMContentLoaded', function() {
    // Função para mostrar o modal de checkout
    function showCheckoutModal() {
        const modal = document.getElementById('checkoutModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Função para fechar o modal
    function closeCheckoutModal() {
        const modal = document.getElementById('checkoutModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Função para processar o checkout
    function processCheckout(event) {
        event.preventDefault();
        
        const name = document.getElementById('customerName').value.trim();
        const email = document.getElementById('customerEmail').value.trim();
        
        // Validação simples
        if (!name || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Aqui você pode adicionar a lógica para enviar os dados
        // Por exemplo, para um servidor ou serviço de email
        console.log('Dados do checkout:', { name, email });
        
        // Mostrar mensagem de sucesso
        showSuccessMessage(name);
    }

    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para mostrar mensagem de sucesso
    function showSuccessMessage(name) {
        const modal = document.getElementById('checkoutModal');
        const form = document.getElementById('checkoutForm');
        const successMessage = document.getElementById('successMessage');
        
        if (modal && form && successMessage) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Fechar modal após 3 segundos
            setTimeout(() => {
                closeCheckoutModal();
                // Resetar formulário
                form.reset();
                form.style.display = 'block';
                successMessage.style.display = 'none';
            }, 3000);
        }
    }

    // Adicionar event listeners
    const checkoutButtons = document.querySelectorAll('.checkout-btn');
    checkoutButtons.forEach(button => {
        button.addEventListener('click', showCheckoutModal);
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeCheckoutModal);
    });

    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', processCheckout);
    }

    // Fechar modal ao clicar fora dele
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeCheckoutModal();
            }
        });
    }
});