//your code here
function findMajorityElement(nums) {
    let candidate = nums[0];
    let count = 1;

    // Phase 1: Find a candidate for the majority element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            candidate = nums[i];
            count = 1;
        }
    }

    // Phase 2: Verify if the candidate is the majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        // This case should not occur based on the problem statement
        return -1; // Or you can return null, undefined, or any other value to indicate no majority element
    }
}

// Example usage:
const inputArray = [2, 1, 2];
const majorityElement = findMajorityElement(inputArray);
console.log(majorityElement);
