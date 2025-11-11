function showpara(num) {
   if(document.getElementById) {
      document.getElementById("chap" + num).style.display = "block";
      document.getElementById("read" + num).style.display = "none";
      document.getElementById("close" + num).style.display = "inline";
   }
   return false;
}
function hidepara(num) {
   if(document.getElementById) {
      document.getElementById("chap" + num).style.display = "none";
      document.getElementById("read" + num).style.display = "inline";
      document.getElementById("close" + num).style.display = "none";
   }
   return false;
}