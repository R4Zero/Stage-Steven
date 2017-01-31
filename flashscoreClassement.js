var Nightmare = require('nightmare');
//var equipe = process.argv[2];
new Nightmare() // nouvelle session nightmare

	//changer l'url & le nom de l'équipe en attendant les automatisations

    .goto('http://www.flashscore.com/match/WljqddX2/#standings;table;overall')
    .wait(5000)

.evaluate(function () {
	var count =  0;
	var results = "";
	var rang = [];
	$('.stats-table-container tbody tr').each(function(i,item){
		count = i;
	});

	for (var x = 0; x <= count; x++) {
		if( $('.team_name_span').eq(x).text() == "Arsenal")
		{
			rang.push($('.col_rank').eq(x+1).text());
			rang.push($('.col_matches_played').eq(x+1).text());
			rang.push($('.col_goals').eq(x+1).text());
		}
	}
	
	return rang;
})
	.then(function(results){
    	console.log("Equipe classé : " + results[0]);
    	console.log("MP: " + results[1]);
    	console.log("Goals: " + results[2]);
    	console.log('Done!');
    });