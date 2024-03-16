const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=downofthesickness&type=track', {
    headers: {
    'Authorization':  
    'Bearer BQBX8z0Tx7LOZVJhnGr6aVclQwlrcc2RLiTc9ZvNr28GKvkgn9r-wJOxatngxCk--n7yTyKpFWFuvhOIVLlLHqtkzsO6dtD4tkhO7qs59atjPh68-Ltlekt1SwHLZjusQFsR4_U25uVBypF4_yYOx4B8pnTUoTRq-h2Q22v4TwF17E97H9wUvvr2CYskuzUSb5jE-Qwz_4RSjnv-If4'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})
