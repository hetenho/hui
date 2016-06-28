if (document.readyState!='loading') {
  Ripplr({
    selector: '.btn',
    effectClass: 'ripplr'
  });
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', Ripplr({
    selector: '.btn',
    effectClass: 'ripplr'
  }));
}
