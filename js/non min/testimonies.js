var quoteContainer = document.getElementById('quoteContainer'),
	quoteText = document.getElementById('quote'),
	authorText = document.getElementById('author'),
	authorMiscText = document.getElementById('authorMisc'),
	i = 0;
	/*Tableau contenant le contenu des témoignages*/
	quoteArray = [
		/*0*/
		'Notre séjour à été magnifique au sein de cet hôtel qui ne s\'encombre pas d\'artifices superflus. Tout est raffiné jusque dans les éléments les plus subtils sans jamais en faire trop. Au Parimis on est dans le bien-être et pas dans le paraître.',
		'Jean D. ',
		'Acteur',
		/*3*/
		'Séjour au calme au cœur de Paris dans une chambre magnifique. Le spa est un pur moment de détente et de bien-être et le tout à deux pas des grands monuments. Un rêve !',
		'Zoey D. ',
		'Directrice artistique',
		/*6*/
		'Loin des chichi des grands hôtel de luxe, le Parimis propose un service de haut-standing dans une simplicité et une élégance qui permet de profiter de la ville et des services proposés sereinement. ',
		'Dave G. ',
		'Musicien',
		/*9*/
		'Le Parimis a su s\'entourer d\'un personnel de haut vol aussi bien pour son hôtel que pour son Spa et son Restaurant qui à eux seuls méritent le détour.',
		'Louise B. ',
		'Directrice commerciale',
		/*12*/
		'Le Parimis est bien plus qu\'un hôtel. La gastronomie raffinée qu\'il propose en font un choix de prédiléction pour de grandes occasions ou juste pour se faire plaisir.',
		'Josh B. ',
		'Homme d\'affaire',
		/*15*/
		'Mon fiancé m\'a fait la surprise de m\'emmener à Paris et a sorti le grand jeu ! Au sein de cet hôtel splendide, nous avons vécu un véritable rêve éveillé à deux pas des Champs Élysées et de la tour Eiffel.',
		'Rashida J. ',
		'Globetrotteuse',
	];
	
	function quoteAssign(){
		
		quoteText.innerHTML = quoteArray[i];
		authorText.innerHTML = quoteArray[i+1];
		authorMiscText.innerHTML = quoteArray[i+2];
		i+=3;
		
		
	}
	
	quoteAssign();

	
	function quoteRotation (){
		
		if(i>quoteArray.length-2){
			
			i=0
			quoteAssign();
			
		}
		
		else{	
			quoteAssign();
		}
		
	};
	
	
// Code for Chrome, Safari and Opera
quoteContainer.addEventListener("webkitAnimationIteration", quoteRotation);
// Standard syntax
quoteContainer.addEventListener("animationiteration", quoteRotation); 