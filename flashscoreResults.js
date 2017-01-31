var Nightmare = require('nightmare');
//var equipe = process.argv[2];
new Nightmare() // nouvelle session nightmare

	//changer l'url & le nom de l'équipe en attendant les automatisations

    .goto('http://www.flashscore.com/match/WljqddX2/#h2h;home')
    .wait(5000)

.evaluate(function () {
	var tab = [];
	$('#tab-h2h-home tbody tr').eq(4).each(function(i,item){
		//if($('form-w'))
		if($('[title=Win]')){
			tab.push("win");
		} else{
			tab.push("NO");
		}
	});

	return tab;
})
	.then(function(results){
    	console.log("Resultat : " + results);
    	console.log('Done!');
    });