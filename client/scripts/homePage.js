
window.onload = function(){
   
    //fetch all movies and show
    if(window.location.href=="http://127.0.0.1:5500/index.html"){
    fetchAllMovies();
}
    /*************************************************/

    //search movies
    if(window.location.href=="http://127.0.0.1:5500/index.html"){
    document.getElementById('searchBtn').onclick =  async function(){
        let keywrd = document.getElementById('searchBox').value;
        keywrd = keywrd.trim();

        if(keywrd.length === 0){
            document.getElementById('searchBox').value = "";
            window.location.href= 'index.html';
        }
        else{
            const searchResult = await fetch('http://localhost:2160/movies/search/' + keywrd , {
            method: "GET",
            headers: {"content-type" : "application/json"}
        }).then(res => res.json());
        
        if(searchResult.length === 0){
            document.getElementById('msg').innerHTML = `Sorry! there is no data for "` + keywrd + `" <a href="index.html">click here</a> to go back.`;
            document.getElementById('movieData').innerHTML = "";
        }
        else{
            document.getElementById('msg').innerHTML = 'Search result for "' + keywrd + `". <a href="index.html">click here</a> to go back.`;
            showdata(searchResult);
        }
        }
    }

    /*************************************************/

    //Movies By Category
    
    /*************************************************/

    //Action movies
    document.getElementById('action').onclick = function(){
        moviesByCategory("Action");
    }
    /*************************************************/

    //Comedy movies
    document.getElementById('comedy').onclick = function(){
        moviesByCategory("Comedy");
    }
    /*************************************************/

    /*************************************************/

    //2022 movies
    document.getElementById('2022').onclick = function(){
        moviesByYear(2022);
    }
    /*************************************************/

    //2021 movies
    document.getElementById('2021').onclick = function(){
        moviesByYear(2021);
    }
}
    /*************************************************/

    //Add new movie
    else{
    document.getElementById('addMovie').onclick = async function(){
        
        await fetch('http://localhost:2160/movies/addmovie',{
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({
            id : document.getElementById('id').value,
            name : document.getElementById('name').value,
            category : document.getElementById('category').value,
            year : document.getElementById('year').value,
            url : document.getElementById('url').value
        })
        }).then(res => res.json());
    
    }
}
    /*************************************************/
}

async function moviesByCategory(categry){
    const catMovies = await fetch('http://localhost:2160/movies/category/' + categry,{
    method: "GET",
    headers: {"content-type": "application/json"}
    }).then(res => res.json());

    document.getElementById('msg').innerHTML = "Result for " + categry + " movies. <a href='index.html'>click here</a> to go back."
    showdata(catMovies);
}

 //Movies By Year
 async function moviesByYear(year){
    const yearMovies = await fetch('http://localhost:2160/movies/byyear/' + year,{
    method: "GET",
    headers: {"content-type": "application/json"}
    }).then(res => res.json());

    document.getElementById('msg').innerHTML = "Result for " + year + " movies. <a href='index.html'>click here</a> to go back."
    showdata(yearMovies);
}

function showdata(arr){
    let moviesData = "";

    if(arr.length === 0){
        moviesData = "Sorry! there is no data to show";
    }
    else{
        for(let i = 0; i < arr.length; ++i){
            moviesData += `<div>
            <img src="` + arr[i].url + `" alt="">
            <p>` + arr[i].name + `</p>
        </div>`;
        }
    }

    document.getElementById("movieData").innerHTML =  moviesData;
}

async function fetchAllMovies(){
    const allMovies = await fetch('http://localhost:2160/movies/',{
        method: "GET",
        headers: { "content-type" : "application/json"}
    }).then(res => res.json());

    showdata(allMovies);
}
