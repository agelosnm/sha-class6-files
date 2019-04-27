//1, source = https://thegreatestbooks.org/lists/44
let books = ["anna_karenina", "madame_bovary", "war_and_peace", "the_great_gatsby", "lolita", "middlemarch", "the_adventures_of_huckleberry_finn", "the_stories_of_anton_checkhov", "in_search_of_lost_time", "hamlet"];

//3
// function printBooks(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write("<ul><li> " + arr[i] + "</li></ul>")
//     }
// }

// printBooks(books)

//4
let objBooks = {};

objBooks[books[0]] = {
    title: "Anna Karenina",
    language: "Russian",
    author: "Leo Tolstoy",
    img: "http://ecx.images-amazon.com/images/I/51vPf2CfSEL.jpg"
}

objBooks[books[1]] = {
    title: "Madame Bovary",
    language: "French",
    author: "Gustave Flaubert",
    img: "http://ecx.images-amazon.com/images/I/51o5dnjk07L.jpg"    
}

objBooks[books[2]] = {
    title: "War and Peace",
    language: "Russian",
    author: "Leo Tolstoy",
    img: "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL.jpg"
}

objBooks[books[3]] = {
    title: "The Great Gatsby",
    language: "English",
    author: "F. Scott Fitzgerald",
    img: "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL.jpg"
}

objBooks[books[4]] = {
    title: "Lolita",
    language: "Russian",
    author: "Vladimir Nabokov",
    img: "https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L.jpg"
}

objBooks[books[5]] = {
    title: "Middlemarch",
    language: "English",
    author: "George Eliot",
    img: "https://images-na.ssl-images-amazon.com/images/I/417bAwhZhOL.jpg"
}

objBooks[books[6]] = {
    title: "Adventures of Huckleberry Finn",
    language: "English",
    author: "Mark Twain",
    img: "http://ecx.images-amazon.com/images/I/51Ht1M-GPXL.jpg"
}

objBooks[books[7]] = {
    title: "The Stories of Anton Chekhov",
    language: "English",
    author: "Anton Chekhov",
    img: "https://images-na.ssl-images-amazon.com/images/I/51Oq8JfXh4L.jpg"
}

objBooks[books[8]] = {
    title: "In Search of Lost Time",
    language: "French",
    author: "Marcel Proust",
    img: "https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL.jpg"
}

objBooks[books[9]] = {
    title: "Hamlet",
    language: "English",
    author: "William Shakespeare",
    img: "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L.jpg"
}

//5 
function printBooksObj(obj) {
    document.write("<div class='flex-container'>")

    for (let i = 0; i < Object.keys(obj).length; i++){
        document.write("<ul style='list-style-type:none;'>" + "<li class='title'>" + obj[books[i]].title.replace(/['"]+/g, '') + "</li>" + "<li class='image'><img src=" + obj[books[i]].img + "></img></li>" + "<li class='language'> Language: " + obj[books[i]].language.replace(/['"]+/g, '') + "</li>" + "<li class='author'> Author: " + obj[books[i]].author.replace(/['"]+/g, '') + "</li>" + "</ul>")
    }
    document.write("</div>")
}

printBooksObj(objBooks)