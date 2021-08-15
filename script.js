
/* Solving problems using array functions on rest countries data.
    a.Get all the countries from Asia continent /region using Filter function
    b.Get all the countries with a population of less than 2 lakhs using Filter function
    c.Print the following details name, capital, flag using forEach function
    d.Print the total population of countries using reduce function
    e.Print the country which uses US Dollars as currency. */




const getapiData = ()=> {
  
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://restcountries.eu/rest/v2/all')
    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = ()=> {
        let data = xhr.response;
        let asianCountries = getCountriesOfAsiaRegion(data);
        console.log(asianCountries);
        let filteredCountries = countiesFilteredOnPopulation(data);
        console.log(filteredCountries);
        printCountryDetails(data);
        getTotalPopulation(data);
        toFilterBasedonCurrency(data)
    }
 
   
}

getapiData();

//  a.Get all the countries from Asia continent /region using Filter function
function getCountriesOfAsiaRegion(data)
{
    let result = data.filter(({region}) => region === 'Asia');
    return result;
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function
function countiesFilteredOnPopulation(data)
{
    let result = data.filter(({population}) => population < 200000);
    return result;
}


//c.Print the following details name, capital, flag using forEach function

function printCountryDetails(data)
{
    data.forEach(({name,capital,flag}) => {
        console.log(`name : ${name} , capital : ${capital} , flag : ${flag}`);
    });
}

//d.Print the total population of countries using reduce function

function getTotalPopulation(data)
{
    const reducer = (acc,{population}) => acc + population;
    let result = data.reduce(reducer,0);
    console.log(`Total Population : ${result}`);
}

//e.Print the country which uses US Dollars as currency.

function toFilterBasedonCurrency(data)
{
    let result = data.filter(({currencies}) =>{
        let flag = false;
        for (ccy of currencies)
        {
            if (ccy.code === 'USD')
            {
                flag = true;
                break;
            }
        }

        return flag

    });

    console.log(result);
}


