import type { Language } from "@src/types/language.type";
import { i18n } from "./i18n.files";

const THEMES = (locale: Language) => {
    const translate = i18n[locale];
    return (
        {
            light: {
                id: 'light',
                label: 'Light',
                name: translate.themes.light,
                icon: 'icon-[carbon--light]',
            },
            dark: {
                id: 'dark',
                label: 'Dark',
                name: translate.themes.dark,
                icon: 'icon-[material-symbols--dark-mode-outline-rounded]',
            },
            system: {
                id:'system',
                label: 'System',
                name: translate.themes.system,
                icon: 'icon-[ion--md-desktop]',
            }
        }
    )
};

export default THEMES;