import '@scss/style';

// Components
import Popup from '@js/components/Popup';
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
import typedText from '@js/vendors/Typed';
import '@js/vendors/Marquee';
import '@js/vendors/tippy';

// Components
new Popup();
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
typedText();
