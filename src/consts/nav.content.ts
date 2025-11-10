import type { Language } from "@src/types/language.type";
import { i18n } from "@consts/i18n.files";

export const getNavContent = (locale: Language) => {
    const translate = i18n[locale];

    return [
        {
            label: translate.nav.experience, // Intro
            visible: true,
        },
        {
            label: translate.nav.projects, // Proyectos
            visible: true,
        },
        {
            label: translate.nav.about_me, // Sobre mí
            visible: true,
        },

        // ...
    ]
}