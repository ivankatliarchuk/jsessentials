'use strict';

// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:
// http://fixer.io/
// restcountries.eu

const axios = require('axios');

const getExchangeRate = (from, to) => {
    return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
        return response.data.rates[to];
    });
};

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {        
        return response.data.map((country) => country.name);
    });
};

const convertCurrency = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangeAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in following countries: ${countries.join(', ')}`;
};


convertCurrency('USD', 'RUB', 100).then((result) => {
    console.log(result);
});