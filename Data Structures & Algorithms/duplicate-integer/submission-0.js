class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            const temp = nums[i];
            nums[i] = temp - 1;
            if (nums.includes(temp)) {
                return true;
            } else {
                nums[i] = temp;
            }
        }
        return false;
    }
}
