window.onload = function () {
  try {
    var header = document.getElementsByTagName('header')[0],
        body   = document.getElementsByTagName('body')[0];
    if (!header || !body) return;

    var style  = window.getComputedStyle(header);
    var margin = Number(style.marginBottom.replace('px', ''));

    header.style.position = 'fixed';
    header.style.top      = 0;
    header.style.zIndex   = 10;
    header.style.width    = '100%';
    header.style.backgroundColor = '#fff'
    body.style.marginTop  = header.offsetHeight + margin + 'px';
    
    if(f=document.getElementsByClassName("feedPage")[0]) {
      f.style.paddingTop  = 20;
    }
  } catch (e) {
    return;
  }
};
