
//hiding all sections in home but about
const elementToHide = document.getElementsByClassName('exp-container');
Array.from(elementToHide).forEach((el) => {
    el.style.display = 'none';
})
const elementToHide2 = document.getElementsByClassName('blog pad-l2');
Array.from(elementToHide2).forEach((el) => {
    el.style.display = 'none';
})


//add event listner to experience
const experience = document.getElementById('experience');

experience.addEventListener('click', function () {
    const elementToDisplay = document.getElementsByClassName('exp-container')
    const elementToDisplay2 = document.getElementsByClassName('experience')

    const elementToHide = document.getElementsByClassName('about');
    const elementToHide2 = document.getElementsByClassName('blog pad-l2');
    Array.from(elementToHide).forEach((el) => {
        el.style.display = 'none';
    })
    Array.from(elementToHide2).forEach((el) => {
        el.style.display = 'none';
    })

    //updating head
    const container = document.getElementById('about-head pad-l2');
    container.innerHTML = `<img id="img-exp" src="assests/exp.gif" alt="gif">
                            <h1 id="exp">Experience</h1>`
    const imgExp = document.getElementById("img-exp");
    imgExp.style.width = '55px';
    imgExp.style.height = '55px';
    // const exp = document.getElementById("exp");
    // exp.style.fontSize = '3rem'

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
    const elementToHide2 = document.getElementsByClassName('blog pad-l2');
    //remove other divs
    Array.from(elementToHide).forEach((el) => {
        el.style.display = 'none';
    })
    Array.from(elementToHide2).forEach((el) => {
        el.style.display = 'none';
    })


    //updating head
    const container = document.getElementById('about-head pad-l2');
    container.innerHTML = `<img id="img-about" src="assests\about-me.gif" alt="gif">
                            <h1>About Me</h1>`
                            const imgAbt = document.getElementById("img-about");
    imgAbt.style.width = '55px';
    imgAbt.style.height = '55px';

    //display div
    Array.from(elementToDisplay).forEach((el) => {
        el.style.display = 'block';
    })
})


//add event listner to blog
const blog = document.getElementById('blog');

blog.addEventListener('click', function () {
    const elementToDisplay = document.getElementsByClassName('blog pad-l2')
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
    Array.from(elementToDisplay).forEach((el) => {
        el.style.display = 'block';
    })
    //updating head
    const container = document.getElementById('about-head pad-l2');
    container.innerHTML = `<h1>Blog</h1>`
})



  