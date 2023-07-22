import '@scss/style'
import '@js/script'

// ----------------------------------------------------------------COMPONENTS
import { spoilers } from '@js/components/spoilers'
import '@js/components/popup'

// ----------------------------------------------------------------SCROLL
import { pageNavigation } from '@js/modules/scroll/pageNavigation'
// import { ScrollWatcher } from '@js/modules/scroll/watcher'

// ----------------------------------------------------------------MODULES
import { addLoadedClass } from '@js/modules/addLoadedClass'
import { fullScreenFix } from '@js/modules/fullScreenFix'
import { webp } from '@js/modules/webp'

// ----------------------------------------------------------------VENDORS
// import '@js/vendors/simpleBar'
import '@js/vendors/marquee'
import '@js/vendors/swiper'
import '@js/vendors/tippy'

// ==========================================================================

// ----------------------------------------------------------------COMPONENTS
spoilers()

// ----------------------------------------------------------------SCROLL
// new ScrollWatcher()
pageNavigation()

// ----------------------------------------------------------------MODULES
addLoadedClass()
fullScreenFix()
webp()
