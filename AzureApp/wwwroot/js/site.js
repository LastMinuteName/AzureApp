// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const fetchData = async () => {
    let fetchedData = await fetch('https://esi.evetech.net/latest/markets/10000002/history/?datasource=tranquility&type_id=44992')
    fetchedData = await fetchedData.json();
    console.log(fetchedData);
}

fetchData();
