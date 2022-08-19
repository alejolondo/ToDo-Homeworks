
const emojiContainer = document.getElementById('emojiContainer')
const myEmojis = []
const inputEmoji = document.getElementById('emoji-input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shifBtn = document.getElementById('shift-btn')

function renderEmojis(){
    emojiContainer.innerHTML = ""

    for(let i = 0; i < myEmojis.length; i++){
        const emoji = document.createElement('li')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()


pushBtn.addEventListener('click', function(){
    if(inputEmoji.value){
        myEmojis.push(inputEmoji.value)
        inputEmoji.value = ""
        renderEmojis()
    }
})


unshiftBtn.addEventListener('click', function(){
    if(inputEmoji.value){
        myEmojis.unshift(inputEmoji.value)
        inputEmoji.value = ""
        renderEmojis()
    }
})

shifBtn.addEventListener('click', function(){
    myEmojis.shift()
    renderEmojis()
})

popBtn.addEventListener('click', function(){
    myEmojis.pop()
    renderEmojis()
})

