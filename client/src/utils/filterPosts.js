 const filterPosts = (movies, query) => {
    if (!query) return movies;
  
    return movies.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
  };

  export default filterPosts
