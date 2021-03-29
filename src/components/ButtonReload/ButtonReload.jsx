const ButtonReload = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <button class="btn" type="button" onClick={refreshPage}>Reload</button>
    );
}

export default ButtonReload;