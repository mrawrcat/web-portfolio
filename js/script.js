// console.log('this works');

var topNavList = document.querySelector('#top-nav-list');
var isCollapsed = true;
var topNavToggle = document.querySelector('#top-nav-toggle');

topNavToggle.addEventListener('click', function(){
isCollapsed = !isCollapsed;
if(isCollapsed === false){
	topNavList.classList.remove('nav-list-collapse');
	topNavToggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
}
else{
	topNavList.classList.add('nav-list-collapse');
	topNavToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
}
});