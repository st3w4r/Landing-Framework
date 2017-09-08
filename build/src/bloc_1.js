var blocs_1_titles = document.querySelectorAll(".bloc_1 h2");

for (var i = 0; i < blocs_1_titles.length; ++i)
{
	blocs_1_titles[i].onclick = function()
	{
		this.style.color = "#c55"
	}
}
