import { BaseSchema, SuperSchema } from './baseSchema';

type FaqQuestion = {
            "@type": "Question",
            "name": string,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": string
            }
        }

export class FaqPage extends SuperSchema implements BaseSchema {

    private faqArray: Array<FaqQuestion> = [];

    Question({ question, response }: { question: string, response: string }) {

        this.faqArray.push({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": response
            }
        });

        return this;
    }

    JsonLd(): Record<string, any> {
        return {
            "@context": this.context,
            "@type": "FAQPage",
            "mainEntity": this.faqArray
        };
    }

}