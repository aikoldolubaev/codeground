const strMatch = (candidates, pattern) => {
    let times = 0;
    for(let i=0; i<candidates.length; i++){
        let sample = candidates.substring(i, i+pattern.length);
        if(sample === pattern){
            times++;
        }

    }
    return times;
}
console.log(strMatch("okbokoko", "ok")); //3