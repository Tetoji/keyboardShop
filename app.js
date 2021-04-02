
    const carouselSlide = document.querySelector('.slide');
    const carouselImage = document.querySelectorAll('.slide img');

    //Buttons
    const prvButton = document.querySelector('#prvButton');
    const nextButton = document.querySelector('#nextButton');

    //Counter
    let counter = 1;
    const size = carouselImage[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    //Button Listers

    nextButton.addEventListener('click', () => 
    {
        if (counter >= carouselImage.length - 1) return;
        carouselSlide.style.transition = "transform 0.8s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prvButton.addEventListener('click', () => 
    {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.8s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carouselSlide.addEventListener('transitioned', () => 
    {
        if (carouselImage[counter].id === 'lastClone')
        {
            carouselSlide.style.transition = "none";
            counter = carouselImage.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if (carouselImage[counter].id === 'firstClone')
        {
            carouselSlide.style.transition = "none";
            counter = carouselImage.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

//-----------------------------------------------//