Abi Bio (About) 
Our founder Abi brings a wealth of knowledge from the luxury market, having expertly planned and lead high-profile events for clients in the hospitality sector. This unique expertise ensures that every detail, from concept to execution, is flawlessly managed, leaving you free to be present for every moment.
At Willow Tree Events, we believe that every event is a unique story waiting to be told. Whether it's an intimate gathering or a grand celebration, our personalised and authentic approach guarantees a bespoke experience that reflects your vision and exceeds your expectations.
Each event is a chapter in your story, and just like the majestic willow tree, we want your events to stand the test of time, creating vibrant memories that will be everlasting.

Home page copy 

Crafting
unforgettable celebrations

Whether celebrating a big birthday milestone or hosting an intimate dinner, Willow Tree ensures our personalised and authentic approach each and every time. Along with your vision and our expertise, we guarantee a bespoke experience exceeding all expectations, leaving you free to enjoy every moment


Services
Private Celebrations
Brand & Product Launches
Event Styling & Management








.home{
    position: relative;
}

.home_bg{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 675px;
    object-fit: cover;
    object-position: center;
}

.home_shadow{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 725px;
    background: linear-gradient(180deg,
    rgba(0, 0, 0, 0.6) 0%,     /* Darker at the top */
    rgba(0, 0, 0, 0.3) 65%,    /* Gradually lighter */
    hsla(0, 0%, 100%, 0) 80%,  /* Transparent */
    hsl(0, 0%, 100%) 91%);     /* Fades into white */
}


.home_container{
    position: relative;
    padding-top: 10px;
    row-gap: 1rem;
}


.home_data{
    text-align: left;
    margin-left: 1.5rem;
}

.home_subtitle{
    font-size: var(--h3-font-size);
    color: var(--title-color);
    margin-bottom: 1rem;
}

.home_title{
    font-size: var(--biggest-font-size);
    color: var(--title-color);
    margin-bottom: 1rem;
    z-index: 1;
}

.home_description{
    font-size: var(--small-font-size);
    color: var(--title-color);
    margin-bottom: 2rem;
    
}

.home_cards{
    /* margin-top: 6rem; */
    grid-template-columns:  260px;
    justify-content: center;
}

.home_card{
    position: relative;
    overflow: hidden;
}

.home_card-img{
    transition: transform 0.4s;
    width: 100%;
    height: 10rem;
    object-fit: cover;
}
/* 
.home_card-shadow{
    position: absolute;
    width: 100%;
    height: 20%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg,
                hsla(0, 0%, 0%, 0) 50%,
                hsl(0, 0%, 0%)125%);       
} */

.home_card-title{
    font-size: var(--h3-font-size);
    position:absolute;
    left: 1rem;
    bottom: 1rem;
    transition: 0.5s;
    color: white;
    text-shadow: 1rem;
    /* z-index: 1; */
}

.home_card:hover .home_card-img {
    opacity: 0;
    transition: opacity 0.4s;
}

.home_card:hover .home_card-title, 
.home_card:hover .home_description {
    letter-spacing: 1rem;
    color: white;
}
.home_card:hover .home_card-title {
    /** Centering the title **/
    bottom: 50%;                /* Moves title vertically to the center */
    left: 50%;                  /* Moves title horizontally to the center */
    transform: translate(-50%, 50%);  /* Ensures perfect centering */
    letter-spacing: 0.4rem;
    color: white;
    transition: 0.5s;
}

.home_card:hover {
    background-color: var(--background-color);
}
