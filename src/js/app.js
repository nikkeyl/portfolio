import '@scss/style';

// Components
import Popup from '@js/components/Popup';
import spoilers from '@js/components/spoilers';

// Modules
import addLoadedClass from '@js/modules/addLoadedClass';
import addTouchClass from '@js/modules/addTouchClass';
import colorScheme from '@js/modules/colorScheme';
import currentYear from '@js/modules/currentYear';
import webp from '@js/modules/webp';
import startUntilEvent from '@js/modules/startUntilEvent';

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
currentYear();
startUntilEvent();
webp();

// Vendors
initSliders();
typedText();

// Scroll
// import { ScrollWatcher } from '@js/modules/scroll/watcher'
// import { customCursor } from './modules/customCursor'
// import '@js/vendors/SimpleBar'
