function changeCSS(sURL)
{
	var obj = document.getElementsByTagName("link");
	for (var i=0, cnt=0; i<obj.length; i++)
	{
		if (obj[i].type == "text/css") obj[i].href = sURL[cnt++];
	}
}