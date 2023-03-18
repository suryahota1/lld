class Player {

    constructor ( name, position ) {
        this.info = {
            name,
            position: position,
            id: Math.ceil(Math.random * 1000 + 999)
        };
        this.next = null;
    }

    setPosition ( position ) {
        this.info.position = position;
    }
}

export default Player;
