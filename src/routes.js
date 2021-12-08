
import Home from "./pages/Home";
import ProductSingle from "./pages/ProductSingle";
import Collections from "./pages/Collections";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/collections',
        name: 'collections',
        component: Collections
    },
    {
        path: '/our-story',
        name: 'our-story',
        component: OurStory
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
    {
        path: '/product/:slug',
        name: 'product-detail',
        component: ProductSingle,
        props: true
    }
]