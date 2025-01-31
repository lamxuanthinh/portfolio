export function formatUrl(url: string) {
    return url.replace(/^https?:\/\//, '').split('/')[0];
}