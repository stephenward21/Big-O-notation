

var unsorted = [5,2,6,3,1,3]
var unsorteddd = [5,3,8,1,7,10,11,1,9]




function sortList(list){
	for (i=0; i < unsorted.length; i++){
		var fullSort = false;
		var loopCount = 1;
		for (j=0; j < unsorted.length-1; j++){
			if(list[j] > list[j+1]){
				fullSort = true;
				var x = list[j+1]
				list[j+1] = list[j];
				list[j] = x;
				
			}
		loopCount++
		console.log(loopCount)
		if (fullSort == false);
		

		}
	}
	
	console.log(list);
	// return list;
}

sortList(unsorteddd);



// QUICK SORT
function swap(items, firstIndex, secondIndex){
    var x = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
