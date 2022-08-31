function DeleteButton({deleteEventHandler, id}){
    return (
        <i onClick={ () => deleteEventHandler(id) } className="bi bi-x-lg text-secondary delete-button" ></i>
    )
}
export default DeleteButton