export {}

declare global {
    interface Array<T>{
        /**
         * Returns unique items of an array.
         * Purges duplicates.
         */
        Distinct(): T[];
        /**
         * Returns the first item in ann array or null.
         * @param criteria Function specifying criteria.
         */
        FirstOrDefault(criteria?: (T: T) => boolean): T | null;
        /**
         * Returns an array of anonymous objects.
         * @param criteria Function specifying new anonymous object
         */
        Select(criteria?: (T: T) => any): any[];
        /**
         * Returns an array of items where each item meets the condition passed
         * @param criteria Function specifying new anonymous object
         */
        Where(criteria?: (T: T) => boolean): T[];
    }
    
    interface String{
        /**
         * Checks if the string composition is a valid email address.
         */
        IsEmail(): boolean;
        /**
         * Checks if the string is null or empty.
         */
        IsNullOrEmpty(): boolean;
    
        /**
         * replaces all the characters selected for a different value
         * @param search value you want to find in the string
         * @param replacement value to replace it by
         */
        ReplaceAll(search:string, replacement: string): string;
    }
}
