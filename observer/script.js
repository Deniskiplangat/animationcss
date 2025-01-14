
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenItems = document.querySelectorAll('.hidden')
hiddenItems.forEach((el)=>{
    observer.observe(el)
})