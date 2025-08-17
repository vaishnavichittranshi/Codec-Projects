        
        const openModalButtons = document.querySelectorAll('[data-modal-target]');
        const closeModalButtons = document.querySelectorAll('[data-close-button]');
        const overlay = document.getElementById('overlay');
        const itemModal = document.getElementById('itemModal');
        
        function openModal(modal) {
            modal.classList.remove('hidden');
        }
        
        function closeModal(modal) {
            modal.classList.add('hidden');
        }
        
        document.getElementById('closeModal').addEventListener('click', () => {
            closeModal(itemModal);
        });
        
        
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                openModal(itemModal);
            });
        });
        
    
        function simulateDeliveryTracking() {
            const progressBar = document.querySelector('.relative.mb-6 .absolute.top-0.left-0.h-0.5');
            let progress = 70;
            
            const interval = setInterval(() => {
                progress += 1;
                progressBar.style.height = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                }
            }, 3000);
        }
        
        
        window.addEventListener('load', simulateDeliveryTracking);