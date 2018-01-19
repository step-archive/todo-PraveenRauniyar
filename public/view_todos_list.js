const getLink = function(title){
  return `<a href =${title}todo> ${title}</a><br><br/>`;
}

const reqListener = function() {
  let allTodos = this.responseText;
  let todoListDiv = document.getElementById('to-do-list');
  allTodos = allTodos.split(',');
  let allTitles = '<br/>';
  allTodos.forEach((title)=>{
    allTitles += getLink(title);
  });
  todoListDiv.innerHTML = allTitles + "<br/><br/>";
}

const displayTodoList = () => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/todo");
  oReq.send();
};
window.onload = displayTodoList;