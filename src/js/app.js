import '@scss/style'

// Components
import { Popup } from '@js/components/Popup'
import { spoilers } from '@js/components/spoilers'

// Scroll
// import { ScrollWatcher } from '@js/modules/scroll/watcher'

// Modules
// import { customCursor } from './modules/customCursor'
import { addLoadedClass } from '@js/modules/addLoadedClass'
import { addTouchClass } from '@js/modules/addTouchClass'
import { colorScheme } from '@js/modules/colorScheme'
import { webp } from '@js/modules/webp'
import startUntilEvent from '@js/modules/startUntilEvent'

// Vendors
import { initSliders } from '@js/vendors/Swiper'

// import '@js/vendors/SimpleBar'
import '@js/vendors/Marquee'
import '@js/vendors/Typed'
import '@js/vendors/tippy'

// Components
new Popup()
spoilers()

// Modules
addLoadedClass()
addTouchClass()
colorScheme()
startUntilEvent()
webp()

// Vendors
initSliders()
