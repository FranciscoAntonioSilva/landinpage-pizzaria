const myObserver = new IntersectionObserver(infos => {
    infos.forEach(info => {
        if (info.isIntersecting) {
            info.target.classList.add('show');
        }
    });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach(element => myObserver.observe(element));
