
		
			let  data = {};
			$( document ).ready(function() {
					
					$.getJSON("js/data2.js", function(result){
					//$.getJSON("http://localhost/cscb-json/odbc-data/", function(result){
						data = result;
						
						console.log("trigger 1 >> "+data);
						console.log("trigger 2 >> "+data.foodSearchCriteria);
						console.log("trigger 3 >> "+data.foods[0].description);
						let str = ""; 
						for(let i=0; i<data.foods.length; i++) {
							str += '<li><a href="#details" onclick="writeContent('+i+');">'+data.foods[i].description+'</a></li>';
							
						};
						$("#menu").html(str);
						console.log("trigger 2");
						$("#menu").listview("refresh");
						//$('#menu').listview('refresh');
					});
			});
			function writeContent(num) {
			
			/*
			{
		"fdcId": 781531,
		"description": "Ice cream sandwich",
		"additionalDescriptions": "Oreo Ice Cream sandwich",
		"dataType": "Survey (FNDDS)",
		"foodCode": "13120500",
		"publishedDate": "2020-04-01",
		"foodNutrients": [{
			"nutrientId": 1003,
			"nutrientName": "Protein",
			"nutrientNumber": "203",
			"unitName": "G",
			"value": 4.29000000
		}
			*/
			/*	console.log(data);
			console.log(data.catalog);
			console.log(data.catalog[0]);
			console.log(data.catalog[num]);
			console.log(data.catalog[num].position);
			*/
				$("#fdcID").html(data.foods[num].fdcID);
				$("#description").html(data.foods[num].description);
				$("#foodCode").html(data.foods[num].foodCode);
				$("#publishedDate").html(data.foods[num].publishedDate);
				$("#additionalDescriptions").html(data.foods[num].additionalDescriptions);
				$("#dataType").html(data.foods[num].dataType);
			
			};
			