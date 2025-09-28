window.onload = function() {
    let firstLoad = document.querySelector('.first-load')
    firstLoad.classList.add('show')
    let container = document.querySelector('.container')
    container.classList.remove('showContainer')
    let btn = firstLoad.lastElementChild
    btn.addEventListener('click', () => {
        firstLoad.classList.remove('show')
        container.classList.add('showContainer')
    })

    let postes = document.querySelectorAll('.poste')
    let sideForm = document.querySelector('.side-form')
    let sideFormTitle = sideForm.querySelector('h2')
    let nameInput = sideForm.querySelector('#name')
    let timeSelect = sideForm.querySelector('#time')
    let playBtn = sideForm.querySelector('button')
    let total = document.querySelector('.tot');
    let clients = document.querySelector('.cli')
    let inUse = document.querySelector('.use')
    let isAvailaible = false
    let money = 0
    function availablePostes() {
        let availablePost = document.querySelectorAll('.poste.available').length
        inUse.textContent = availablePost
    }
    availablePostes()

    postes.forEach(poste => {
        poste.addEventListener('click', () => {
            if (poste.classList.contains('available')) {
                isAvailaible = poste
                sideForm.style.right = '0'
                sideFormTitle.textContent = poste.id.replace('-', ' ').toUpperCase()
                nameInput.value = ''
                timeSelect.selectedIndex = 0
            }
        })
    })

    playBtn.addEventListener('click',()=>{
        if (!isAvailaible) return;
        let time = timeSelect.value
        isAvailaible.classList.remove('available')
        isAvailaible.classList.add('not-available')
        let img = isAvailaible.querySelector('img')
        img.src = 'red.png'
        sideForm.style.right = '-700px'
        clients.textContent = (+(clients.textContent)+ 1).toString()
        availablePostes()
        let duration = 0
        if (time.includes('30')){
            duration = 30 * 60 * 1000
            money = money + 10
        } 
        else if (time.includes('1H'))  {
            duration = 60 * 60 * 1000
            money = money + 20
        }
        else if (time.includes('2H')) {
            duration = 2 * 60 * 60 * 1000
            money = money + 30
        }
        total.textContent = money+'DH'
        setTimeout(() => {
            isAvailaible.classList.remove('not-available')
            isAvailaible.classList.add('available')
            let img = isAvailaible.querySelector('img')
            img.src = 'green.png'
            availablePostes()
        }, duration);
        isAvailaible = false
    })
}