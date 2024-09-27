const parseContactType = (type) => {
    const isString = typeof type === 'string';
    if (!isString) return;

    const isType = (type) => ['work', 'home', 'personal'].includes(type);
    if (isType(type)) return type;
};

const parseIsFavourite = (value) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return undefined;
};

export const parseFilterParams = (query) => {
    const { type, isFavourite } = query;

    const parsedType = parseContactType(type);
    const parsedIsFavourite = parseIsFavourite(isFavourite);


    return {
        contactType: parsedType,
        isFavourite: parsedIsFavourite,
    };
};
