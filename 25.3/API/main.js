
// let API_URL = "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind"
// $.get(API_URL, function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

// let API_URL = "https://jsonplaceholder.typicode.com/users"
// $.get(API_URL, function(result){
//     console.log(result[result.length-1].company.catchPhrase)
// })

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data)
//     },
//     error: function (xhr, text, error) {
//         console.log(text)
//     }
// })


//exercises
//1
// const fetch = function () {
//     let isbn = "0439023521"
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }


//2
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ':' + queryValue,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }
// fetch("title", "The Wise Man's Fears")


//3
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ':' + queryValue,
//         success: function (data) {
//             let title = data.items[0].volumeInfo.title
//             let author = data.items[0].volumeInfo.authors[0]
//             let isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier
//             console.log("title: " + title + ", author: " + author + ", isbn: " + isbn)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }
// fetch("title", "The Wise Man's Fears")


//4 not finished
let api_key= "ue9SQLD6ltJEF3POS53SXP5gJHLStZlK"
let q= "cats"
$.ajax({
    method: "GET",
    url: 'https://api.giphy.com/v1/gifs/search?q=' + q + '&api_key=' + api_key,
    success: function (result) {
        let gif = "<iframe src=" + result.data[1].embed_url + "></iframe>"
        let gif1 = $(gif)
        $("body").append(gif1)
        console.log(result)
    },
    error: function (xhr, text, error) {
        console.log(text)
    }
})