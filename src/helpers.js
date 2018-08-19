export const getWithoutTags = html => {
    return html.replace(/<p>|<\/p>/g,'')
}

export const getShorterThan = (text, limit) => {
    return (text && text.length > limit)
        ? text.slice(0, limit) + '...'
        : text
}