class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const lettersCount = {}

        for(let i=0; i < s.length; i++){
            lettersCount[s[i]] = (lettersCount[s[i]] || 0) + 1
        }

        for(let i=0; i < t.length; i++) {
            if(!lettersCount[t[i]]){
                return false
            }

            lettersCount[t[i]]--
        }

        return true
    }
}
