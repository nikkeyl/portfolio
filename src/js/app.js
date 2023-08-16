import '@scss/style'
import '@js/script'

// ----------------------------------------------------------------COMPONENTS
import { spoilers } from '@js/components/spoilers'
import '@js/components/popup'

// ----------------------------------------------------------------SCROLL
// import { ScrollWatcher } from '@js/modules/scroll/watcher'

// ----------------------------------------------------------------MODULES
import { addLoadedClass } from '@js/modules/addLoadedClass'
import { addTouchClass } from '@js/modules/addTouchClass'
// import { customCursor } from './modules/customCursor'
import { webp } from '@js/modules/webp'

// ----------------------------------------------------------------VENDORS
// import '@js/vendors/SimpleBar'
import '@js/vendors/Marquee'
import '@js/vendors/Swiper'
import '@js/vendors/Typed'
import '@js/vendors/tippy'

// ==========================================================================

// ----------------------------------------------------------------COMPONENTS
spoilers()

// ----------------------------------------------------------------SCROLL
// new ScrollWatcher()

// ----------------------------------------------------------------MODULES
addLoadedClass()
addTouchClass()
// customCursor()
webp()
