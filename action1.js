var college= false;
var lycee= false;
var sup= false;


function modifieElementListe(num){
	  
	switch(num){
	case 1: 
			if(college){
				document.getElementById("College").style.display="none"; 
				document.getElementById("Lycee").style.display="none"; 
				document.getElementById("Superieur").style.display="none"; 
				college = false;
				lycee= false;
				sup= false;
			}else{
				document.getElementById("College").style.display="block"; 
				document.getElementById("Lycee").style.display="none"; 
				document.getElementById("Superieur").style.display="none"; 
				college = true;
				lycee= false;
				sup= false;
			}
			
		break;
	case 2: 
			if(lycee){
				document.getElementById("College").style.display="none";
				document.getElementById("Lycee").style.display="none";
				document.getElementById("Superieur").style.display="none";
				college = false;
				lycee= false;
				sup= false;
			}else{
				document.getElementById("College").style.display="none"; 
				document.getElementById("Lycee").style.display="block"; 
				document.getElementById("Superieur").style.display="none"; 
				college = false;
				lycee= true;
				sup= false;
			}
		break;
	case 3: 
			if(sup){
				document.getElementById("College").style.display="none"; 
				document.getElementById("Lycee").style.display="none"; 
				document.getElementById("Superieur").style.display="none";
				college = false;
				lycee= false;
				sup= false;
			}else{
				document.getElementById("College").style.display="none"; 
				document.getElementById("Lycee").style.display="none"; 
				document.getElementById("Superieur").style.display="block";
				college = false;
				lycee= false;
				sup= true;
			}
		break;
	
	}	
	
		
}
