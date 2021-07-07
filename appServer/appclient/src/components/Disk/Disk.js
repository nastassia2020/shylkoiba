import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../store/actions/file'
import './Disk.css'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])
    return (
        <div className='Disk'>
            <h1>DISK</h1>
        </div>
    )
}

export default Disk