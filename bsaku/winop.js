window.onerror = null;
function subwin(pages,yoko,tate){
subw=window.open('','subwin','resizable=yes,scrollbars=no,location=no,toolbar=no,menubar=no,top=30,left=10');
subw.document.open();
subw.document.write('<html><head></head><body>');
subw.document.write('<div style="position:absolute; left:0px; top:0px">');
subw.document.write('<img src='+pages+'></div></body></html>');
subw.document.close();
subw.focus();
subw.resizeTo(yoko,tate);
}