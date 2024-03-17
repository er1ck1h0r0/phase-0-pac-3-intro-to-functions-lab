function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    let str = string.toUpperCase();
    console.log(str);
}

function logWhisper(string){
    let str = string.toLowerCase();
    console.log(str);
}
function sayHiToHeadphonedRoommate(string){
    //let string_1 = "Ican't hear you";
    //let string_2 = "YES INDEED!";
    //let string_3 = "I would love to!";

    if(string === string.toLowerCase()){
    return "I can't hear you!";
    }
    if(string === string.toUpperCase()){
        return 'YES INDEED!' ;

    }
    if(string = "Let's have dinner togehter!"){
        return "I would love to!";
    }
}