const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey: 'b2450dc1d2e0594defe8921ef08437b4',
    originalImage: (imgPath) =>  `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>  `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;