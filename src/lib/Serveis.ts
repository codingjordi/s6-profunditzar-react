export interface Servei {
    title: string;
    description: string;
    price: number;
    hasAditionalInputs: boolean;
}

export const serveis: Servei[] = [
    {
        title: 'SEO',
        description: 'Millora del posicionament organic',
        price: 300,
        hasAditionalInputs: false,
    },
    {
        title: 'Ads',
        description: 'Implantació d\'eines pel tràfic web',
        price: 400,
        hasAditionalInputs: false,
    },
    {
        title: 'Web',
        description: 'Programació d\'una web responsive',
        price: 500,
        hasAditionalInputs: true,
    }
];
