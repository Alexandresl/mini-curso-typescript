interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: 'The last of Us',
    description: 'The best game in the world',
    genre: 'action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);        
    }
}


console.log(tlou.genre);
if (tlou.getSimilars) tlou.getSimilars(tlou.title);

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftBehind: DLC = {
    title: 'The last of us = left behind',
    description: 'You play as Ellie b efore the original game',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters'],
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    platform: string[];
    constructor(title: string, description: string, genre: string, platform: string[]) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }
    getSimilars() {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}