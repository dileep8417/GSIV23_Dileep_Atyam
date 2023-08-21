export const getMovieDirector = (crew) => {
    if (!crew) {
        return null;
    }

    let director = '';
    for (let i = 0; i < crew.length; i++) {
        if (crew[i].known_for_department === 'Directing') {
            director = crew[i].name;
            break;
        }
    }
    return director;
}

export const getCastMemebers = (cast) => {
    if (!cast) {
        return null;
    }

    let castMembers = [];
    for (let i = 0; i < cast.length; i++) {
        if (cast[i].known_for_department === 'Acting') {
            castMembers.push(cast[i].name);
        }
    }

    return castMembers.join(', ');
}