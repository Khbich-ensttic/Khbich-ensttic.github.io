document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        // تحقق من وجود فئة 'active' على أي عنصر آخر وإزالتها
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
          activeLink.classList.remove('active');
        }
  
        // أضف فئة 'active' للرابط والنقطة المستهدفة
        link.classList.add('active');
        targetSection.classList.add('active');
  
        // انتقل إلى القسم المستهدف بسلاسة
        targetSection.scrollIntoView({ behavior: 'smooth' });
  
        // قم بإزالة فئة 'active' بعد فترة زمنية معينة
        setTimeout(() => {
          link.classList.remove('active');
          targetSection.classList.remove('active');
        }, 2000);
      } else {
        console.error('لم يتم العثور على القسم المستهدف');
      }
    });
  });
 