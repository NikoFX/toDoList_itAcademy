const list = []
let s = 1

function update() {
    document.querySelector('ul').innerHTML = ''
    list.forEach((x) => {
        document.querySelector('ul').innerHTML += `
        <li>${x}<div class="del-button" onclick="del(${list.indexOf(x)})">+</div></li>
        `
    })
    //sort icon active-passive
    const sortIcon = document.querySelector('#sort-icon')
    if (list.length) {
        sortIcon.classList.replace('sort-icon-down-passive', 'sort-icon-down-active')
    } else {
        sortIcon.className = 'sort-icon-down-passive'
    }
}
update()

function del(p) {
    list.splice(p, 1)
    update()
}

document.querySelector('.input-area .del-button').addEventListener('click', () => {
    document.querySelector('input').value = ''
})

document.querySelector('html').addEventListener('click', (e) => {
    document.querySelector('ul').style.display = 'none'
})

document.querySelector('.card').addEventListener('click', (e) => {
    if (document.querySelector('ul').style.display == 'none') {
        document.querySelector('ul').style.display = 'block'
    }
    e.stopPropagation()
})

document.querySelector('button').addEventListener('click', (e) => {
    const input = document.querySelector('input')
    if (input.value) {
        list.push(input.value)
        input.value = ''
        update()
    } else {
        input.placeholder = "To-do daxil edin"
    }
})

//Sorting
let sortIcon = document.querySelector('#sort-icon')
sortIcon.addEventListener('click', () => {
    if (s) {
        sortIcon.className = 'sort-icon-up-active'
        s = 0
        list.sort((a,b)=>a.localeCompare(b))
    } else {
        sortIcon.className = 'sort-icon-down-active'
        s = 1
        list.sort((a,b)=>b.localeCompare(a))
    }
    update()
})