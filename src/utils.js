const paginate = (followers) => {
    const itemsPertage = 10;
    const numberOfPages = Math.ceil(followers.length /itemsPertage);

    const newFollowers = Array.from({length: numberOfPages}, (_, index) => {
        const start = index * itemsPertage;
        return followers.slice(start, start + itemsPertage);
    });

    return newFollowers;
}

export default paginate;