var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var total = 0;

for (var i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

    total += nums[i];
}

console.log("Total: " + total);