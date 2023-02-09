import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { ImgUtil } from "./utils/imgUtils"
console.log("环境变量", import.meta.env.VITE_username)
ImgUtil.storageImgList()
createApp(App).mount("#app")
if (true) {
  console.log(11)
}
