var blocs_2_titles = document.querySelectorAll(".bloc_2 h2");

for (var i = 0; i < blocs_2_titles.length; ++i)
{
	blocs_2_titles[i].onclick = function()
	{
		this.style.color = "#5c5"
	}
}
