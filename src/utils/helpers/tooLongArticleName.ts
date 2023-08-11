export const tooLongArticleName: Function = (articleName: string): string => {
    if (articleName.length > 42) {
        return `${articleName.slice(0, 42)}...`;
    }

    return articleName;
}