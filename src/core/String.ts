export function Strings(): void {


    String.prototype.IsNullOrEmpty = function() {
        return this === null || this.match(/^ *$/) !== null;
    }
    
    String.prototype.IsEmail = function() {
        let expresssion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return expresssion.test(this);
    }
}