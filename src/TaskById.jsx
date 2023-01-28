import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTasksByIdQuery } from './api/apiSlice';

const TaskById = () => {
    const { id } = useParams();

    const { data } = useGetTasksByIdQuery(id);

    if (!data) return

    return (
        <div className='container'>
            <div>{data.id}</div>
            <div>{data.name}</div>
            <div>{data.completed ? 'true' : 'false'}</div>
        </div>
    )
}

export default TaskById