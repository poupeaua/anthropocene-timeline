(function() {
      const isDarkMode = localStorage.getItem('hs_theme') === 'dark' || (localStorage.getItem('hs_theme') === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      }
    })();