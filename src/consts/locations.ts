import type { Language } from "@src/types/language.type";
import { i18n } from "./i18n.files";

const locations = (locale: Language) => {
    const translate = i18n[locale];
    return {
        psip: {
            name: translate.cities.psip,
            location: 'https://maps.app.goo.gl/2XP1KM9oGAv2cpob6',
        },
        spain: {
            name: translate.countries.spain,
            location: 'https://maps.app.goo.gl/Vb6i4rRSMTVKioZM8',
        },
    }
};

export default locations;