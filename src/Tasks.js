import Task from './Task';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';
import { useHistory } from "react-router-dom";


const Tasks = ({folders , match, onDelete, updateTask}) => {
    const index = match.params.id;
    {console.log(folders)}
    const id = folders.findIndex(folder => folder.id == index);
    let history = useHistory();

    return (
        <div className='container page'>
            <FaArrowLeft onClick={() => history.goBack()} className='backarrow'/>
            <h1 className='folder-title'>{folders[id].title}</h1>
            <div className='contant'>
                <ul className='tasks'>
                    { folders[id].tasks.length > 0 ? folders[id].tasks.map((task) =>(
                        <Task key={task.id} task={task} folderId={id} onDelete={onDelete} updateTask={updateTask} />
                    )) : 'There are no tasks in this folder'}
                </ul>
                <FaPlusCircle className='add-task-btn'/>
            </div>
        </div>
    )
}

export default Tasks
