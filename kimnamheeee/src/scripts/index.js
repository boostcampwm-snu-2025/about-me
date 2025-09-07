document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('folder-double-click', (e) => {
        const folderText = e.detail.text;
        let url = null;

        switch(folderText.toLowerCase()) {
            case 'github':
            url = 'https://github.com/kimnamheeee';
            break;
            case 'email':
            url = 'mailto:nami200284@snu.ac.kr';
            break;
            case 'linkedin':
            url = 'https://www.linkedin.com/in/nam-hee-kim-754b16381';
            break;
            case 'blog':
            url = 'https://velog.io/@knheeeee/posts';
            break;
        }

        if (url) {
            window.open(url, '_blank');
        }
    });
});
  