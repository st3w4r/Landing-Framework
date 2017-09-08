var blocks_1_titles = document.querySelectorAll(".block_1 h2");

for (var i = 0; i < blocks_1_titles.length; ++i)
{
	blocks_1_titles[i].onclick = function()
	{
		this.style.color = "#c55"
	}
}

