const folderToWindowMap = {
    'about me': 'about-me-window',
    'contact me!': 'contact-window',
};
  
  const folderToUrlMap = {
    'github': 'https://github.com/kimnamheeee',
    'email': 'mailto:nami200284@snu.ac.kr',
    'linkedin': 'https://www.linkedin.com/in/nam-hee-kim-754b16381',
    'blog': 'https://velog.io/@knheeeee/posts',
};
  
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('folder-double-click', (e) => {
      const folderText = e.detail.text.trim().toLowerCase();
  
      const url = folderToUrlMap[folderText];
      if (url) window.open(url, '_blank');
  
      const windowId = folderToWindowMap[folderText];
      if (windowId) {
        const win = document.getElementById(windowId);
        win?.open();
      }

      if (folderText === ':d') {
        const movingImg = document.createElement('img');
        movingImg.src = '/assets/icons/underwater.webp';
        movingImg.style.position = 'absolute';
        movingImg.style.width = '100px';
        movingImg.style.height = '100px';
        document.body.appendChild(movingImg);
    
        let x = Math.random() * (window.innerWidth - 50);
        let y = Math.random() * (window.innerHeight - 50);
        let dx = 2 + Math.random() * 3;
        let dy = 2 + Math.random() * 3;
    
        function animate() {
            x += dx;
            y += dy;
    
            if (x <= 0 || x >= window.innerWidth - 50) dx = -dx;
            if (y <= 0 || y >= window.innerHeight - 50) dy = -dy;
    
            movingImg.style.left = `${x}px`;
            movingImg.style.top = `${y}px`;
    
            requestAnimationFrame(animate);
        }
    
        animate();
    }
    
    });
});
  