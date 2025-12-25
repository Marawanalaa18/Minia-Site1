function startMiniCountdown() {
    const update = () => {
        const currentYear = new Date().getFullYear();
        let target = new Date(`March 18, ${currentYear} 00:00:00`).getTime();
        const now = new Date().getTime();

        if (now > target) {
            target = new Date(`March 18, ${currentYear + 1} 00:00:00`).getTime();
        }

        const diff = target - now;
        // const w = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        // const d = Math.floor(diff %(1000 * 60 * 60 * 24 * 7)/ (1000 * 60 * 60 * 24));
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // document.getElementById('weeks').innerText = w;
        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
    };

    setInterval(update, 1000);
    update();
}

// تشغيل العداد
startMiniCountdown();

/* --- Responsive hamburger injection and handlers --- */
(function () {
    function initHamburger() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        // avoid duplicate insertion
        if (nav.querySelector('.hamburger')) return;

        const btn = document.createElement('button');
        btn.className = 'hamburger';
        btn.setAttribute('aria-label', 'قائمة');
        btn.setAttribute('aria-expanded', 'false');
        // three bars for animation -> transform to X when .open
        btn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';

        btn.addEventListener('click', function (e) {
            const open = nav.classList.toggle('open');
            btn.classList.toggle('open', open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        // close menu when clicking a link
        nav.addEventListener('click', function (e) {
            const target = e.target.closest('a');
            if (!target) return;
            nav.classList.remove('open');
            const hb = nav.querySelector('.hamburger');
            if (hb) hb.setAttribute('aria-expanded', 'false');
        });

        // close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                nav.classList.remove('open');
                const hb = nav.querySelector('.hamburger');
                if (hb) hb.setAttribute('aria-expanded', 'false');
            }
        });

        // insert button at start of nav
        nav.insertBefore(btn, nav.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHamburger);
    } else {
        initHamburger();
    }
})();
