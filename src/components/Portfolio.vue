<template>
    <div>
        <div class="corinthian">
            <img src="../assets/desktop.png" alt="desktop-1" class="img">
            <img src="../assets/mobile.png" alt="desktop-1" class="img-2">
            <div class="content"> 
                <h3> Corinthian Distributors </h3>
                <p> Wordpress, SASS, jQuery </p>
                <p> Corinthian Distributors specializes in importing and distributing the most popular Filipino and Asian foods to Canadian grocery stores and customers. </p>
                <button class="btn btn-warning button"><a class="link" href="https://corinthiandistributors.com/"> View Site </a></button>
            </div>
        </div>

        <div class="feintuch-2">
            <img src="../assets/feintuch-desktop.png" alt="desktop-1" class="img">
            <img src="../assets/feintuch-mobile.png" alt="desktop-1" class="img-3">
            <div class="content-2"> 
                <h3> Feintuch Law  </h3>
                <p> Wordpress, SASS, jQuery </p>
                <p> Feintuch Law is a boutique real estate law firm offering sophisticated legal representation, personal attention, and private real estate financing. </p>
                <button class="btn btn-warning button"> <a class="link" href="https://feintuchlaw.com/">View Site </a></button>
            </div>
        </div>
    </div>
</template>

<style>
    .button {
        width: 50%;
    }
    .img {
        height: 50vh;
    }

    .img-2{
        height: 50vh;
        position: absolute;
        bottom: 0;
    }

    .img-3 {
        transform: translate(-300%, 40%);
        height: 50vh;
        position: absolute;

    }
 
    .corinthian {
        display: flex;
        padding: 2rem 2rem 8rem 2rem;
        justify-content: center;
        margin-bottom: 4rem;
        position: relative;
    }

    .content {
        display: flex; 
        flex-direction: column;
        align-content: center;
        justify-content: center;
        padding-left: 5rem;
    }

    .feintuch-2 {
        padding: 2rem 3rem 2rem 2rem;
        padding-top: 5rem;
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 10rem;
    }

    .content-2 {
        padding: 3rem;
        display: flex; 
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

    .link {
        color: white;
    }

    .link:hover {
        color: black;
    }

    @media (max-width: 768px){
        .corinthian,
        .feintuch-2 {
            flex-direction: column;
            margin-bottom: 1rem;
            padding: 1rem 1rem 0 1rem;
        }

        .img-2 {
            display: none;
        }

        .content {
            padding-left: 0;
            padding-top: 1rem;
            text-align: center;
        }

        .content-2 {
            padding: 1rem 0;
            text-align: center;
            margin-bottom: 2rem;
        }

        .button {
            width: 100%;
        }

        .img-3 {
            display: none;
        }
    }

</style>