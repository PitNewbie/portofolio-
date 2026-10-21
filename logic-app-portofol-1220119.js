  const menuBtn = document.getElementById('menuToggle');
        const navDropdown = document.getElementById('navDropdown');

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navDropdown.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            navDropdown.classList.remove('active');
        });

        function showPage(pageName) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            document.getElementById('btnNavUtama').classList.remove('active');
            document.getElementById('btnNavProject').classList.remove('active');

            if (pageName === 'utama') {
                document.getElementById('page-utama').classList.add('active');
                document.getElementById('btnNavUtama').classList.add('active');
            } else if (pageName === 'project') {
                document.getElementById('page-project').classList.add('active');
                document.getElementById('btnNavProject').classList.add('active');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- AUTOMATIC WHATSAPP POPUP & PROMO MESSAGE SYSTEM ---
        const promoMessages = [
            "AM PREM 5K/TAHUN",
            "WINK VIP+ 9k/Minggu"
        ];

        const waTooltip = document.getElementById('waTooltip');
        const waBtn = document.getElementById('waBtn');
        let currentMessageIndex = 0;

        function triggerWaPromo() {
            // Pilih pesan acak dari array
            const randomIndex = Math.floor(Math.random() * promoMessages.length);
            const selectedMsg = promoMessages[randomIndex];
            
            waTooltip.textContent = selectedMsg;
            
            // Atur URL WhatsApp agar otomatis membawa pesan promo saat diklik
            const encodedText = encodeURIComponent(`Halo StarPit, saya mau order ${selectedMsg}`);
            waBtn.href = `https://wa.me/6285727658632?text=${encodedText}`;

            // Tampilkan pesan dengan animasi smooth
            waTooltip.classList.add('show');

            // Sembunyikan pesan setelah 15 detik
            setTimeout(() => {
                waTooltip.classList.remove('show');
            }, 15000);
        }

        // Jalankan saat pertama kali dimuat
        setTimeout(triggerWaPromo, 2000);

        // Jalankan berulang setiap 30 detik
        setInterval(triggerWaPromo, 30000);