<template>
    <div id="portfolio">
        <div class="corinthian">
            <div class="images">
                <img src="../assets/desktop.png" alt="desktop-1" class="img">
                <img src="../assets/mobile.png" alt="desktop-1" class="img-2">
            </div>
            <div class="content"> 
                <h3> Corinthian Distributors </h3>
                <p> Wordpress, SASS, jQuery </p>
                <p> Corinthian Distributors specializes in importing and distributing the most popular Filipino and Asian foods to Canadian grocery stores and customers. </p>
                <button class="btn btn-warning button"><a class="link" href="https://corinthiandistributors.com/"> View Site </a></button>
            </div>
        </div>

        <div class="feintuch-2">
            <div class="images">
                <img src="../assets/feintuch-desktop.png" alt="desktop-1" class="img">
                <img src="../assets/feintuch-mobile.png" alt="desktop-1" class="img-3">
            </div>
            <div class="content-2"> 
                <h3> Feintuch Law  </h3>
                <p> Wordpress, SASS, jQuery </p>
                <p> Feintuch Law is a boutique real estate law firm offering sophisticated legal representation, personal attention, and private real estate financing. </p>
                <button class="btn btn-warning button"> <a class="link" href="https://feintuchlaw.com/">View Site </a></button>
            </div>
        </div>

        <div class="corinthian">
            <div class="images">
                <img src="../assets/sts-desktop.png" alt="desktop-1" class="img">
                <img src="../assets/sts-mobile.png" alt="desktop-1" class="img-2">
            </div>
            <div class="content"> 
                <h3> Save The Sales </h3>
                <p> Wordpress, SASS, jQuery </p>
                <p> A campaign in Victoria, BC to encourage people to shop local and be entered to win prizes.  The design look and feel were inspired by the 1980s - so retro! </p>
                <button class="btn btn-warning button"><a class="link" href="https://savethesales.ca/"> View Site </a></button>
            </div>
        </div>

        <div class="feintuch-2">
            <div class="images">
                <img src="../assets/maps-desktop.png" alt="desktop-1" class="img">
                <img src="../assets/maps-mobile.png" alt="desktop-1" class="img-3">
            </div>
            <div class="content-2"> 
                <h3> MapsMapsMaps  </h3>
                <p> Vue, Express, JavaScript, Jest </p>
                <p> A Vue app build with Google JavaScript API. Users are able to search and save addresses. Built with Vue and ran unit tests with Jest. </p>
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
        grid-column: 2 / span 4;
        grid-row: 3 / span 1;
        width: 100%;
    }

    .img-2{
        height: 50vh;
        grid-column: 5 / span 3;
        width: 100%;
        grid-row: 3 / span 2;
        align-self: end;
    }

    .img-3 {
        height: 50vh;
        grid-column: 1 / span 2;
        width: 100%;
        grid-row: 3 / span 2;
        align-self: end; 
    }
 
    .corinthian {
        display: flex;
        padding: 0 2rem;
    }

    .images {
        display: grid;
        grid-template-columns: 40px 1fr 1fr 1fr 1fr 40px;
        grid-template-rows: 40px 40px 1fr 40px 40px;
    }

    .content {
        display: flex; 
        flex-direction: column;
        align-content: center;
        justify-content: center;
        padding-left: 2rem;
    }

    .feintuch-2 {
        padding: 0 2rem;
        display: flex;
        flex-direction: row-reverse;
    }

    .content-2 {
        padding: 2rem;
        display: flex; 
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        text-align: right;
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
        }

        .img {
            grid-column: 1 / span 5;
        }

        .img-2,
        .img-3 {
            grid-column: 5 / span 3;
            grid-row: 4 / span 1;

        }
        .content {
            text-align: center;
            padding-left: 0;
        }

        .content-2 {
            text-align: center;
            padding: 0;
            align-items: center;
        }

        .button {
            width: 100%;
        }
    }

</style>