// let books =[];
// let editBookContainer = document.querySelector(".edit-book")

// function isAuthenticated(){
//     let isLoggedIn = window.localStorage.getItem("loggedIn");
//     if(!isLoggedIn){
//         window.location.href = "login.html";
//     }
// }

// function logout(){
// window.localStorage.removeItem("loggedIn");
// }
// function addBook(){
//     let bookName = document.querySelector(".name");
//     let total = document.querySelector(".name");

   
//     let book = {
//         name:bookName.value,
//         total:total.value,
//         available:total.value,
//     }

//     books.push(book);
//     window.localStorage.setItem("books",JSON.stringify(books));

//     displayBooks();
// }

// function displayBooks(){
//     let storageBooks = window.localStorage.getItem("books")

//     if(storageBooks){
//         books = JSON.parse(storageBooks);
//     }

//     let booksContainer = document.querySelector(".booksContainer");

//     booksContainer.innerHTML = '';
//     for(let i = 0; i<books.length;i++){
//         booksContainer.innerHTML +=` 
//         <tr>
//             <td>${i+1}</td>
//             <td>${books[i].name}</td>
//             <td>${books[i].total}</td>
//             <td>${books[i].available}</td>
//             <td>
//                <button onclick = "editBook(${i})">Edit</button>
//                <button onclick = "deleteBook(${i})">Delete</button>
                
//                 </td>



//         </tr>
//         `;

//     }
// }
// function editBook(i){
// let editBookContainer = document.querySelector(".edit-book");
// editBookContainer.innerHTML =`
// <h1>Edit Book ${books[i].name}</h1>
// <input placeholder="name" class="editname" value ="${books[i].total}"/><br>
// <input type="number"  placeholder="edittotal" class="total"  value ="${books[i].available}"/><br>
// <button class="add-books" onclick="edit(${i})" >update book</button>


// `
// }

// function deleteBook(i){
//     books.splice(i,1);
//     window.localStorage.setItem("books",JSON.stringify(books));
//     displayBooks();
// }
// displayBooks();


let books = [];
let editBookContainer = document.querySelector(".edit-book");

function isAuthenticated(){
    let isLoggedIn = window.localStorage.getItem("loggedIn");
    if(!isLoggedIn){
        window.location.href = "login.html";
    }
}

isAuthenticated();

function logout(){
    window.localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


function addBook(){
    let bookName = document.querySelector(".name");
    let total = document.querySelector(".total");

    let book = {
        name:bookName.value,
        total:total.value,
        available:total.value
    }

    books.push(book);
    window.localStorage.setItem("books",JSON.stringify(books));
    displayBooks();

}

function displayBooks(){
    let storageBooks = window.localStorage.getItem("books");

    if(storageBooks){
        books = JSON.parse(storageBooks);
    }

    let booksContainer = document.querySelector(".booksContainer");

    booksContainer.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        booksContainer.innerHTML += `
            <tr>
                <td> ${index+1} </td>
                <td> ${books[index].name} </td>
                <td> ${books[index].total} </td>
                <td> ${books[index].available} </td>
                <td>
                    <button onclick="editBook(${index})" >Edit</button>
                    <button onclick="deleteBook(${index})" >Delete</button>
                </td>
            </tr>
        `;
        
    }
}

function editBook(index){
    
    editBookContainer.innerHTML = `
        <h1>Edit ${books[index].name}</h1>
        <input placeholder="name" class="editName" value="${books[index].name}" /><br>
        <input type="number" placeholder="total" class="editTotal" value="${books[index].total}" /><br>
        <button onclick="edit(${index})">Update book</button>
    `
}

function edit(index){
    let bookName = document.querySelector(".editName");
    let total = document.querySelector(".editTotal");

    books[index].name = bookName.value;
    books[index].total = total.value;
    books[index].available = total.value;

    window.localStorage.setItem("books",JSON.stringify(books));
    displayBooks();
    editBookContainer.innerHTML = "";

}


function deleteBook(index){
    books.splice(index,1);
    window.localStorage.setItem("books",JSON.stringify(books));
    displayBooks();
}

displayBooks();