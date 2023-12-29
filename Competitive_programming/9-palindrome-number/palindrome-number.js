/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    str = x.toString()
    strs = str.split("")

    right = strs.length - 1
    let is_palindrom = true
    for (left = 0;left <= strs.length;left++){
        if (left >= right){
            break
        }
        if (strs[left]==strs[right]){
            right--
            continue
        } else{
            is_palindrom = false
            break
        }
    }
    return is_palindrom
};