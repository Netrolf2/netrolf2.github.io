var trigger = document.getElementById('navToggle'),
	navBlock = document.getElementById('nav-block'),
	body = document.getElementsByTagName('body')[0];
	
/*Pour définir de base le 0%*/
document.getElementById('nav-block').style.height = '0%';

/*FONCTIONS*/
function openNav() {
		
		//desactiver le scroll sur le body
		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		document.body.scroll = "no";
		//Faire apparaître le menu
		navBlock.style.height = '100%';
		//Changer l'icone et sa couleur
		trigger.getElementsByTagName('i')[0].className = 'fa fa-plus';
		trigger.getElementsByTagName('i')[0].style.color = 'white';
		trigger.style.position = 'fixed';

};

function closeNav() {
		
		//activer le scroll sur le body
		body.style.overflow = 'scroll';
		body.style.position = 'static';
		document.body.scroll = "yes";
		//Faire disparaître le menu
		navBlock.style.height = '0%';
		//Changer l'icone et sa couleur
		trigger.getElementsByTagName('i')[0].className = 'fa fa-bars';
		trigger.getElementsByTagName('i')[0].style.color = '#2e2e2e';
		trigger.style.position = 'static';

};

/*FONCTIONS PRINCIPALE*/
function toggleMobileNav () {
	
	//Ouvrir
	if ( navBlock.style.height == '0%') {
		
		openNav();
		
	}
	//Fermer
	else {
		
		closeNav();
		
	}

}

trigger.addEventListener('click', toggleMobileNav);

/*Reset*/

window.onresize = function(event) {
    
	var currentWidth = window.innerWidth;
	
	if(currentWidth >= 850 ){
		
		closeNav();
	}
	
};