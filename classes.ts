abstract class User{
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickName: string
    ) {}
    abstract getNickName(): void

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User{
    getNickName(): void {
        console.log(this.nickName);
    }
}

const playerNico = new Player("nico", "las", "니꼬");

playerNico.getFullName();

type Words = {
    [key:string]: string
}

class Dict{
    private words : Words
    constructor(){
        this.words = {}
    }
    add(word: Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
}

class Word{
    constructor(
        public readonly term: string,
        public readonly def: string
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi")

//특정 값만을 사용하도록 정할 수 있음.
type Team = "read" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface Player2 {
    nickname:string,
    team:Team,
    healthBar:Health
}

const nico2 : Player2 = {
    nickname:"read",
    team:"blue",
    healthBar:10
}

interface UserInterface {
    name:string
}

interface PlayerImpl extends User{

}

const nicoImpl : PlayerImpl = {
    name:"nico"
}