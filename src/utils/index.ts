export const stylesStrToObject = (styleStr: string) => {
    const obj = {}
    const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
        return g.toUpperCase();
    }).replace(/;\s?$/g, "").split(/:|;/g);
    for (var i = 0; i < s.length; i += 2) {
        obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
    }
    return obj;
}

export const isEmptyOf =
    <T extends object>(obj: T | null | undefined): obj is T => {
        if (obj === null) return false
        return Object.keys(obj).length > 0;
}