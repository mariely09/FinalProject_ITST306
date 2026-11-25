(function () {
    'use strict';

    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    var pages = document.querySelectorAll('.page');
    var navLinkElements = document.querySelectorAll('.nav-link');
    var footerLinks = document.querySelectorAll('.footer-link[data-page]');
    var quickLinks = document.querySelectorAll('[data-page]');
    var galleryItems = document.querySelectorAll('.gallery-item');
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightboxImage');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var lightboxClose = document.getElementById('lightboxClose');

    function navigateTo(pageId) {
        pages.forEach(function (page) {
            page.classList.remove('active');
        });

        var targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        navLinkElements.forEach(function (link) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleNavigationClick(e) {
        var target = e.currentTarget;
        var pageId = target.getAttribute('data-page');
        if (pageId) {
            e.preventDefault();
            navigateTo(pageId);
            if (history.pushState) {
                history.pushState(null, null, '#' + pageId);
            }
        }
    }

    quickLinks.forEach(function (link) {
        link.addEventListener('click', handleNavigationClick);
    });

    navToggle.addEventListener('click', function () {
        var isActive = navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            openLightbox(item);
        });
        item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(item);
            }
        });
    });

    function openLightbox(item) {
        var galleryDiv = item.querySelector('.gallery-image');
        var emoji = item.querySelector('.gallery-emoji');
        var caption = item.querySelector('figcaption');
        var bgClass = galleryDiv ? galleryDiv.className.split(' ').filter(function (c) {
            return c.indexOf('gallery-') === 0;
        })[0] : '';
        var style = '';
        var gradientMap = {
            'gallery-1': 'linear-gradient(135deg, #FF8F00, #FFB74D)',
            'gallery-2': 'linear-gradient(135deg, #E91E63, #F06292)',
            'gallery-3': 'linear-gradient(135deg, #2E7D32, #66BB6A)',
            'gallery-4': 'linear-gradient(135deg, #0288D1, #4FC3F7)',
            'gallery-5': 'linear-gradient(135deg, #795548, #A1887F)',
            'gallery-6': 'linear-gradient(135deg, #00897B, #4DB6AC)'
        };

        if (gradientMap[bgClass]) {
            style = gradientMap[bgClass];
        }

        lightboxImage.innerHTML = '';
        lightboxImage.style.background = style;
        var emojiSpan = document.createElement('span');
        emojiSpan.textContent = emoji ? emoji.textContent : '';
        emojiSpan.setAttribute('aria-hidden', 'true');
        lightboxImage.appendChild(emojiSpan);

        lightboxCaption.textContent = caption ? caption.textContent : '';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    window.addEventListener('popstate', function () {
        var hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            navigateTo(hash);
        } else {
            navigateTo('home');
        }
    });

    function init() {
        var hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            navigateTo(hash);
        } else {
            navigateTo('home');
        }
    }

    init();
})();
