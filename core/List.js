module.exports = function(){
    Array.prototype.FirstOrDefault = function(action = null) {
        for(let i of this) {
            if (action === null) {
                return i;
            } else {
                if(action(i)) {
                    return i
                }
            }
        }
         return null;
    }
}