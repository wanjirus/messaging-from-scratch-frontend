import React from 'react'

const InputForm = () => {
    const [text, setText] = useState('')
    const onSubmit=(e)=>{
    e.preventDefault()
    if(!text){
        aleart ('please add Message')
        return
    }
    onAdd({text})
    setText('')
    }
    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} 
                onChange={(e) => setText(e.target.value)}
                 />
                 

            </div>
            </form>
        </div>
    )
}

export default InputForm
