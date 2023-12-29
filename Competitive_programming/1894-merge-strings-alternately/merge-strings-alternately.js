/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    first_words = word1.split("")
    second_words = word2.split("")
    answers = []
    min_length= first_words.length <= second_words.length ? first_words.length : second_words.length
    first_length = first_words.length - 1
    second_length = second_words.length -1 
    sliced = []
   if (first_length > second_length){
       sliced = first_words.slice(second_length+1)
   } else if(first_length < second_length){
       sliced = second_words.slice(first_length+1)
   }
   j = 0
   for (i = 0; i<min_length;i++){
       answers.push(first_words[i])
       answers.push(second_words[j])
       j++
   }

   new_answers = [...answers,...sliced]

   return new_answers.join("")
};