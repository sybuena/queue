<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" dir="ltr">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>TEST</title>
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css" type="text/css" />
		<script src="//code.jquery.com/jquery-2.1.4.js" type="text/javascript"></script>
		<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js" type="text/javascript"></script>
		<script>

			var uniqueRandoms = [];
			
			function makeUniqueRandom(array) {
				numRandoms =  array.length
			    // refill the array if needed
			    if (!uniqueRandoms.length) {
			        for (var i = 0; i < numRandoms; i++) {
			            uniqueRandoms.push(i);
			        }
			    }
			    var index = Math.floor(Math.random() * uniqueRandoms.length);
			    var val = uniqueRandoms[index];

			    // now remove that value from the array
			    uniqueRandoms.splice(index, 1);

			    return array[val];

			}
		  
	  	</script>
	  	
	</head>

	<body>
		<div class="container-4">
			TESTING ENVI
		</div>
	</body>
</html>