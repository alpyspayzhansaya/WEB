function main(event){
	const btn = event.currentTarget;
	const div = btn.parentNode;
	div.setAttribute('data-status', 'done');
}
const buttons = document.querySelectorAll('button');
for(const button of buttons){
	button.addEventListener('click',main);
}
