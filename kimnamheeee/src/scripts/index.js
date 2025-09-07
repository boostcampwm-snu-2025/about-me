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
    });
});
  