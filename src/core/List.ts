export function List(): void {
    // returns the first Item that mathces the criteria of null
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

   Array.prototype.LastOrDefault = function (action = null) {
       for(let i of this){
           if (action == null) {
               this[this.length-1];
            } else {
                const inverse = this.reverse();
                for(let i of inverse) {
                    if(action(i)) return i;
                }
            }
       }
   }
   
   // returns a list that matches the criterias
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
   
   // returns selected properties from the object
   Array.prototype.Select = function(action) {
       let result = []
       for(let i of this) {
           result.push(action(i));
       }
       return result
   }
   
   // returns a distinct list with no duplicates
   Array.prototype.Distinct = function() {
       const result = [];
       for(let i of this) {
           if(result.FirstOrDefault(x => JSON.stringify(x).toLowerCase() === JSON.stringify(i).toLowerCase()) === null){
               result.push(i);
           }
       }
       return result;
   }
}