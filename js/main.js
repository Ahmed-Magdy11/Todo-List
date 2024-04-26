var tasks;
var temp;
taskName=document.getElementById("taskName");
if(localStorage.getItem("Todo List")==null){
    tasks=[];

}
else{
    tasks=JSON.parse(localStorage.getItem("Todo List"));
    display();
}
temp=tasks.length;
function addTask(){
    tasks.push(taskName.value);
    localStorage.setItem("Todo List",JSON.stringify(tasks));
    temp=tasks.length;
    document.getElementById("count").innerHTML=`You have ${temp} pending tasks`;
display();
rest();
}
function display(){
    var row=``;
    for(var i=0;i<tasks.length;i++){
       row+=`
       <div class="d-flex justify-content-between align-items-center my-3" >

     
       <span>${tasks[i]}</span>
              <button onclick="del()" class="btn btn-danger">delete</button>
       </div>`

    }
    document.getElementById("task").innerHTML=row;
}
function rest(){
    taskName.value="";
}
function clearAll(){
    localStorage.removeItem("Todo List");
    tasks=[];
    temp=tasks.length;
    document.getElementById("count").innerHTML=`You have ${temp} pending tasks`;
    display();
}
document.getElementById("count").innerHTML=`You have ${temp} pending tasks`;
function del(x){
tasks.splice(x,1);
temp=tasks.length;
localStorage.setItem("Todo List",JSON.stringify(tasks));
document.getElementById("count").innerHTML=`You have ${temp} pending tasks`;
display();
}