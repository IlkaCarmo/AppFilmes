import axios from 'axios';


//https://www.sujeitoprogramador.com/r-api/?api=filmes
const api= axios.create({
    baseURL:'https://www.sujeitoprogramador.com'
});

export default api;