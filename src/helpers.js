function getReleaseYear(dateString) {
    let releaseDate = new Date(dateString);

    return releaseDate.getFullYear();
}

export { getReleaseYear };