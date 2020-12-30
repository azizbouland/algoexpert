// O(n log n) Time || O(1) Space

function twoNumberSum(array, targetSum) {
	// sort the array in o(n log n)
	array.sort((a, b) => a - b);
	// add a pointer to the first and last array indices
	var left = 0;
	var right = array.length - 1;
	// while the left index is less than the right
	while (left < right) {
		// if target is met, return them in an array
		var lNum = array[left];
		var rNum = array[right];
		var sum = lNum + rNum;
		
		if (sum === targetSum) return [lNum, rNum];
		// if the sum is greater move the right index to the left
		if (sum > targetSum) right--;
		// if the sum is less move the left index to the right
		if (sum < targetSum) left++;
	}
	// otherwise return an empty array
	return [];
	
}
