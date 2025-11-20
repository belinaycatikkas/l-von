// Navbar scroll efekti - Tüm sayfalarda kullanılır
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobil menü toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Menü dışına tıklandığında menüyü kapat
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});

// Enerji Grafiği için JavaScript - Chart.js kullanılıyorsa
document.addEventListener('DOMContentLoaded', function() {
    const energyChartElement = document.getElementById('energyChart');
    if (energyChartElement && typeof Chart !== 'undefined') {
        const ctx = energyChartElement.getContext('2d');
        const energyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                datasets: [{
                    label: 'Energy Consumption',
                    data: [50, 45, 40, 35, 30, 25, 20, 30, 40, 50, 60, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10],
                    borderColor: '#cc5400',
                    backgroundColor: 'rgba(204, 84, 0, 0.3)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Energy Generation',
                    data: [0, 0, 0, 0, 0, 0, 5, 15, 30, 45, 60, 75, 80, 70, 55, 40, 25, 10, 0, 0, 0, 0, 0, 0],
                    borderColor: '#ff8533',
                    backgroundColor: 'rgba(255, 133, 51, 0.3)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#a0aec0'
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    }
});

// İletişim formu gönderimi
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
            contactForm.reset();
        });
    }
});

// Newsletter formu gönderimi
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('.newsletter-signup .input-group');
    newsletterForms.forEach(function(form) {
        const button = form.querySelector('button');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const input = form.querySelector('input[type="email"]');
                if (input && input.value) {
                    alert('E-posta adresiniz kaydedildi!');
                    input.value = '';
                }
            });
        }
    });
});

