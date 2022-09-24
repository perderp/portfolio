



window.addEventListener('DOMContentLoaded', (e) => {
    // USING INTERSECTION OBSERVER FUNCTION
    const theObserver = (type) => {
        return (new IntersectionObserver( (entries) => {
            entries.forEach( (entry) => {
                var el = entry.target;
                if(entry.isIntersecting) {
                    if(!el.classList.contains(`${type}`)) el.classList.add(`${type}`)
                }
            })
        }))
    }
    // USING DOCUMENT QUERY ALL AND INTERSECTION OBSERVER
    const querySelection = (className, classAnimate) => {
        className = document.querySelectorAll(`.${className}`);
        className.forEach( (el) => {
            theObserver(classAnimate).observe(el)
        })
    }
    querySelection('hidden-shake','shake')
    querySelection('hidden-left', 'fade-left-in')
    querySelection('hidden-right', 'fade-right-in')
    querySelection('hidden-pop', 'text-pop-right')

    
    const spinner = document.querySelectorAll('.spinner');

    window.onscroll = () => {
        spinner.forEach((el) => {
            el.style.transform = "rotate(" + this.scrollY / 5 + "deg)";
        })
    }
    const menu = document.querySelector('.p-header__bar');
    menu.addEventListener("click", (e) => {
        menu.classList.toggle('p-header__change')
        const modal = document.querySelector('.p-header__ul')
        if(modal.style.display == "none" || modal.style.display === "") modal.style.display = "flex";
        else modal.style.display = "none";

    })
})