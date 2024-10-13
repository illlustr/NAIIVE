document.addEventListener('scroll', function() {
    const main = document.querySelector('main');

    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
  
    if (scrollPercent >= 20 && scrollPercent <= 80) {
        main.style.transform = 'scale(1)';
        main.style.borderRadius = '0';
        
    } else {
        main.style.transform = 'scale(0.9)';
        main.style.borderRadius = '32px';
    }
  });
