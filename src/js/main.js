import '@scss/style';

// Components
import spoilers from '@js/components/spoilers';

// Modules
import addLoadedClass from '@js/modules/addLoadedClass';
import addTouchClass from '@js/modules/addTouchClass';
import colorScheme from '@js/modules/colorScheme';
import getCurrentYear from '@js/modules/getCurrentYear';
import setEvent from '@js/modules/setEvent';
import webp from '@js/modules/webp';

// Vendors
import initSliders from '@js/vendors/Swiper';
import '@js/vendors/tippy';

// Components
spoilers();

// Modules
addLoadedClass();
addTouchClass();
colorScheme();
getCurrentYear();
setEvent();
webp();

// Vendors
initSliders();
