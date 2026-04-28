const app = {
    init: function() {
        // Handle Splash Screen
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            const container = document.getElementById('app-container');
            
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.classList.add('hidden');
                container.classList.remove('hidden');
            }, 500);
        }, 2000); // 2 seconds splash
    },

    navigate: function(viewId) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.add('hidden');
            view.classList.remove('active');
        });

        // Show target view
        const targetView = document.getElementById(`view-${viewId}`);
        if(targetView) {
            targetView.classList.remove('hidden');
            targetView.classList.add('active');
        }

        // Update bottom nav active state if applicable
        if (['home', 'status', 'contact'].includes(viewId)) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            const activeNav = document.querySelector(`.nav-item[onclick="app.navigate('${viewId}')"]`);
            if (activeNav) activeNav.classList.add('active');
        }
    },

    submitStep1: function() {
        const nisn = document.getElementById('nisn').value;
        const name = document.getElementById('fullname').value;

        if (!nisn || !name) {
            alert('Mohon lengkapi NISN dan Nama Lengkap terlebih dahulu!');
            return;
        }

        app.navigate('register-step-2');
    },

    submitStep2: function() {
        const fatherName = document.getElementById('father-name').value;
        const motherName = document.getElementById('mother-name').value;

        if (!fatherName || !motherName) {
            alert('Mohon lengkapi Data Orang Tua terlebih dahulu!');
            return;
        }

        app.navigate('register-step-3');
    },

    submitStep3: function() {
        // Simulating upload processing
        alert('Pendaftaran Berhasil! Data dan dokumen Anda telah tersimpan di sistem.');
        app.navigate('home');
    },

    checkStatus: function() {
        const nisn = document.getElementById('search-nisn').value;
        if (!nisn) {
            alert('Masukkan NISN terlebih dahulu!');
            return;
        }

        // Simulate fetching data
        const resultDiv = document.getElementById('status-result');
        document.getElementById('res-nisn').textContent = nisn;
        resultDiv.classList.remove('hidden');
    },

    toggleFaq: function(element) {
        const answer = element.querySelector('.faq-answer');
        const icon = element.querySelector('.ri-add-line') || element.querySelector('.ri-subtract-line');
        
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            if(icon) {
                icon.classList.remove('ri-add-line');
                icon.classList.add('ri-subtract-line');
            }
        } else {
            answer.classList.add('hidden');
            if(icon) {
                icon.classList.remove('ri-subtract-line');
                icon.classList.add('ri-add-line');
            }
        }
    }
};

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', app.init);
