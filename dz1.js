//Список дел
let List{
   task1:"up",
   task2:"close bed",
   task3:"eat"
}

let x = +prompt("1-добавить, 2-удалить")
if (x === 1){
    let a = prompt("Ведите ключ новой задачи")
    let b = prompt("Введите значение задачи")
    List[a] = b
    console.log(List)
} else if (x === 2){
    deleteTask = prompt("Введите ключ задачи для удаления")
    delete List[deleteTask]
    console.log(List)
}
