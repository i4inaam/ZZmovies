const movies = [
    {
        id:150,
        name: "Black Widow",
        category: "Action",
        year: 2021,
        url: "./client/images/blackwid.jpeg"
    },
    {
        id:155,
        name: "Freedom",
        category: "Action",
        year: 2021,
        url: "./client/images/freedom.jpg"
    },
    {
        id:152,
        name: "The Girl",
        category: "Comedy",
        year: 2022,
        url: "./client/images/girl.jpg"
    },
    {
        id:120,
        name: "Jumanji",
        category: "Action",
        year: 2022,
        url: "./client/images/jumanji.jpg"
    },
    {
        id:154,
        name: "Lost Girl",
        category: "comedy",
        year: 2021,
        url: "./client/images/lostgirl.jpg"
    },
    {
        id:75,
        name: "Mulan",
        category: "Comedy",
        year: 2022,
        url: "./client/images/mulan.jpg"
    },
    {
        id:56,
        name: "Pirates",
        category: "Action",
        year: 2022,
        url: "./client/images/pirates.jpg"
    },
    {
        id:16,
        name: "Private Property",
        category: "Comedy",
        year: 2021,
        url: "./client/images/private.jpg"
    },
    {
        id:539,
        name: "Spider Man",
        category: "Action",
        year: 2022,
        url: "./client/images/spiderman.jpg"
    },
    {
        id:412,
        name: "The Hunting",
        category: "Comedy",
        year: 2021,
        url: "./client/images/thehunting.jpg"
    },
    {
        id:82,
        name: "Thor",
        category: "Action",
        year: 2021,
        url: "./client/images/thor.jpg"
    },
    {
        id:71,
        name: "Venom",
        category: "comedy",
        year: 2021,
        url: "./client/images/venom.jpg"
    }
    
]

module.exports = class Movie{

    static getMovies(){
        return movies;
    }

   static serchByKeyword(keyword){
        return movies.filter(m => m.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    static getMoviesByCategory(categry){
        return movies.filter(m => m.category.toLowerCase() === categry.toLowerCase());
    }

    static getMoviesByYear(year){
        return movies.filter(m => m.year == year);
    }

    static addNewMovie(mData){
        movies.push({
            id : mData.id,
            name : mData.name,
            category : mData.category,
            year : mData.year,
            url : mData.url
        });

        //if u r sure that the names in objects on both sides(front and back end) are same

        //u can do this
        // movies.push({...mData});

        //or // can do this
        // movies.push(mData);
        
    }
}