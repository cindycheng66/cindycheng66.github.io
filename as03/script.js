// 導覽列平滑滾動 (800ms)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    const navHeight = document.querySelector('nav').offsetHeight;
    const start = window.scrollY;
    const end = target.offsetTop - navHeight;
    const distance = end - start;
    const duration = 800;
    let startTime = null;

    function animateScroll(time){
      if(!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 
        ? 4*progress*progress*progress 
        : 1 - Math.pow(-2*progress + 2,3)/2;

      window.scrollTo(0, start + distance * ease);
      if(elapsed < duration) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  });
});
