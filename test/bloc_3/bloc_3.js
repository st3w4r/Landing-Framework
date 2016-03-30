var blocs_3_titles = document.querySelectorAll(".bloc_3 h2");

for (var i = 0; i < blocs_3_titles.length; ++i)
{
	blocs_3_titles[i].onclick = function()
	{
		this.style.color = "#55c"
	}
}
