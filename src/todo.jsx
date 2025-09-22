// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task, isDone, time=0}){
//         if(isDone===true){
//             return(
//                 <li>Done: {task} Duration: {time}</li>
//             )
//         }
//         else{
//             return(
//                 <li>Do Now: {task}</li>
//             )
//         }
// }

export default function ToDo({task, isDone, time=0}){
    return isDone ? (
      <li>
        Done: {task} Time: {time}
      </li>
    ) : (
      <li>
        Not Done: {task} Time: {time}
      </li>
    );
}