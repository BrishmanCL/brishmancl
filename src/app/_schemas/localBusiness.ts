import { BaseSchema, SuperSchema } from "./baseSchema";

class LocalBusiness extends SuperSchema implements BaseSchema {

    constructor(){
        super();
    }

    JsonLd(): Record<string, any> {
        return {
            "@context": this.context,
            "@type": "LocalBusiness",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "PE",
                "addressRegion": "Lima",
            },
            "description": "Empresa peruana especializada en desarrollo web, marketing digital y automatización de procesos empresariales. Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de negocios en el entorno digital.",
            "name": "BrishmanCL S.A.C.",
            "image": "https://brishmancl.com/images/Brishman%20CL%20SAC.svg",
            "logo": "https://brishmancl.com/images/Brishman%20CL%20SAC.svg",
            "email": "mailto:brishman@outlook.es",
            "SameAs": [
                "https://www.facebook.com/brishmanclmarketing",
            ],
            "telephone": "+51956961075",
            "url": this.baseUrl,
        }
    }
}

export const LocalBusinessInstance = new LocalBusiness();