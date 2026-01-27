import { BaseSchema, SuperSchema } from './baseSchema';

export class WebPage extends SuperSchema implements BaseSchema {

    constructor(
        public id: string,
        public url: string,
        public name: string,
        public description: string,

        public idIsPartOf: string
    ) {
        super();
    }
    
    JsonLd() : Record<string, any>{
        return {
            "@context": this.context,
            "@type": "WebPage",
            "@id": `${this.baseUrl}#${this.id}`,
            "url": `${this.baseUrl}${this.url}`,
            "name": this.name,
            "description": this.description,
            "isPartOf": {
                "@id": `https://brishmancl.com/${this.idIsPartOf}`
            }
        }
    }

}
