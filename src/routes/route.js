import { createRouter , createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld';
// import BlogPage from '../components/BlogPage.vue';
import FAQs from '../components/FAQs.vue';
// import BlogPost from '../components/BlogPost.vue';
import AboutUs from '../components/aboutus.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    
  },
  // {
  //   path: '/blogs',
  //   name: 'blogs',
  //   component: BlogPage,
    
  // },
  {
    path: '/faqs',
    name: 'faqs',
    component: FAQs,
    
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs,
  },
  // {
  //   path: '/blogp',
  //   name: 'blogp',
  //   component: BlogPost,
    
  // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  mode: 'hash', // Set the mode to 'hash'
  routes,
});

export default router;
