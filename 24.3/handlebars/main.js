//spot1
// let items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
// ]
// let source = $("#store-template").html()
// let template = Handlebars.compile(source)
// for (let item of items) {
//     let newHTML = template(item)
//     $(".items").append(newHTML)
// }


//spot2
// let classData = {
//     classmates: [
//         { name: "That on gal", description: "Always has the ansswer" },
//         { name: "The weird dude", description: "Quick with a smile" },
//         { name: "Taylor", description: "Just Taylor" }
//     ]
// }
// let source = $("#name-template").html()
// let template = Handlebars.compile(source)
// let newHTML = template(classData)
// $(".view").append(newHTML)


//spot3
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
let source = $("#animals-template").html()
let template = Handlebars.compile(source)
let newHTML = template({animals})
$(".view1").append(newHTML)

let source2 = $("#languages-template").html()
let template2 = Handlebars.compile(source2)
let newHTML2 = template2({languages})
$(".view2").append(newHTML2)
