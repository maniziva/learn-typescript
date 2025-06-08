test('Remove all whitsepaces from a string', ()=>{
    const str: string = "Manikandan Adaikalam";
    const removedStr = str.replace(/\s+/g, "");
    console.log(removedStr);
});

test('Replace the string', ()=>{
    const str: string = "Manikandan Adaikalam";
    const replaceStr = str.replace(/a/gi, "A");
    console.log(replaceStr);
});

test('Replace the string array', ()=>{
    const str: string[] = ["Manikandan", "Adaikalam"];
    const replaceStr = str.map(item => item.replace(/a/gi, "A"));
    console.log(replaceStr);
});