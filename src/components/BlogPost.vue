<template>
    <body>

        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div id="post-form">
                        <div>
                            <h3>Make A Blog</h3>
                            <p>Please note this is a basic page that i did not put much effort into styling it as it is just
                                meant to serve as as visual aid for blog posting</p>
                            <p></p>
                            <p>Here as some things to note</p>
                            <p>1. Fill in the required fields, the rest will get taken care of on the blogs page so dont
                                worry if the date, pfp & time since published does not change</p>
                            <p>2. Use a 1 by 1 image when uploading or else it <b>might</b> turn out funny</p>
                            <p><b>PLEASE</b> use a large screened device!!</p>
                            <p>The textFields autmatically get your text once done, so just exit the textfield to save the
                                text</p>
                        </div>
                        <div id="ccf" v-for="card in blogCards" :key="card.id">
                            <blog-card :banner-img="this.blob" :vis="true" :topic="this.topic" :title="this.title"
                                :content="this.post" :author-img="card.authorImg" :author="this.author"
                                :link="card.link" :date="card.date" :duration="card.duration"></blog-card>
                        </div>

                        <p>Select a topic</p>

                        <form  class="horizont">
                            <div @click="changetopic('workshops')">
                                <input type="radio" id="workshops" checked>
                                <label >Workshops</label>

                            </div>

                            <div @click="changetopic('events')">
                                <input type="radio" id="events" >
                                <label >Events</label>
                            </div>


                            <div @click="changetopic('techTalks')">
                                <input type="radio" id="techTalks">
                                <label >Tech Talks</label>

                            </div>
                        </form>

                        <hr>

                        <textarea @change="changetitle" type="text" id="titty" class="form-control"
                            placeholder="Title of the blog"></textarea>
                        <hr>
                        <textarea @change="changedesc" id="post" class="form-control"
                            placeholder="What's on your mind..."></textarea>
                        <hr>
                        <div class="horizont">
                            <!-- <input  type="text" id="toppy" style="width: 100%;" placeholder="Topic of the blog"> -->
                            <textarea class="form-control" type="text" id="authorrr" @change="authvalidate"
                                style="width: 100%;" placeholder="Author of the blog"></textarea>
                            <div class="horizont">

                                <img id="authcheck" class="checks" :src="authcheck" alt="">
                            </div>
                        </div>

                        <!-- <input  type="text" id="taggy" style="width: 100%;" placeholder="Tag of the blog"> -->

                        <hr>
                        <p>Pick a tag</p>

                        <div class="horizont">
                            <!-- <input  type="text" id="toppy" style="width: 100%;" placeholder="Topic of the blog"> -->
                            <div class="tagsser">
                                <div class="hashtag" v-for="button in buttons" :key="button" @click="handletag(button)">{{
                                    button }}</div>
                                <p style="margin-left: 1rem">Or make a new one</p>
                                <input id="extratag" placeholder="#" @change="texttag"
                                    style="margin-left: 1rem; border-radius: 1rem; padding-left :1rem" type="text">

                            </div>

                            <div class="horizont">

                                <img id="tagcheck" class="checks" :src="tagcheck" alt="">
                            </div>
                        </div>

                        <hr>
                        <hr>

                        <div class="horizont">
                            <button type="button" class="btn btn-success" @click="openwidg">Upload an image</button>
                            <div class="horizont">

                                <img id="piccheck" class="checks" :src="piccheck" alt="">
                            </div>
                        </div>
                        <hr>

                        <div class="text-center">

                            <button type="button" class="btn btn-success" @click="sendData()">Submit</button>
                        </div>

                    </div>

                </div>

            </div>
            <div class="row mt-4" id="posts">

            </div>

        </div>













    </body>
</template>
  
<script>

import 'jquery'
import axios from 'axios';
// import { onMounted } from 'vue'
import 'popper.js'
import 'bootstrap'
import BlogCard from './BlogCard.vue';
// import { blob } from 'stream/consumers';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase'

// import firebase from 'firebase/app';

export default {
    components: { BlogCard },
    name: 'BlogPost',
    //     setup() {
    //     onMounted(async () => {
    //         const querySnapshot = await getDocs(collection(db, "blogcard"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    // firebase.storage().ref('images/' );
    //     })

    //     return {}
    //   },
    data() {
        return {
            title: 'Building microservices with Dropwizard, MongoDB & Docker',
            message: 'Hello, World!',
            post: 'This NoSQL database oriented to documents (like JSON) combines some of the features from relational databases bskjfbj hsdvh hi khavdugv dknvauvd jbajvutcd khagdyc bjdfayc bkhgays jGUY DXAVYUHbhbidbc kjagsiydv nkag8sdvh vihg dgrdgtdfdetszdestdgtdsz dgfdxcvgsfgddsx dfdxgv hyvchxvsihva higydvishzb vdhiksvd aszvdhvi',
            mySet: new Set(),
            isFunctionReady: true,
            desc: "heheheh",
            topic: "Workshops",
            date: "69th today",
            tag: "#moop",
            authcheck: "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png",
            tagcheck: "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png",
            piccheck: "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png",
            author: 'Julia Walker',
            blob: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1",
            // temppic: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1",
            buttons: [],
            authors: [
                "Mahdiyyah Jhetam",
                "Patience Mbanga",
                'Nyeleti Kanyana',
            ],
            blogCards: [
                {
                    id: 4,
                    bannerImg: 'logo.png',
                    topic: 'Database',
                    title: 'Building microservices with Dropwizard, MongoDB & Docker',
                    content: 'This NoSQL database oriented to documents (like JSON) combines some of the features from relational databases bskjfbj hsdvh hi khavdugv dknvauvd jbajvutcd khagdyc bjdfayc bkhgays jGUY DXAVYUHbhbidbc kjagsiydv nkag8sdvh vihg dgrdgtdfdetszdestdgtdsz dgfdxcvgsfgddsx dfdxgv hyvchxvsihva higydvishzb vdhiksvd aszvdhvi',
                    authorImg: 'author.png',
                    author: 'Julia Walker',
                    tag: '#ethical_hacking',
                    topper: 'sac',
                    authorLink: '#',
                    date: 'Jan 17, 2022',
                    duration: '3',
                },
            ],
        };
    },
    created() {
        // this.confi();
        // this.getdata();
        // console.log()
    },

    methods: {
        handletag(str) {
            this.tag = str;
            this.tagcheck = "https://static.vecteezy.com/system/resources/previews/008/506/390/original/bright-green-tick-checkmark-icon-free-png.png"
            // alert(this.tag)
        },
        texttag() {
            var i = this.mySet.size
            var str = document.getElementById('extratag').value;
            str = str.replace('#', '');
            this.mySet.add("#" + str)
            if (this.mySet.size > i) {
                this.buttons = Array.from(this.mySet);
                this.handletag("#" + str);
                document.getElementById('extratag').value = "";
            } else {
                alert("Invalid Tag")
            }
        },
        changetitle() {

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            this.title = capitalizeFirstLetter(document.getElementById('titty').value);
            // console.log(this.title)

        },
        changedesc() {

            this.post = document.getElementById('post').value;
            // console.log(this.title)

        }, changetopic(str) {
            // this.topic = str;

            // Get references to the radio button elements
const workshopsRadioButton = document.getElementById('workshops');
const eventsRadioButton = document.getElementById('events');
const techTalksRadioButton = document.getElementById('techTalks');

// Set the checked property to false for all radio buttons
workshopsRadioButton.checked = false;
eventsRadioButton.checked = false;
techTalksRadioButton.checked = false;

const rd = document.getElementById(str);
rd.checked = true;

this.topic = str.charAt(0).toUpperCase() + str.slice(1);
// alert(this.topic);

        },
        authvalidate() {
            var temp = document.getElementById('authorrr').value;

            for (let index = 0; index < this.authors.length; index++) {
                if (temp == this.authors[index]) {
                    this.author = document.getElementById('authorrr').value;
                    this.authcheck = "https://static.vecteezy.com/system/resources/previews/008/506/390/original/bright-green-tick-checkmark-icon-free-png.png"

                }

            }


            if (this.authcheck == "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png") {
                alert("You are not a verified author")
            }
        },
        openwidg() {
            // alert('try')
            // this.piccheck = "https://static.vecteezy.com/system/resources/previews/008/506/390/original/bright-green-tick-checkmark-icon-free-png.png"
            // this.blob = "https://res.cloudinary.com/djid7mzda/image/upload/v1692108235/upload-demo/dvkj1ddi6u8gzhrktgdp.jpg";

            const widget = window.cloudinary.createUploadWidget(
                { cloud_name: 'djid7mzda', upload_preset: 'upload-demo' },
                (error, result) => {
                    // console.log(error)

                    if (!error && result && result.event === 'success') {
                        console.log('done : ')
                        this.piccheck = "https://static.vecteezy.com/system/resources/previews/008/506/390/original/bright-green-tick-checkmark-icon-free-png.png"
                        this.blob = result.info.url;
                        console.log(this.blob)
                    } else {
                        console.log(error)
                    }
                }
            )

            if (window.location.hash.slice(1) == "huziibee") {
                if (this.isFunctionReady) {
                    // Perform your function's logic here

                    // Set a delay before the function can be called again
                    this.isFunctionReady = false;
                    setTimeout(function () {
                        widget.open();
                        this.isFunctionReady = true;
                    }.bind(this), 3000);
                }

            } else {
                alert("You do not have access for this page\nGo Away Peasant :)")
            }


        },
        getTags() {

            axios.get('/api/v1/auth')
                .then(response => {
                    // Handle the response data
                    // console.log(response.data.status);

                    for (let index = 0; index < response.data.status.length; index++) {
                        this.mySet.add(response.data.status[index].tag);
                    }

                    this.buttons = Array.from(this.mySet);





                })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                });


        },
        validFields() {
            // alert("sta");
            if (this.title === 'Building microservices with Dropwizard, MongoDB & Docker') {
                alert("Please provide a title for this post");
                return false;
            }
            if (this.post === 'This NoSQL database oriented to documents (like JSON) combines some of the features from relational databases bskjfbj hsdvh hi khavdugv dknvauvd jbajvutcd khagdyc bjdfayc bkhgays jGUY DXAVYUHbhbidbc kjagsiydv nkag8sdvh vihg dgrdgtdfdetszdestdgtdsz dgfdxcvgsfgddsx dfdxgv hyvchxvsihva higydvishzb vdhiksvd aszvdhvi') {
                alert("Please provide a description for this post");
                return false;
            }
            if (this.post.length < 50) {
                alert("Please provide a longer description for this post");
                return false;
            }
            if (this.authcheck === "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png") {
                alert("Please provide the author for this post");
                return false;
            }

            if (this.piccheck === "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png") {
                alert("Please provide a Picture for this post");
                return false;
            }

            if (this.tagcheck === "https://www.pngfind.com/pngs/m/0-1420_red-cross-mark-clipart-green-checkmark-red-x.png") {
                alert("Please provide a tag for this post");
                return false;
            }


            return true;
        },
        async sendData() {

            // const formData = new FormData();
            // formData.append('post', this.post);
            // formData.append('image', fileInput.files[0]);
            // console.log(formData)

            if (window.location.hash.slice(1) == "huziibee") {


                // this.topic = document.getElementById('toppy').value;
                // this.title = document.getElementById('titty').value;
                // this.post = document.getElementById('post').value;
                // this.author = document.getElementById('authorrr').value;
                // this.tag = document.getElementById('taggy').value;
                if (this.validFields()) {
                    const currentDate = new Date();
                    currentDate.setHours(currentDate.getHours() + 2);

                    this.date = currentDate.toISOString().slice(0, 19);




                    try {
                        const res = await axios.post(
                            '/api/v1/auth/Post', {
                            topic: this.topic,
                            post: this.title,
                            desc: this.post,
                            author: this.author,
                            date: this.date,
                            tag: this.tag,
                            imgg: this.blob,
                        },

                        );
                        console.log(res);
                        alert("Blog was posted successfully")
                    } catch (e) {
                        console.log(e)
                        alert("Blog was not posted successfully")
                    }
                }


            } else {
                alert("You do not have access for this page\nGo Away Peasant :)")
            }




        },


        // delete_post(key) {
        //     firebase.database().ref('blogs/' + key).remove();
        //     this.getdata();

        // },




    },


    mounted() {
        this.getTags();

    },


};
</script>
  
<style scoped>
.my-component {
    text-align: center;
    padding: 20px;
    background-color: #f2f2f2;
}


.horizont div input {
    margin-right: 0.5rem;
}
.hashtag {
    background: #5CAFF9;
    color: white;
    margin: 1rem;
    padding: 5px 10px;
    font-size: var(--fs-5);
    font-weight: 500;
    border-radius: 5px;
}

.hashtag:hover {
    transform: scale(1.03);
    cursor: pointer;
}

#ccf {
    background-color: #172D4E;
    border-radius: 2rem;
}

.checks {
    height: 2rem;
    margin-left: 2rem;
    width: 2rem;
    border-radius: 1rem;
}

.horizont {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.tagsser {
    width: 35rem;
}

.container {
    max-width: 100%;
    background: #171729;
    overflow: hidden;
    word-break: break-word;
}

.card {
    background: #171729;
    color: #fff;
    
}


body {
    height: 100vh;
    background: #171729;
    height: fit-content;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
  