function CJump() {
selurl=document.f1.s1;
slink=selurl.options[selurl.selectedIndex].value;
if( slink != '-' ) {
location.href = slink;
}
else {
alert('移動するページを選択して下さい');
}
}