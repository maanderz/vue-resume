<template>
    <div>
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
        position: absolute; 
        left: -10px;  
        bottom: -100px;     
    }
 
    .corinthian {
        display: flex;
        padding: 3rem;
        margin-bottom: 2rem;
    }

    /* .images {
        position: relative;
    } */
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
        padding: 3rem;
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 2rem;
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