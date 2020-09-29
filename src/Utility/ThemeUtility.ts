import cssVars from 'css-vars-ponyfill';

// Satisfy linter
declare global {
    // tslint:disable-next-line:interface-name no-any
    interface Window { CSS?: any; }
}

export function isDefaultSite(alias: string): boolean {
    if (alias.indexOf('affiliates+') !== -1) {
        return true;
    }

    const index: number = [
        'au',
        'ca',
        'nz',
        'uk',
        'us',
        'plus-club',
        'westpac',
        'club-catch',
        'anz-club',
        'channel-rewards',
        'vroom-staff',
        'vvv-ios',
        'vvv-android'
    ].indexOf(alias);

    return index !== -1;
}

export function checkCSSVarsSupport(): void {
    // Ponyfill for css vars in older browser
    if (
        typeof window.CSS === 'undefined' ||
        (
            typeof window.CSS !== 'undefined' &&
            window.CSS.supports('--test-var', '0') === false
        )
    ) {
        cssVars({
            watch: true, // Enable mutation.observer
            include: 'style', // Only parse <style> tag
            onlyLegacy: true, // Only on older browser
         });
    }
}

export function getTheme(alias: string): string {
    return isDefaultSite(alias) === true ? 'default' : alias;
}
