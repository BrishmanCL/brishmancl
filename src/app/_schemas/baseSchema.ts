export interface BaseSchema {

    JsonLd(): Record<string, any>;
}

export class SuperSchema {
    public context:string = "https://schema.org";
    public baseUrl:string = "https://brishmancl.com/"
    constructor( ){
       
    }
}