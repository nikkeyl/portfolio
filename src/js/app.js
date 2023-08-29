import '@scss/style'
import '@js/script'

// ----------------------------------------------------------------COMPONENTS
import { spoilers } from '@js/components/spoilers'
import { Popup } from '@js/components/Popup'

// ----------------------------------------------------------------SCROLL
// import { ScrollWatcher } from '@js/modules/scroll/watcher'

// ----------------------------------------------------------------MODULES
import { addLoadedClass } from '@js/modules/addLoadedClass'
import { addTouchClass } from '@js/modules/addTouchClass'

// import { customCursor } from './modules/customCursor'
import { webp } from '@js/modules/webp'

// ----------------------------------------------------------------VENDORS
import { initSliders } from '@js/vendors/Swiper'

// import '@js/vendors/SimpleBar'
import '@js/vendors/Marquee'
import '@js/vendors/Typed'
import '@js/vendors/tippy'

// ==========================================================================

// ----------------------------------------------------------------COMPONENTS
spoilers()
new Popup()

// ----------------------------------------------------------------MODULES
addLoadedClass()
addTouchClass()
webp()

// ----------------------------------------------------------------VENDORS
initSliders()
