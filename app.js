
//hiding all sections in home but about
const elementToHide = document.getElementsByClassName('exp-container');
Array.from(elementToHide).forEach((el) => {
    el.style.display = 'none';
})


//add event listner to experience
const experience = document.getElementById('experience');

experience.addEventListener('click', function () {
    const elementToDisplay = document.getElementsByClassName('exp-container')
    const elementToDisplay2 = document.getElementsByClassName('experience')

    const elementToHide = document.getElementsByClassName('about');
    Array.from(elementToHide).forEach((el) => {
        el.style.display = 'none';
    })

    //updating head
    const container = document.getElementById('about-head pad-l2');
    container.innerHTML = `<h1>Experience</h1>`

    //display div
    Array.from(elementToDisplay).forEach((el) => {
        el.style.display = 'block';
    })
    Array.from(elementToDisplay2).forEach((el) => {
        el.style.display = 'flex';
    })
})


//add event listner to about
const about = document.getElementById('about');

about.addEventListener('click', function () {
    const elementToDisplay = document.getElementsByClassName('about')
    const elementToHide = document.getElementsByClassName('exp-container');
    //remove other divs
    Array.from(elementToHide).forEach((el) => {
        el.style.display = 'none';
    })


    //updating head
    const container = document.getElementById('about-head pad-l2');
    container.innerHTML = `<h1>About Me</h1>`

    //display div
    Array.from(elementToDisplay).forEach((el) => {
        el.style.display = 'block';
    })
})


//add event listner to blog
const blog = document.getElementById('blog');

blog.addEventListener('click', function(){
    const elementToDisplay = document.getElementsByClassName('blog')
    const elementToHide = document.getElementsByClassName('about');
    const elementToHide2 = document.getElementsByClassName('exp-container');
    const elementToHide3 = document.getElementsByClassName('contact');
    //remove other divs
    Array.from(elementToHide).forEach((el) => {
        el.style.display = 'none';
    })
    Array.from(elementToHide2).forEach((el) => {
        el.style.display = 'none';
    })
    Array.from(elementToHide3).forEach((el) => {
        el.style.display = 'none';
    })

    //updating head
    const container = document.getElementById('about-head pad-l2');
    container.innerHTML = `<h1>Blog</h1>`
})