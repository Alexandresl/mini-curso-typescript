// accountInfo
// charInf
// PlayerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

type charInfo = {
    nickname: string;
    level: number;
}

// intersection
type PlayerInfo = AccountInfo & charInfo;

const Account: AccountInfo = {
    id: 123,
    name: 'Willian',
    email: 'willianJusten@gmail.com'
}

const char: charInfo = {
    nickname: 'will',
    level: 100
}

const player: PlayerInfo = {
    id: 123,
    name: 'alexandre',
    nickname: 'alex',
    level: 123,
}