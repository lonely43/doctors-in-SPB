import {createNav, burgerMenu} from "./static/js/nav.js"
createNav()
burgerMenu()

import createFooter from "./static/js/footer.js"
createFooter()

window.onload = () => {
   document.querySelector(".loading").style.display = "none"
}
