window.onload = function () {
  try {
    var header = document.getElementsByTagName('header')[0],
        body     = document.getElementsByTagName('body')[0];
    if (!header || !body) return;

    header.style.position = 'fixed';
    header.style.top      = 0;
    header.style.zIndex   = 10;
    header.style.width    = '100%';
    body.style.marginTop  = header.offsetHeight + 20 + 'px';
  } catch (e) {
    return;
  }
};
