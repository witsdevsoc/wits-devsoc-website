<template>
    <div v-if="cardvis" class="blog-card">
        <div class="blog-card-banner">
            <img :src="bannerImg" :alt="title" class="blog-banner-img">
        </div>
        <div class="blog-content-wrapper">
            <!-- <div class="horop">

                <button class="blog-topic text-tiny">{{ topic }}</button>

                <button @click="deletecard()" v-if="deletevis" style="margin-left:1rem; background-color:red" class="blog-topic text-tiny">delete</button>
            </div> -->
            <h3><a :href="link" id="tit"  class="h3" target="_blank">{{ title }}</a></h3>
            <p  class="blog-text">{{ content }}</p>


            <div class="wrapper-flex">
                <!-- <div class="profile-wrapper">
                    <img ref="auth" :src="resolve_img_url(authorImg)" :alt="author" width="50">
                </div> -->
                <div class="wrapper">
                    <!-- <a :href="authorLink" class="h4">{{ author }}</a> -->
                    <!-- <p class="text-sm">
                        <time :datetime="date">{{ formattedDate }}</time>
                        <span class="separator"></span>
                        <ion-icon name="time-outline"></ion-icon>
                        <time :datetime="duration">{{ formattedDuration }}</time>
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
// import axios from 'axios';

export default {

    
    name: 'BlogCard',
    props: {
        bannerImg: String,
        // topic: String,
        title: String,
        id: String,
        // deletevis: Boolean,
        content: String,
        // authorImg: String,
        // author: String,
        link: String,
        date: String,
        vis: Boolean,
        duration: String,
        
    },
    data() {
        return {
            fullviewvis: false,
            cardvis: this.vis,
        };
    },

    methods: {
        printAll(){
            console.log(this.bannerImg,this.title,this.id,this.content)
        },
        // resolve_img_url: function (path) {
        //     let images = require.context('../assets/members', false, /\.png$|\.jpg$/)
        //     return images("./" + path)
        // },
        // togglefullview() {
        //     this.fullviewvis = !this.fullviewvis;
        // },
//         deletecard(){
//             axios.delete('/api/v1/auth/'+this.id)
//   .then((response) => {
//     // alert(response)
//     if (response.data === true) {
//         this.cardvis =false;
//       alert('Card deleted successfully!');
//     } else {
//       alert('Card deletion failed.');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//     // Handle the error
//   });
//         },
    },
    mounted() {
        // this.$refs.auth.src = require(this.$globalVariable);
    },
    computed: {
        // formattedDate() {
        //     // Implement your own formatting logic for the date here
        //     // Example: return this.date.toLocaleDateString('en-US');
        //     return this.date;
        // },
        // formattedDuration() {
        //     // Implement your own formatting logic for the duration here
        //     // Example: return `${this.duration} min read`;
        //     return this.duration;
        // },
    },
};
</script>
  

<style scoped>
/*-----------------------------------*\ 
    #style.css
  \*-----------------------------------*/



.mobile-nav .wrapper {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--action-primary);
}

.horop{
    display: flex;
    flex-direction: row;

}

.light-theme {

    /**
   * light theme colors 
   */

    --background-primary: #172D4E;
    --background-secondary: #171729;

    --action-primary: #5CAFF9;
    --action-secondary: #5CAFF9;

    --foreground-primary: hsl(210, 38%, 95%);
    --foreground-secondary: #f6f7fb;
    --foreground-tertiary: hsl(214, 20%, 69%);

    --accent: #f6f7fb;

}



:root {

    /**
   * color
   */

    --white: hsl(0, 0%, 100%);

    /**
   * typography 
   */

    --fs-base: 0.85rem;
    --fs-1: 1.875rem;
    --fs-2: 1.5rem;
    --fs-3: 1.25rem;
    --fs-4: 0.875rem;
    --fs-5: 0.75rem;

    /**
   * spacing 
   */

    --py: 5rem;

}



#tit {
    color: #f6f7fb;
    font-size: 1.4rem;
}

#tit:hover{
    cursor: pointer;
}

/*-----------------------------------*\ 
  #RESET
  \*-----------------------------------*/

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

img,
button {
    display: block;
}

a,
span {
    display: inline-block;
}

button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
}

html {
    /* font-family: "Inter", sans-serif; */
    font-size: var(--fs-base);
    /* base font-size (0.85rem = 13.6px) */
    line-height: 1.8;
}

:focus {
    outline-offset: 4px;
}



.blog-text,
.blog-texter {
    
    /* margin-bottom: 1rem; */
    
    color: #f6f7fb;
    margin-top: 2rem;
  justify-content: space-between; 
  gap: 6rem; 
  padding: 0 0.9rem;
  overflow-y: hidden;

    
}

/*-----------------------------------*\ 
  #BASE STYLE
  \*-----------------------------------*/

.h1,
.h2,
.h3,
.h4 {
    display: block;
    color: white;
}


.h3 {
    margin-left:1rem;
    font-size: var(--fs-3);
    font-weight: 700;
}

.h4 {
    font-size: var(--fs-4);
    font-weight: 700;
}

.text-sm {
    font-size: var(--fs-4);
}

.text-tiny {
    font-size: var(--fs-5);
}







.mobile-nav .wrapper {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--action-primary);
}






.blog-card {
    background: var(--background-primary);
    padding: 10px;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 0.2rem;
    box-shadow: 0 10px 10px hsla(0, 0%, 0%, 0.05);
    transition: 0.25s ease;
    box-sizing: border-box;
    word-wrap: break-word;
    flex-wrap: wrap;
    
}
.blog-card:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 10px 10px hsla(0, 0%, 0%, 0.1);
}

.blog-card-banner {
    display: none;
    height: 20rem;
    width: 20rem;
    justify-content: center;
    align-items: center;

}

.blog-banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-content-wrapper {
    padding: 10px 0px;
    padding-right: 1.4rem;
    width: 100%; /* or a specific pixel value */
    max-width: 600px; /* as an example */
    overflow: hidden; /* Hide overflow content */
}

.blog-topic {
    background: var(--action-secondary);
    color: var(--foreground-secondary);
    font-weight: 600;
    padding: 0.25rem 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.blog-card .h3 {
    line-height: 1.4;
    margin-bottom: 1rem;
}

.blog-card .h3:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
}

.blog-text,
.profile-wrapper {
    display: none;
}

.blog .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.blog .h4 {
    color: var(--foreground-secondary);
}

.blog .h4:hover {
    color: #5CAFF9;
}

.blog .text-sm {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--foreground-tertiary);
}

.blog .separator {
    background: var(--foreground-tertiary);
    margin-inline: 3px;
    margin: 0 3px;
    /* fallback for margin-inline */
    width: 3px;
    height: 3px;
    border-radius: 3px;
}



@media (min-width: 770px) {

:root {

    /**
 * typography 
 */

    --fs-base: 0.90rem;

}


/**
* BLOG 
*/

.blog-card {
    display: grid;
    grid-template-columns: 3fr 4fr;
    /* gap: 20px; */
    word-wrap: break-word;
    flex-wrap: wrap;
}

.blog-card-banner {
    display: block;
    overflow: hidden;
    border-radius: 5px;
}



}





/**
* responsive for larger than 650px screen
*/

@media (min-width: 770px) {

:root {

    /**
 * typography 
 */

    --fs-1: 2.25rem;

}



/**
* REUSED STYLE 
*/


.blog-text,
.profile-wrapper {
    display: block;
}

.blog-text {
    color: var(--foreground-secondary);
    font-size: var(--fs-4);
    display: -webkit-box;
    line-clamp: 7;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    flex-wrap: wrap;
    
}

.blog .wrapper-flex {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.profile-wrapper {
    width: 56px;
    height: 56px;
    background: var(--action-primary);
    padding: 3px;
    border-radius: 50%;
}

.profile-wrapper img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.blog .wrapper {
    flex-direction: column;
    align-items: start;
    gap: 0;
}

.blog-card {
    width: 45rem;
}

}





/**
* responsive for larger than 768px screen
*/






/**
* responsive for larger than 1024px screen
*/

@media (min-width: 1024px) {

:root {

    /**
 * typography 
 */

    --fs-base: 1rem;
    --fs-1: 3rem;

}



.aside .wrapper {
    background: var(--background-primary);
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.05);
}

.tags .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
}







}



/* @media (max-width: 776px){

.blog-card-banner {
  height: 15rem;
  width: 15rem;

}

.blog-text {
      line-clamp: 2;
      -webkit-line-clamp: 2;
  }
  

  #tit{
    font-size: 1rem;
  }
} */

</style>
  
  