'use strict';

// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:
// http://fixer.io/
// restcountries.eu

const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        return response.data.rates[to];
    } catch (e) {
        throw new Error(`Unable to get rate ${from} ${to}.`);
    }    
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`);
    }    
};

const convertCurrency = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangeAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in following countries: ${countries.join(', ')}`;
};

convertCurrency('USD', 'GBP', 100).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e.message);
});