/*
    input: "23",
    output: [
        'ad', 'ae', 'af',
        'bd', 'be', 'bf',
        'cd', 'ce', 'cf'
    ]
*/
const nums = "23";

function backtrack(answers, phone, nums, combination, idx){

    if(idx > nums.length) return 

    if(combination.length === nums.length ){
        answers.push(combination)
        return
    }

    let curNum = nums[idx];//2
    let curStr = phone[curNum];//"abc"

    for(let i=0; i<curStr.length; i++){
        backtrack(answers, phone, nums, combination + curStr[i], idx+1);
    }
}

const phoneCombinations = nums => {

    const combinations = [];

    if(nums.length === 0) return combinations;

    const phone = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    backtrack(combinations, phone, nums, "", 0);

    return combinations;
}


