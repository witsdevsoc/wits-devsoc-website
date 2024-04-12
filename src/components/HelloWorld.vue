<template>
  <body id="bod">


    <section v-if="seemovis" id="seemo">
      <div id="seemoback">
        <div id="seemocanc">
          <i v-on:click="revealseemo(); addMarginBottom(false);" class="fa-solid fa-xmark"></i>
        </div>

        <div id="seemoheader">
          <h1>{{ seemotitle }}</h1>
          <div id="seemosub">
            <h5>{{ seemodescript }} </h5>
          </div>
        </div>

        <div id="containerr">

          <div class="commen">

            <i class="fa fa-check" aria-hidden="true"></i>

            <h5>{{ point1 }}</h5>

          </div>


          <div class="commen">

            <i class="fa fa-check" aria-hidden="true"></i>

            <h5>{{ point2 }}</h5>

          </div>


          <div class="commen">

            <i class="fa fa-check" aria-hidden="true"></i>

            <h5>{{ point3 }}</h5>

          </div>


          <div class="commen">

            <i class="fa fa-check" aria-hidden="true"></i>

            <h5>{{ point4 }}</h5>

          </div>


          <div class="commen">

            <i class="fa fa-check" aria-hidden="true"></i>

            <h5>{{ point5 }}</h5>

          </div>







          <!-- <div>
              <h5>{{ point2 }}</h5>
            </div>
            <div>
              <h5>{{ point3 }}</h5>
            </div>
            <div>
              <h5>{{ point4 }}</h5>
            </div>
            <div>
              <h5>{{ point5 }}</h5> 
            </div>-->
        </div>


      </div>
    </section>
<!-- 
    <section v-if="!isloaded" id="loading">
      <div class="loading-spinner"></div>
    <h3 class="loading-text">Loading...</h3>
    </section> -->


    <section id="home">
      <div class="maxsize">

        <!-- <header id="navicon"><a v-on:click="revealnav"> <ion-icon name="menu-outline"></ion-icon></a></header> -->

        <div id="title">
          <img id="logo" src="../assets/logo.png" alt="">

          <h1 id="titletext">Witwatersrand Developer Society</h1>
          <img id="kudu" src="../assets/Clipped_image_20230708_161252.png" alt="">
        </div>
        <!-- <img id="kudu" src="../assets/Screenshot_20230704_190121_Canva.png" alt=""> -->




      </div>

    </section>
    <div id="two">
      <div class="maxsize">
        <div id="activities">

          <section id="activitiessect" class="sectionnn">

            <div class="head">
              <h1 class="head1">Activities</h1>
            </div>
            <div id="subhead">
              <h1 id="head2">Get involved in the society</h1>
            </div>

            <div id="acts">
              <div class="actcard sectionnn">
                <div class="headimg">
                  <img src="../assets/solution.png" alt="">
                </div>
                <div class="headimgt">
                  <h1>Skill enhancement</h1>
                </div>
                <div class="headimgs">
                  <h4>Join in our hackathons and other interactive sessions to boost your developer skills</h4>
                </div>

              </div>
              <div class="actcard sectionnn">
                <div class="headimg">
                  <img src="../assets/people.png" alt="">
                </div>
                <div class="headimgt">
                  <h1>Networking</h1>
                </div>
                <div class="headimgs">
                  <h4 id="netw">Partake in workshops conducted in association
                    with wits students to
                    get to know interesting people</h4>
                </div>

              </div>

              <div class="actcard sectionnn">
                <div class="headimg">
                  <img src="../assets/clipboard.png" alt="">
                </div>
                <div class="headimgt">
                  <h1>Attend our events</h1>
                </div>
                <div class="headimgs">
                  <h4>Keep an eye out for emails from us as we have a variety of events planned</h4>
                </div>

              </div>

              <div id="thactcard" class="actcard sectionnn">
                <div class="headimg">
                  <img src="../assets/collaboration.png" alt="">
                </div>
                <div class="headimgt">
                  <h1>Collaboration</h1>
                </div>
                <div class="headimgs">
                  <h4>Find a friend or two to help you finish that personal project</h4>
                </div>

              </div>

            </div>
          </section>

          <section id="workshops" class="sectionnn">

            <div class="head">
              <h1 class="head1">Workshops</h1>
            </div>

            <div id="subwork">

              <div>
                <h1>Get hands on experience in numerous areas of computer science with workshops led by club members.
                  Discover new areas of tech with lectures from domain experts.</h1>
              </div>



            </div>


            <div class="workspace">
              <div class="workitem sectionnn">
                <div class="workitemconent">
                  <div class="headimg">
                    <img src="../assets/hackers.png" alt="">
                  </div>
                </div>
                <div class="workitembg">
                  <div class="itemheader">
                    <h1>Ethical Hacking</h1>
                  </div>
                  <div class="itemsub">
                    <h4>
                      Unleash your ethical hacking potential, revolutionize security, and become a cybersecurity hero!
                    </h4>
                  </div>

                  <div class="readmor">

                    <h5 v-on:click="eth(); addMarginBottom(true);">See more</h5>

                  </div>
                </div>

              </div>

              <div class="workitem sectionnn">
                <div class="workitemconent">
                  <div class="headimg">
                    <img src="../assets/cryptocurrency.png" alt="">

                  </div>
                </div>
                <div class="workitembg">
                  <div class="itemheader" id="blockcha">
                    <h1>Blockchain Development</h1>
                  </div>
                  <div class="itemsub">
                    <h4>Stay up to date with all of the latest information about Blockchain. Follow the journey to the
                      moon!
                    </h4>
                  </div>

                  <div class="readmor">

                    <h5 v-on:click="bcdev">See more</h5>

                  </div>
                </div>

              </div>

              <div class="workitem sectionnn">
                <div class="workitemconent">
                  <div class="headimg">
                    <img src="../assets/drone.png" alt="">
                  </div>
                </div>
                <div class="workitembg">
                  <div class="itemheader">
                    <h1>Drone Programming</h1>
                  </div>
                  <div class="itemsub">
                    <h4>
                      Experience the thrill of drone programming, unlocking the potential for autonomous UAV tasks.
                    </h4>
                  </div>

                  <div class="readmor">

                    <h5 v-on:click="drodev">See more</h5>

                  </div>
                </div>

              </div>



              <div class="workitem sectionnn">
                <div class="workitemconent">
                  <div class="headimg">
                    <img src="../assets/machin.png" alt="">
                  </div>
                </div>
                <div class="workitembg">
                  <div class="itemheader">
                    <h1>AI / Machine Learning</h1>
                  </div>
                  <div class="itemsub">
                    <h4>Dive in to the world of AI and Machine Learning by by training your own model on real world data.
                    </h4>
                  </div>

                  <div class="readmor">

                    <!-- <a href="#activitiessect">fas</a> -->

                    <h5 v-on:click="aiml">See more</h5>
                  </div>
                </div>

              </div>

              <div class="workitem sectionnn">
                <div class="workitemconent">
                  <div class="headimg">
                    <img src="../assets/data-science.png" alt="">
                  </div>
                </div>
                <div class="workitembg">
                  <div class="itemheader">
                    <h1>Data Science</h1>
                  </div>
                  <div class="itemsub" id="sub1">
                    <h4>Use scientific methods and systems to extract knowledge and insights from structured and
                      unstructured data
                    </h4>
                  </div>

                  <div class="readmor">

                    <h5 v-on:click="datasci">See more</h5>

                  </div>
                </div>

              </div>

              <div class="workitem sectionnn">
                <div class="workitemconent">
                  <div class="headimg">
                    <img src="../assets/webd.png" alt="">
                  </div>
                </div>
                <div class="workitembg">
                  <div class="itemheader">
                    <h1>Web Development</h1>
                  </div>
                  <div class="itemsub">
                    <h4>Learn the basics of web development by building your own website from scratch, using HTML5 and
                      CSS3.
                    </h4>
                  </div>

                  <div class="readmor">

                    <h5 v-on:click="wedev">See more</h5>

                  </div>
                </div>

              </div>


            </div>

          </section>



          <section id="partners" class="sectionnn">

            <div id="parthead">
              <h1>Our Partners</h1>
            </div>

            <div class="swiper mySwiper" id="swip">
              <div class="swiper-wrapper sectionnn">

                <div class="swiper-slide">
                  <div id="bbdpad" class="partcontainer">


                    <img src="../assets/partners/bbd.jpg" alt="">


                    <a class="models"
                      href="https://bbdsoftware.com/services/software-development/?utm_source=google+search&utm_medium=cpc&utm_campaign=19744285142&utm_content=144879029925&utm_term=bbd%20software&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk_PwM3BDZZTWA82g4cJEgec16t60oLo3yOdpQVTAsBaGK9U3Sf2-CBoCLqAQAvD_BwE">


                      <h1>BBD</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="partcontainer">


                    <img src="../assets/partners/psyb.jpg" alt="">


                    <a class="models" href="https://psybergate.co.za/">


                      <h1>Psybergate</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="awspad" class="partcontainer">


                    <img src="../assets/partners/aws.png" alt="">


                    <a class="models" href="https://aws.amazon.com/">


                      <h1>AWS</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>


                <div class="swiper-slide">
                  <div class="partcontainer">


                    <img src="../assets/partners/ente.png" alt="">


                    <a class="models" href="https://entelect.co.za/">


                      <h1>Entelect</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="partcontainer">


                    <img src="../assets/partners/retrorab.png" alt="">


                    <a class="models" href="https://www.retrorabbit.co.za/">


                      <h1>Retro Rabbit</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="epiuspad" class="partcontainer">


                    <img src="../assets/partners/epiuse.png" alt="">


                    <a class="models" href="https://www.epiuse.com/">


                      <h1>Epiuse</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>



                <div class="swiper-slide">
                  <div id="bsgimg" class="partcontainer">


                    <img src="../assets/partners/bsgg.jpg" alt="">


                    <a class="models" href="https://bsg.co.za/">


                      <h1>BSG</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="darpad" class="partcontainer">


                    <img src="../assets/partners/dariel.jpg" alt="">


                    <a class="models" href="https://www.dariel.co.za/">


                      <h1>Dariel</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="syntpad" class="partcontainer">


                    <img src="../assets/partners/synth.png" alt="">


                    <a class="models" href="https://www.synthesis.co.za/">


                      <h1>Synthesis</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>



                <div class="swiper-slide">
                  <div id="mwrpad" class="partcontainer">


                    <img src="../assets/partners/mwr.jpg" alt="">


                    <a class="models" href="https://www.mwrcybersec.com/">


                      <h1>MWR</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="partcontainer">


                    <img src="../assets/partners/bdo.png" alt="">


                    <a class="models" href="https://www.bdo.co.za/en-za/home">


                      <h1>BDO</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="onexpadd" class="partcontainer">


                    <img src="../assets/partners/onexx.png" alt="">


                    <a class="models" href="https://www.plusonex.com/">


                      <h1>+one<sup>x</sup></h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>



                <div class="swiper-slide">
                  <div id="moharpad" class="partcontainer">


                    <img src="../assets/partners/moharaa.png" alt="">


                    <a class="models" href="https://mohara.co/">


                      <h1>Mohara</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="derpad" class="partcontainer">


                    <img src="../assets/partners/deriv.png" alt="">


                    <a class="models" href="https://derivco.co.za/">


                      <h1>Derivico</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="partcontainer">


                    <img src="../assets/partners/adapt.png" alt="">


                    <a class="models" href="https://www.adaptit.com/">


                      <h1>AdaptIT</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>



                <div class="swiper-slide">
                  <div id="ydrpad" class="partcontainer">


                    <img id="ydrimg" src="../assets/partners/ydar.jpg" alt="">


                    <a class="models" href="https://ydragon.io/">


                      <h1>YDragon</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="yellpad" class="partcontainer">


                    <img id="yellbr" src="../assets/partners/yello.png" alt="">


                    <a class="models" href="https://www.yellow.africa/">


                      <h1>Yellow</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div id="zinpadd" class="partcontainer">


                    <img src="../assets/partners/zindi.png" alt="">


                    <a class="models" href="https://zindi.africa/">


                      <h1>Zindi</h1>


                      <div class="spa">
                        <div class="viewsite">
                          <h4>View site</h4>
                          <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>



              </div>
              <div class="swiper-button-next" ></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>


          </section>


        </div>

      </div>
    </div>
  </body>
</template>

<script>

import Swiper from 'swiper';

import '@fortawesome/fontawesome-free/css/all.css';

// import aboutus from './aboutus.vue';

// import Swiper styles
import 'swiper/css';
// import { title } from 'process';

// import { Navigation, Pagination } from 'swiper/modules';

export default {
  name: 'HelloWorld',
  data() {
    return {
      seemovis: false,
      isloaded: false,
      navvis: false,
      seemotitle: 'jdb',
      seemodescript: 'hd',
      point1: 'point 1',
      point2: 'point 2',
      point3: 'point 3',
      point4: 'point 4',
      point5: 'point 5',
    };
  },
  methods: {
    revealseemo() {
      this.seemovis = !this.seemovis;


      if (!this.seemovis) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }


    },
    addMarginBottom(condition) {
      
      
      if (condition) {
        setTimeout(function() {
          const box = document.getElementById('seemoback');
        box.style.marginBottom = '2rem';
      }, 300);
      } else {
        const box = document.getElementById('seemoback');
        box.style.marginBottom = '0';
      }

      
    },

    eth() {
      this.revealseemo();
      this.seemotitle = 'Ethical hacking';
      this.seemodescript = 'Ethical hacking enhances digital security by identifying and fixing vulnerabilities to protect sensitive information.';
      this.point1 = 'Ethical hacking safeguards organizations and individuals by identifying vulnerabilities and therefore enhance security and protect sensitive data from malicious attacks.';
      this.point2 = 'Ethical hacking is a dynamic filed that is constantly growing and therefore demands continuous learning. Stay updated with the latest hacking techniques, security protocols and defensive measures to tackle evolving technology and new attack vectors.';
      this.point3 = 'Contribute to protecting organisations, governments and individuals from cyber threats by uncovering vulnerabilities and strengthening security measures.';
      this.point4 = 'Hone your problem-solving and critical thinking skills by developing creative solutions to complex problems.';
      this.point5 = 'With the increasing reliance on technology, there is an ever-growing demand for skilled ethical hackers and hence plenty of lucrative career opportunities.';

    },
    bcdev() {
      this.revealseemo();
      this.seemotitle = 'Blockchain Development';
      this.seemodescript = 'Blockchain development involves designing, implementing and maintaining decentralized digital systems that utilize blockchain technology.';
      this.point1 = 'Blockchain technology decentralizes transactions and data storage therefore eliminating intermediaries and ensuring transparency between all parties.';
      this.point2 = 'Blockchain’s cryptographic techniques ensure that it is practically tamper-resistant and immutable, providing a robust security system against hacking and malicious attacks.';
      this.point3 = 'It streamlines processes, reduces cost and eliminates intermediaries by enabling the creation of smart contracts and self-executing agreements.';
      this.point4 = 'It offers end-to-end traceability, meaning it allows for the verification of the origin, authenticity and movement of products thus securing complete transparency and ethical and sustainable practises within the supply chain.';
      this.point5 = 'Blockchain technology has the potential to foster innovation, empower individuals with more controls over their data and assets and the potential to disrupt various industries.';
    },
    drodev() {
      this.revealseemo();
      this.seemotitle = 'Drone programming';
      this.seemodescript = 'Drone programming involves coding and configuring unmanned aerial vehicles (UAV\'s) to perform specific tasks autonomously.';
      this.point1 = 'Aerial exploration has never been this exciting. With drone programming you can unlock limitless possibilities for capturing breathtaking aerial footage, conducting surveys, or delivering goods by creating your own autonomous flying machines.';
      this.point2 = 'Drone programming empowers you to unleash your creativity and bring your ideas to life through the development of custom flight paths, programming intricate manoeuvres and designing unique drown applications.';
      this.point3 = 'Drone programming equips you with indispensable, high demand skills such as gaining proficiency in Python, C++, robotics, computer vision and machine leaning.';
      this.point4 = 'These skills put you at the forefront of cutting-edge technology and positions yourself for exciting career opportunities in industries like aerial photography, agriculture and infrastructure inspection.';
      this.point5 = 'Contribute to the development o advanced flight algorithms, autonomous navigation systems and cutting-edge drone applications.';

    },
    aiml() {
      this.revealseemo();
      this.seemotitle = 'AI/Machine Learning';
      this.seemodescript = 'AI/ machine learning is focused on creating intelligent systems that can learn, adapt and make decisions without explicit programming.';
      this.point1 = 'AI and machine learning have the power to revolutionize every industry across the board, from healthcare and finance to agriculture and entertainment. These technologies are driving innovation and creating new opportunities for growth and efficiency.';
      this.point2 = 'These technologies enable user satisfaction and engagement through enabling personalized experiences like never before. These technologies are able to adapt to individual preferences whether it\'s customized recommendations, tailored advertisements or intelligent virtual assistants.';
      this.point3 = 'Through analyzing vast amounts of data and extracting valuable insights AI and machine learning improve decision making, optimize processes and solve complex problems by uncovering patterns and trends.';
      this.point4 = 'These technologies automate repetitive tasks streamlining workflow thus improving efficiency and productivity leading to cost saving and improved operational effectiveness.';
      this.point5 = 'The rapid growth of AI and machine learning has created an ever-growing demand for skilled professionals in these fields. Skills in these areas open doors to exciting career opportunities such as data science, artificial intelligence research and algorithms development, putting you at the forefront of technological advancement.';

    },
    datasci() {
      this.revealseemo();
      this.seemotitle = 'Data Science';
      this.seemodescript = 'Data science involves extracting insights and knowledge from data using a combination of statistical analysis, machine learning and computational techniques. It empowers individuals to explore, analyze and extract value from data.';
      this.point1 = 'By leveraging advanced techniques and tools, data science allows you to unlock hidden insights within vast amounts of data through the extraction of valuable information, uncovering patterns and making data-driven decisions that ultimately drives to success and efficiency.';
      this.point2 = 'Data science empowers you to tackle complex problems across various domains through the use of creative solutions. From predicting customer behavior and optimizing marketing campaigns to identifying disease patterns and improving health outcomes, data science offers the tools to address the real-world challenges effectively and efficiently.';
      this.point3 = 'Today\'s driven world, data science skills are in high demand. By developing expertise in data analysis, machine learning, and statistical modeling, you position yourself for exciting career opportunities with competitive salaries and job stability.';
      this.point4 = 'Data science is one of the most prominent fields at the forefront of technological innovation. By employing cutting edge algorithms and methodologies, you can push the boundaries of what is possible.';
      this.point5 = 'Data scientists Dr. innovation and shape the future.';

    },
    wedev() {
      this.revealseemo();
      this.seemotitle = 'Web Development';
      this.seemodescript = 'Web development creates and maintains websites and applications, blending technical expertise and creativity to bring digital ideas to life.';
      this.point1 = 'Build digital experiences that engage and captivate audiences across multiple platforms, from personal blogs to ecommerce platforms. Web development empowers you to transform your creative ideas into functional and interactive websites.';
      this.point2 = 'Web development offers valuable skills that are highly sought after in the job market. Mastering front end languages like HTML, CSS and JavaScript along with back-end technologies opens doors to careers in the booming tech industry.';
      this.point3 = 'As a web developer, your work has a tangible impact on the online world and hence overall user experience. Your creations are accessible to millions of users and your ability to craft intuitive interfaces and seamless user experience can leave a lasting impact.';
      this.point4 = 'Web development is a field that is constantly growing with new frameworks, libraries and tools emerging regularly, it\'s important to stay up to date with the latest trends in enabling you to embrace cutting edge technologies and remain at the forefront of the industry.';
      this.point5 = 'Web development is a vast field filled with passionate individuals who are eager to share knowledge and collaborate it is a platform for continuous learning growth and collaboration.';
    },

    getSlidesPerView() {
      if (window.innerWidth <= 788) {
        return 1;
      } else if (window.innerWidth <= 1215) {
        return 2;
      } else {
        return 3;
      }
    },

  },
  mounted() {
    // new Swiper('.swiper', {
    //   slidesPerView: 3,
    //   mousewheel: {
    //     forceToAxis: true,
    //   },
    // });

    document.body.style.overflow = 'hidden';

    // const currentHash = window.location.hash;

    // If the hash is empty, append "#home" to it
    // if (!currentHash) {
    //   window.location.hash = 'home';
    // }

    const sections = document.querySelectorAll('.sectionnn');
    const animateSections = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      });
    };

    // Initial check for visible sections on page load
    animateSections();

    // Throttle the scroll event to improve performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          animateSections();
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
    let mySwiper = new Swiper(".mySwiper", {
      slidesPerView: this.getSlidesPerView(),
      // speed: "500",
      loop: !false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: !true,
      },
      // spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    window.addEventListener('resize', () => {
      mySwiper.destroy();
      mySwiper = new Swiper(".mySwiper", {
        slidesPerView: this.getSlidesPerView(),
        // speed: "500",
        loop: !false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        mousewheel: {
          forceToAxis: !true,
        },
        // spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

    
    document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    // setTimeout(() => {
      this.isloaded = true;
      console.log("be")
      document.body.style.overflow = 'auto';
    // }, 2000); // Delay in milliseconds (2 seconds)
  }
};


  },
  beforeRouteEnter(to, from, next) {
    // This code will be executed before entering a new route
    // Use next to pass a callback that sets isloaded to true
    console.log("moo5p")
    next(vm => {
      const currentHash = window.location.hash;

// If the hash is empty, append "#home" to it
if (!currentHash) {
  console.log("moop")
  vm.isloaded =false;
}else{
  vm.isloaded =!false;
  document.body.style.overflow = 'auto';
}
    });
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* $primary : #171729; 

:root {
  --primary-color: var(#171729);
  --secondary-color: var(#172D4E);
  --text-color: var(#5CAFF9);

}

*/








.sectionnn {
  opacity: 0;
  transform: translateY(5rem);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.sectionnn.animate {
  opacity: 1;
  transform: translateY(0);
}




.commen {
  display: flex;
  /* background: red; */
  color: #172D4E;
  align-items: start;
  width: 100%;
  height: fit-content;
  justify-content: start;
  padding-bottom: 1.5rem;
}

.commen i {
  color: #5CAFF9;
  margin: 0.4rem 2rem;
}



.commen h5 {
  width: 100%;
  margin-right: 2rem;
  text-align: start;
  color: #FFF;
}


.partcontainer:hover+.models {
  visibility: visible;
}

#yellbr {
  border-radius: 0rem;
}

.viewsite {
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
}

sup {
  font-size: 7;
}

.modelimg {
  width: 0.1rem;
  height: 0.1rem;
}

/* .actcard{
  transform: translateY(-0.2rem);
} */






* {
  transition: all 0.4s;
}

.actcard:hover {
  transform: scale(1.02);
  cursor: pointer;
}

.workitem:hover {
  transform: scale(1.02);
}

#fin2:hover,
.readmor h5:hover {
  text-decoration: underline;
  cursor: pointer;
  /* color: #252542; */
  text-underline-offset: 0.125rem;
}






.swiper-button-next,
.swiper-button-prev {
  color: #5CAFF9;
}









/* .swiper-pagination-bullet, .swiper-pagination-bullet-active {
  color: white;
} */


/* .swiper-button-next,
.swiper-slide,
.swiper-button-prev{
  padding-bottom: 15rem;
} */



#swip,
.swiper-wrapper {
  height: 21rem;
  width: 100%;

}

#containerr {
  display: flex;
  /* margin-top: 2rem; */
  height: fit-content;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

#comments {
  display: flex;
  flex-direction: column;
  /* flex: 8; */
  margin-right: 6rem;
  margin-left: 3.3rem;
  justify-content: start;
  align-items: start;

  width: 52rem;
  height: 100%;
}

#comments div {
  height: 3.55556rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
}

#comments div h5 {
  color: #FFF;
  text-align: start;
}

#ticks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  margin-left: 3.3rem;


  width: 1.88889rem;
  height: 100%;
  flex-shrink: 0;
}

#ticks svg {
  height: 3.55556rem;
  margin-bottom: 1rem;
}

.swiper-slide {
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
}





.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#seemosub {
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 1.11111rem;
  font-style: normal;
  margin: 1rem 0rem;
  font-weight: 700;
  line-height: normal;
}

#seemoheader h1,
#seemosub h5,
#ticks svg,
#comments div {
  opacity: 0;
  animation: animateIn 0.5s forwards;
}

@keyframes animateOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}


@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translateY(0.8rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


#seemo h1 {
  color: #5CAFF9;
  width: 100%;
  text-align: center;
}

#seemosub h5 {
  color: #FFF;
}

#seemo {
  z-index: 10;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(23, 23, 41, 0.50);
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  position: fixed;
  animation: blurAnimation 1.4s forwards;
}



#loading {
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #171729;
  position: fixed;
}



.loading-spinner {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #5CAFF9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: white;
  margin-top: 20px;
  opacity: 0;
  animation: fade-in-out 2s ease infinite;
}

@keyframes fade-in-out {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

#navmen {
  z-index: 10;
  width: 100%;
  height: 100vh;
  /* overflow: auto; */
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: rgba(23, 23, 41, 0.50);
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  position: fixed;
  animation: blurAnimation 1.4s forwards;
}





@keyframes blurAnimation {
  from {
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
  }

  to {
    backdrop-filter: blur(0.2rem);
    -webkit-backdrop-filter: blur(0.2rem);
  }
}


#seemoheader {
  margin-left: 5rem;
  height: fit-content;
  margin-right: 5rem;
  margin-bottom: 0.8rem;
}

#seemoback {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: auto;
  /* margin-top: 4rem; */
  height: fit-content;
  padding-bottom: 2.5rem;
  border-radius: 1.66667rem;
  background: #171729;

}





#seemocanc {
  display: flex;
  height: fit-content;
  padding-right: 3rem;
  padding-top: 2.3rem;
  justify-content: end;
}



#seemocanc i,
#nmcanc i {
  transform: scale(1.4);
  color: white;
  cursor: pointer;
}

#seemocanc i:hover,
#nmcanc i:hover {
  transform: scale(1.7);
}

.readmor {
  width: 35%;
}

#partners {
  padding-top: 8.28rem;
  padding-bottom: 8.28rem;

}

.readmor a {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #5CAFF9;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: space-between;
}



h5 {
  color: #5CAFF9;
  font-size: 1rem;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

#parthead {
  display: flex;
  width: 100%;
  height: 4.66667rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  /* padding-bottom: 5.5rem; */
}

.partcontainer {
  width: 19.11111rem;
  height: 12rem;
  border-radius: 1.11111rem;
  background: white;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
}




.models {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #FFF;
  text-decoration: none;
  bottom: -100%;
  display: flex;
  /* visibility: hidden; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.11111rem;
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  background: linear-gradient(180deg, #17172900, #17172952, #5CAFF9);
  transition: bottom 0.4s;
}


.partcontainer:hover .models {
  bottom: 0;
}

.partcontainer div span {
  display: flex;
  flex-direction: row;
  /* height: fit-content; */
}



.partcontainer div h4 {
  margin-right: 0.4rem;
  font-weight: 600;
  font-size: 0.8rem;
}

#bsgimg {
  padding: 0.8rem 2.5rem;
}

#epiuspad {
  padding: 3rem;
}

#awspad {
  padding: 3.9rem 4.8rem;
}

#moharpad {
  padding: 3rem 6rem;
}

#zinpadd {
  padding: 0rem;
}

#darpad {
  padding: 0rem 2rem;
}

#zinpadd {
  padding: 1.5rem 0rem;
}

#bbdpad {
  padding: 2.5rem;
}

#onexpadd {
  padding: 3rem 6.5rem;
}

#mwrpad {
  padding: 3.5rem;
}

#yellpad {
  padding: 4rem 4.6rem;
}

#syntpad {
  padding: 2.9rem 2rem;
}



#ydrpad {
  padding: 1.5rem 3.8rem;
}

#ydrimg {
  transform: scale(0.65);
}

.partcontainer img {
  width: 13.66667rem;
  height: 7.05556rem;
  flex-shrink: 0;
  /* mix-blend-mode: color-burn; */
  /* filter: invert(1); */
  object-fit: fill;
  border-radius: 1.11111rem;
  width: 100%;
  height: 100%;
}


#parthead h1 {
  color: #5CAFF9;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}



.workbottom {
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5rem;
}

/* #netw {
  margin-top: 0.8rem;
} */

.itemsub {
  display: flex;
  width: 17.18833rem;
  height: 5rem;
  margin-top: 2.28rem;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

#sub1 {
  width: 18rem;
}


.itemsub h4 {
  color: #FFF;
  text-align: center;
  font-size: 0.88889rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.itemheader {
  display: flex;
  margin-top: 1rem;
  width: 15.41022rem;
  height: 1.83333rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

#blockcha {
  display: flex;
  margin-top: 1rem;
  width: 17.41022rem;
  height: 1.83333rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

#blockcha h1 {
  font-size: 1.27rem;
}


.itemheader h1 {
  color: #FFF;
  text-align: center;
  font-size: 1.33333rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.workitem {
  height: 20.111115rem;
  width: 20.38889rem;
}

.workitemconent {
  z-index: 2;
  /* background: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 7.705rem; */
  position: absolute;
}

.workitembg {
  margin-top: 10%;
  border-radius: 1.11111rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #172D4E;
  width: 100%;
  height: 90%;
}



.workspace {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.78rem;
  justify-items: center;
  align-items: center;
}

#subwork div {
  display: flex;
  width: 90%;
  margin-top: 1rem;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4.78rem;
  flex-shrink: 0;
}

#subwork {
  display: flex;
  justify-content: center;
  align-items: center;
}

#subwork h1 {
  color: #FFF;
  text-align: center;
  font-size: 1.33333rem;
  font-weight: 700;
}

.headimgt {
  display: flex;
  height: 1.83333rem;
  flex-direction: column;
  justify-content: center;
}

.headimgt h1 {
  color: #FFF;
  font-size: 1.33333rem;
  margin-bottom: 1.28rem;
  margin-top: 1.11rem;
  /* font-family: sans-serif; */
  font-weight: 600;
}

.headimgs {
  display: flex;
  height: 2.83333rem;
  flex-direction: column;
  justify-content: center;
}

.headimgs h4 {
  color: #FFF;
  font-size: 0.888rem;
  /* font-family:sans-serif; */
  text-align: start;
  font-weight: 600;
}

.headimg {
  width: 4.66667rem;
  height: 4.66667rem;
  flex-shrink: 0;
  border-radius: 1.11111rem;
  background: #5CAFF9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headimg img {
  width: 2.5rem;
  height: 2.67856rem;
  flex-shrink: 0;
}

.actcard {
  width: 19.11111rem;
  height: 18.5rem;
  flex-shrink: 0;
  padding: 2.28rem 2.11rem 3.4rem 1.33rem;
  border-radius: 1.11111rem;
  background: #172D4E;
  display: flex;
  margin-top: 2.78rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}



#acts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.78rem;
  margin-top: 2.78rem;
  justify-items: center;
  align-items: center;
}

#thactcard {
  display: none;
}


#head2 {
  color: #FFF;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#subhead {
  display: flex;
  height: 1.55556rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

.head1 {
  color: #5CAFF9;
  text-align: center;
  font-size: 1.33333rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.head {
  display: flex;
  height: 4.66667rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



#titletext {
  color: #FFF;
  text-align: center;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#title {
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-shrink: 0;
}

/* #kudu {
  width: 40.11111rem;
  height: 18.77778rem;
  margin-bottom: 6.9rem;
  flex-shrink: 0;
} */

/* #kudu {
  width: 35%;
  height: 80%;
  margin-bottom: 10rem;
  flex-shrink: 0;
} */

#kudu {
  width: 37rem;
  height: 13rem;
  margin-bottom: 12rem;
  flex-shrink: 0;
}

#logo {
  width: 8.27778rem;
  height: 7.77778rem;
  margin-top: 4.6rem;
  margin-bottom: 5.72rem;
}


.maxsize {
  background-image: url(../assets/Adobe_Express_20230707_2130320_1.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}


#home {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

}



@media (max-width: 1215px) {

  .workspace,
  #acts {
    grid-template-columns: repeat(2, 1fr);
  }


  #seemoheader h1 {
    font-size: 1.5rem;
  }

  /* .partcontainer h1 {
  font-size: 2.1rem;
} */





  #seemosub h5 {
    font-size: 0.9rem;
  }

  .commen h5 {
    font-size: 0.7rem;
  }


  #navicon {
    width: 100%;
    padding-right: 3rem;
    padding-top: 3rem;
  }


  #navicon a {
    height: 2rem;
    width: 2rem;
  }

  #thactcard {
    display: flex;
  }






  #logo {
    width: 7.5rem;
    height: 6rem;
  }

  #titletext {
    font-size: 1.85rem;

  }

  #kudu {
    width: 30rem;
    height: 10rem;
  }

}

@media (max-height: 830px) {
  #seemoback {
    height: 80%;
  }
}


@media (max-width: 788px) {

  .workspace,
  #acts {
    grid-template-columns: repeat(1, 1fr);
  }

  /* #seemoback{
  margin-top: 4rem;
  } */

  #seemoheader h1 {
    font-size: 1.2rem;
  }


  #seemosub h5 {
    font-size: 0.7rem;
  }

  .commen h5 {
    font-size: 0.7rem;
  }

  #thactcard {
    display: none;
  }

  .actcard {
    width: 23.11111rem;
  }


  /* .social {
  margin-bottom: 1rem;
  } */






  #subwork div {
    /* display: flex; */
    width: 23rem;
  }

  #subwork h1 {
    font-size: 1.1rem;
  }

  #head2 {
    font-size: 1.4rem;
  }

  .workitem {
    width: 23rem;
  }

  #logo {
    width: 6rem;
    height: 5rem;
  }

  #titletext {
    font-size: 1.4rem;

  }

  #kudu {
    width: 23rem;
    height: 7rem;
  }

}

@media (max-width: 650px) {

}

@media (max-width: 478px) {

  
  .partcontainer {
  width: 12.11111rem;
  height: 9.5rem;
}

#seemoheader {
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 0.8rem;
}



#subwork div{
  width: 80%;
}

.workitembg{
  padding: 0rem 1.5rem;
}


#kudu {
    width: 16rem;
    height: 5rem;
  }

  

#titletext {
    font-size: 0.85rem;
}

.actcard {
  width:80%;
  margin-right: 3rem;
  margin-left: 3rem;
}

.itemheader,.itemsub{
  width: 100%;
}

.workitem{
  width: 80%;
}


.partcontainer img {
  border-radius: 0.5rem;
}
.partcontainer h1 {
  font-size: 1.4rem;
}

#onexpadd {
  padding: 3rem 4.3rem;
}

#awspad {
  padding: 3.3rem 3.4rem;
}

#moharpad {
  padding: 3rem 4.3rem;
}

#ydrpad {
  padding: 1.7rem 3.3rem;
}

#yellpad {
  padding: 3.4rem 3rem;
}

  #seemoback {
    margin-top: 2rem;
  }

  #seemoheader h1 {
    font-size: 0.9rem;
  }



  #seemosub h5 {
    font-size: 0.5rem;
  }

  #seemocanc i {
    transform: scale(0.8);
  }

  #seemoback{
    margin-top: 0rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
}

#seemoheader {
    margin: 1rem 3rem;

}

  .commen h5 {
    font-size: 0.5rem;
  }

  #seemocanc{
    padding-right: 1.5rem;
    padding-top: 1.5rem;

  }


}

#activities {
  padding-top: 4rem;
  border-top-left-radius: 1.11111rem;
  border-top-right-radius: 1.11111rem;
  background: #252542;
}

#two {
  width: 100%;
  height: fit-content;
  background: #171729;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
