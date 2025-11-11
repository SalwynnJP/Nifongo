window.onerror = null;
x = (screen.width-400)/2;
y = (screen.height-300)/2;
function subwin(notes){
subw=window.open('','subwin','resizable=yes,scrollbars=yes,location=no,toolbar=no,status=no,menubar=no,top=' +y+ ',left=' +x+ ',width=400,height=300');
subw.document.open();
subw.document.write('<html><head><title>note</title></head>');
subw.document.write('<body onclick="window.close(); return false;" onkeypress="window.close(); return false;" style="width: 398px ;max-width: 398px; min-height: 297px; margin: 0; border: thin solid #333333;font-size: medium; background: #F5F5F5 ;">');
subw.document.write('<div class="memo" style="padding: 0.5em ;"><p style="font-size: larger ;">'+ notes +'</p></div></body></html>');
subw.document.close();
subw.focus();
}