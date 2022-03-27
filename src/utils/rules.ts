function isValidHttpUrl(string: string):boolean {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export const rules = {
    required: (message: string) => ({
        required: true,
        message: message
    }),
    requiredUrl: (url: string):any => ({
        validator: ():any => isValidHttpUrl(url) ? Promise.resolve() : Promise.reject(new Error('Введите корректную ссылку')),
    })
}