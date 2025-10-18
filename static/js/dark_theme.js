window.addEventListener('load', () => {
    (function() {
      const themeSwitches = document.querySelectorAll('#hs-theme-switch-to-destroy [data-hs-theme-click-value]');
      const destroy = document.querySelector('#hs-destroy-theme-switch');
      const autoInit = document.querySelector('#hs-auto-init-theme-switch');

      destroy.addEventListener('click', () => {
        themeSwitches.forEach((el) => {
          const {element} = HSThemeSwitch.getInstance(el, true);

          element.destroy();
        });

        destroy.setAttribute('disabled', 'disabled');
        autoInit.removeAttribute('disabled');
      });

      autoInit.addEventListener('click', () => {
        HSThemeSwitch.autoInit();

        autoInit.setAttribute('disabled', 'disabled');
        destroy.removeAttribute('disabled');
      });
    })();
  });