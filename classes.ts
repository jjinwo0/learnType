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

//인터페이스는 오버로딩이 가능
interface UserInterface {
    name:string
}
interface UserInterface {
    lastName:string
}
interface UserInterface {
    health:number
}

interface PlayerEx extends UserInterface{
}

// const nicoImpl : PlayerEx = {
//     name:"nico",
//     lastName:"potato",
//     health:10
// }

// abstract class UserAbs{
//     constructor(
//         protected firstName:string,
//         protected lastName:string
//     ){}
//     abstract sayHi(name:string):string
//     abstract fullName():string
// }

// class PlayerEx extends UserAbs{
//     sayHi(name: string): string {
//         return `Hello ${name}. My name is ${this.fullName()}`
//     }
//     fullName(): string {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//추상클래스 -> JS 변환 시, 일반 클래스로 변환
//인터페이스 -> JS 변환 시, 반영되지 않고 사라짐.

interface UserInt{
    firstName:string,
    lastName:string
    sayHi(name:string):string
    fullName():string
}

class PlayerEx implements UserInt{
    constructor(
        public firstName:string,
        public lastName:string
    ){}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}