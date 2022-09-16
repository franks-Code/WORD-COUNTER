const textArea = document.getElementById("content")
const characterCount = document.getElementById("cCount")
const wordsCount = document.getElementById("wCount")


textArea.oninput = ()=>{
    let characters = textArea.value;
    characterCount.textContent = characters.replace(/\s/g,"").length

    let words = textArea.value.split(" ").filter((item)=>{
        return item !=" ";
    })
    wordsCount.textContent = words.length;
}
