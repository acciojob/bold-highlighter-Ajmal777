const boldArr = document.getElementsByTagName('strong');

function highlight() {
	for(let item of boldArr){
		item.style.color = 'green';
	}
}


function return_normal() {
    for(let item of boldArr){
		item.style.color = '';
	}
}
