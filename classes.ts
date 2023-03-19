abstract class User{
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User{

}

const playerNico = new Player("nico", "las", "니꼬");

playerNico.getFullName();