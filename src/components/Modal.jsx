import { useEffect, useRef } from "react"

export default function Modal({selectedMovie, showModal, closeModal}){

    const dialogRef = useRef()
    const countRef = useRef(0)

    useEffect(()=>{
        if(showModal) dialogRef?.current.showModal()

        const interval = setInterval(()=>{
            countRef.current++
            console.log(countRef.current)
            // dialogRef.current.close()
        }, 1000)

        return ()=> clearInterval(interval)
    }, [])


    return(
        <dialog ref={dialogRef} id="modal">
            <h2>{selectedMovie.Title}</h2>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <br/>
            <button onClick={closeModal}>X</button>
        </dialog>
    )
}