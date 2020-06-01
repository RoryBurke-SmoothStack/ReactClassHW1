'use strict'

class Book{
    constructor(isbn, title, author){
        this.id = id;
        this.title = title;
        this.author = author;
    }

    toString(){
        return this.isbn + ' - ' + this.title + ' - ' + this.author;
    }
}

const bookList = [
    { id: 1, title: "Girl with the Dragon Tattoo", author: "Stieg Larson"},
    { id: 2, title: "The Dry", author: "Jane Harper"},
    { id: 3, title: " The Great Gatsby", author: "F. Scott Fitzgerald"},
    { id: 4, title: "Gone Girl", author: "Gillian Flynn"},
    { id: 5, title: "The Alienist", author: "Caleb Carr"},
    { id: 6, title: "Red Dragon", author: "Thomas Harris"},
    { id: 7, title: "Masked Prey", author: "John Sandford"},
    { id: 8, title: "The Killer Inside Me", author: "Jim Thompson"},
    { id: 9, title: "Strangers on a Train", author: "Patricia Highsmith"},
    { id: 10, title: "Odyssey", author: "Homer"},
    { id: 11, title: "The Last Trial",author: "Scott Turow"},
    { id: 12, title: "The Border", author: "Don Winslow"},
    { id: 13, title: "The Thief", author: "Fuminori Nakamura"},
    { id: 14, title: "Night Prayers", author: "Santiago Gamboa"},
    { id: 15, title: "Dare Me", author: "Megan Abbott"},
    { id: 16, title: "The Man Who Loved Dogs", author: "Leonardo Pavura" },
    { id: 17, title: "Every Man a Menace", author: "Patrick Hoffman"},
    { id: 18, title: "Brave New World", author: "Aldous Huxley" },
    { id: 19, title: "The Long Drop", author: "Denise Mina" },
    { id: 20, title: "Havana Lunar", author: "Robert Arellano" },
];

console.log("first book: " + bookList[0]);
console.log("second book: " + bookList[1]);
console.log("first book: " + bookList[0]["id"]);
console.log("second book: " + bookList[1]["id"]);

const bookCount = 20;
const booksPerPage = 6;
const numPages = Math.ceil(bookCount / booksPerPage);
let currentPage = 1;

console.log("Starting current page (which should be 1) is: " + currentPage);

function loadTable(currentPage){
    let bkTable = document.createElement("table");
    let tblHdrRow = document.createElement("tr");
    let tblHdrID = document.createElement("th");
    let tblHdrTitle = document.createElement("th");
    let tblHdrAuthor = document.createElement("th");

    tblHdrRow.appendChild(tblHdrID);
    tblHdrRow.appendChild(tblHdrTitle);
    tblHdrRow.appendChild(tblHdrAuthor);

    bkTable.appendChild(tblHdrRow);
    
    
    let startIndex = ((currentPage - 1) * booksPerPage);
    let endIndex = (startIndex + booksPerPage);
    
    let count = -1;
    for(count = startIndex; ((count < bookList.length) && (count < endIndex)); count++){
        let book = bookList[count];
        
        let tdID = document.createElement("td");
        tdID.innerHTML = book["id"];
        
        let tdTitle = document.createElement("td");
        tdTitle.innerHTML = book["title"];
        
        let tdAuthor = document.createElement("td");
        tdAuthor.innerHTML = book["author"];
        
        let tblRow = document.createElement("tr");
        tblRow.appendChild(tdID);
        tblRow.appendChild(tdTitle);
        tblRow.appendChild(tdAuthor);
        
        bkTable.appendChild(tblRow);
    }
    
    let parent = document.getElementById("booksTable").parentNode;
    parent.replaceChild(bkTable, document.getElementById("booksTable"));
    bkTable.id = "booksTable";
}

function prevButtonOnClick () {
    console.log("in PrevButtonOnClick and current Page is: " + currentPage);
    if(currentPage > 1){
        currentPage--;
        switch(currentPage){
            case 1:
                document.getElementById("previousButton").className = "page-item disabled";
                document.getElementById("page1").className = "page-item active";
                document.getElementById("page2").className = "page-item";
                break;
            case 2:
                document.getElementById("page2").className = "page-item active";
                document.getElementById("page3").className = "page-item";
                break;
            case 3:
                document.getElementById("page3").className = "page-item active";
                document.getElementById("page4").className = "page-item";
                document.getElementById("nextButton").className = "page-item";
                break;
        }
    }
    // let next = document.getElementById("nextButton").className;
    // if(next === "page-item disabled") next = "page-item";
    if(document.getElementById("nextButton").className == "page-item disabled"){
        document.getElementById("nextButton").className = "page-item";
    }
    console.log("currentPage is: " + currentPage);
    loadTable(currentPage);
}

function page1OnClick (){
    console.log("in page1OnClick and current Page is: " + currentPage);
    switch(currentPage){
        case 1:
            return;
        case 2:
            document.getElementById("page1").className = "page-item active";
            document.getElementById("page2").className = "page-item";
            break;
        case 3:
            document.getElementById("page1").className = "page-item active";
            document.getElementById("page3").className = "page-item";
            break;
        case 4:
            document.getElementById("page1").className = "page-item active";
            document.getElementById("page4").className = "page-item";
            document.getElementById("nextButton").className = "page-item";
            break;
    }
    document.getElementById("previousButton").className = "page-item disabled";
    // let next = document.getElementById("nextButton").className;
    // if(next === "page-item disabled") next = "page-item";
    if(document.getElementById("nextButton").className == "page-item disabled"){
        document.getElementById("nextButton").className = "page-item";
    }
    currentPage = 1;
    console.log("currentPage is: " + currentPage);
    loadTable(currentPage);
}

function page2OnClick (){
    console.log("in page2OnClick and current Page is: " + currentPage);
    switch(currentPage){
        case 1:
            document.getElementById("page2").className = "page-item active";
            document.getElementById("page1").className = "page-item";
            document.getElementById("previousButton").className = "page-item";
            break;
        case 2:
            return;
        case 3:
            document.getElementById("page2").className = "page-item active";
            document.getElementById("page3").className = "page-item";
            break;
        case 4:
            document.getElementById("page2").className = "page-item active";
            document.getElementById("page4").className = "page-item";
            document.getElementById("nextButton").className = "page-item";
            break;
    }
    // let prev = document.getElementById("previousButton").className;
    // if(prev === "page-item disabled") prev = "page-item";
    // let next = document.getElementById("nextButton").className;
    // if(next === "page-item disabled") next = "page-item";
    if(document.getElementById("previousButton").className == "page-item disabled"){
        document.getElementById("previousButton").className = "page-item";
    }
    if(document.getElementById("nextButton").className == "page-item disabled"){
        document.getElementById("nextButton").className = "page-item";
    }
    currentPage = 2;
    console.log("currentPage is: " + currentPage);
    loadTable(currentPage);
}

function page3OnClick (){
    console.log("in page3OnClick and current Page is: " + currentPage);
    switch(currentPage){
        case 1:
            document.getElementById("page3").className = "page-item active";
            document.getElementById("page1").className = "page-item";
            document.getElementById("previousButton").className = "page-item";
            break;
        case 2:
            document.getElementById("page3").className = "page-item active";
            document.getElementById("page2").className = "page-item";
            break;
        case 3:
            return;
        case 4:
            document.getElementById("page3").className = "page-item active";
            document.getElementById("page4").className = "page-item";
            document.getElementById("nextButton").className = "page-item";
            break;
    }
    // let prev = document.getElementById("previousButton").className;
    // if(prev === "page-item disabled") prev = "page-item";
    // let next = document.getElementById("nextButton").className;
    // if(next === "page-item disabled") next = "page-item";
    if(document.getElementById("previousButton").className == "page-item disabled"){
        document.getElementById("previousButton").className = "page-item";
    }
    if(document.getElementById("nextButton").className == "page-item disabled"){
        document.getElementById("nextButton").className = "page-item";
    }
    currentPage = 3;
    console.log("currentPage is: " + currentPage);
    loadTable(currentPage);
}

function page4OnClick (){
    console.log("in page4OnClick and current Page is: " + currentPage);
    switch(currentPage){
        case 1:
            document.getElementById("page4").className = "page-item active";
            document.getElementById("page1").className = "page-item";
            // document.getElementById("previousButton").className = "page-item";
            break;
        case 2:
            document.getElementById("page4").className = "page-item active";
            document.getElementById("page2").className = "page-item";
            break;
        case 3:
            document.getElementById("page4").className = "page-item active";
            document.getElementById("page3").className = "page-item";
            break;
        case 4:
            return;
    }
    document.getElementById("nextButton").className = "page-item disabled";
    // let prev = document.getElementById("previousButton").className;
    // if(prev === "page-item disabled") prev = "page-item";
    if(document.getElementById("previousButton").className == "page-item disabled"){
        document.getElementById("previousButton").className = "page-item";
    }
    currentPage = 4;
    console.log("currentPage is: " + currentPage);
    loadTable(currentPage);
}

function nextButtonOnClick () {
    if(currentPage < 4){
        console.log("in nextButtonOnClick and current Page is: " + currentPage);
        currentPage++;
        switch(currentPage){
            case 2:
                document.getElementById("previousButton").className = "page-item";
                document.getElementById("page2").className = "page-item active";
                document.getElementById("page1").className = "page-item";
                break;
            case 3:
                document.getElementById("page3").className = "page-item active";
                document.getElementById("page2").className = "page-item";
                break;
            case 4:
                document.getElementById("page4").className = "page-item active";
                document.getElementById("page3").className = "page-item";
                document.getElementById("nextButton").className = "page-item disabled";
                break;
        }
    }
    // let prev = document.getElementById("prevButton").className;
    if(document.getElementById("previousButton").className == "page-item disabled"){
        document.getElementById("previousButton").className = "page-item";
    }
    console.log("currentPage is: " + currentPage);
    loadTable(currentPage);
}

document.getElementById("previousButton").onclick = prevButtonOnClick;
document.getElementById("page1").onclick = page1OnClick;
document.getElementById("page2").onclick = page2OnClick;
document.getElementById("page3").onclick = page3OnClick;
document.getElementById("page4").onclick = page4OnClick;
document.getElementById("nextButton").onclick = nextButtonOnClick;

loadTable(currentPage);