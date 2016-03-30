/* bloc_1 */
var blocs_1_titles = document.querySelectorAll(".bloc_1 h2");

for (var i = 0; i < blocs_1_titles.length; ++i)
{
	blocs_1_titles[i].onclick = function()
	{
		this.style.color = "#c55"
	}
}

/* bloc_2 */
var blocs_2_titles = document.querySelectorAll(".bloc_2 h2");

for (var i = 0; i < blocs_2_titles.length; ++i)
{
	blocs_2_titles[i].onclick = function()
	{
		this.style.color = "#5c5"
	}
}

/* bloc_3 */
var blocs_3_titles = document.querySelectorAll(".bloc_3 h2");

for (var i = 0; i < blocs_3_titles.length; ++i)
{
	blocs_3_titles[i].onclick = function()
	{
		this.style.color = "#55c"
	}
}
