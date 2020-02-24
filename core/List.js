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

    Array.prototype.Where = function(action = null) {
        if(action !== null) {
            let matching = [];
            this.map((v,i)=>{
                if(action(v)) {
                    matching.push(v)
                }
            })
            return matching;
        }
        return null;
    }
}