let titleOfBook = document.querySelector('.title-of-book');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
let readOrNot = document.querySelector('.read-or-not');
let infoBook = document.querySelector('.info-book');
let enter = document.querySelector(".enter");
let displayAllBook = document.querySelector('.display-book');
let arrLibrary = [];
let arrLibraryOne = [];
let toCompare = 0;


function Book(title, authorBook, pagesNomber){
  this.title = title;
  this.authorBook = authorBook;
  this.pagesNomber = pagesNomber;
}

function addBookToLibrary(newBook){
  arrLibrary.push(newBook);
  arrLibraryOne.push(newBook);
}

enter.addEventListener('click', ()=>{
  let book = new Book(titleOfBook.value, author.value, pages.value);
  if(book.title !== "" && book.authorBook !== "" && book.pagesNomber !== ""){
    addBookToLibrary(book);
    titleOfBook.value = "";
    author.value = "";
    pages.value = "";
  }else{
    alert("Please complete all feald.");
  }
  toCompare = arrLibraryOne.length;
});



displayAllBook.addEventListener('click', ()=>{
  if(arrLibrary.length !== 0){
    for(let i=0; i<arrLibrary.length; i++){
      let divButContent = document.createElement('div');
      let div = document.createElement('div');
      let deleteBut = document.createElement('button');
      let toggleBut = document.createElement('button');

      divButContent.className = "divContentAll"+i;
      div.className = "disp"+i;
      deleteBut.className = "displayThis " +i;
      deleteBut.innerHTML = "Delete";
      deleteBut.style.width = "10%";
      deleteBut.style.fontFamily = "'Courier New', Courier, monospace";
      deleteBut.style.color = "rgb(36, 35, 35)";
      toggleBut.className = "read " +i;
      toggleBut.innerHTML = "Read stat";
      toggleBut.style.width = "10%";
      toggleBut.style.fontFamily = "'Courier New', Courier, monospace";
      toggleBut.style.color = "rgb(36, 35, 35)";
      div.innerHTML = arrLibrary[i].title + ', ' + arrLibrary[i].authorBook + ', ' + arrLibrary[i].pagesNomber;
      infoBook.appendChild(divButContent);
      divButContent.style.display = "flex";
      divButContent.style.gap = "1px";
      divButContent.style.margin = "8px";
      divButContent.appendChild(div);
      div.style.width = "80%";
      div.style.color = "white";
      div.style.paddingLeft = "5px";
      divButContent.appendChild(deleteBut);
      divButContent.appendChild(toggleBut);
    }
    arrLibrary = [];
    let delBut = document.querySelectorAll('.displayThis');
    let readButStatus = document.querySelectorAll('.read');
    let compt = 0;
    Book.prototype.isRead = function(){
      return this.title + " is read.";
    }
    
    for(butThatDel of delBut)
      butThatDel.addEventListener('click', (e)=>{
        let index = e.target.className.slice(e.target.className.length-1);
        compt++;
        infoBook.removeChild(document.querySelector('.divContentAll'+index));
        if(compt == toCompare){
          arrLibraryOne = [];
        }
      })

    for(statReadBook of readButStatus)
      statReadBook.addEventListener('click', (ev)=>{
        let indexOne = ev.target.className.slice(ev.target.className.length-1);
        let bookOne = new Book(arrLibraryOne[indexOne].title, arrLibraryOne[indexOne].authorBook, arrLibraryOne[indexOne].pagesNomber);
        document.querySelector('.disp'+indexOne).classList.toggle("is-read");
        if(document.querySelector('.disp'+indexOne).className === 'disp'+indexOne+' is-read'){
          document.querySelector('.disp'+indexOne).innerHTML = bookOne.isRead();
          document.querySelector(indexOne).style.color = "green";
        }else if(document.querySelector('.disp'+indexOne).className === 'disp'+indexOne){
          document.querySelector('.disp'+indexOne).innerHTML = bookOne.title+', '+bookOne.authorBook+', '+bookOne.pagesNomber;
        }
      })
  }else{
    alert('There is no new books yet.')
  }
  
})