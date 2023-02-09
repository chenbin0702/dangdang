import { defineConfig, CommonServerOptions } from "vite"
import vue from "@vitejs/plugin-vue"
import * as fs from "fs"
import dotenv, { DotenvParseOutput } from "dotenv"
export default defineConfig((mode) => {
  // 基础路径
  // const base:string = '/book'
  const env = mode.mode
  const envFileName: string = ".env"
  const curEnvFileName = `${envFileName}.${env}`
  let server: CommonServerOptions = {} // 赋值一个空对象，不然报错
  const envData = fs.readFileSync(curEnvFileName)
  const envMap: DotenvParseOutput = dotenv.parse(envData) // 解析为key-value对象 dotenv.DotenvParseOutput泛型 需要声明合并 并引入
  console.log(envMap)
  console.log("当前环境：", curEnvFileName)
  // server服务端 继承CommonServerOptions接口 CommonServerOptions在vite模块引入
  if (env === "development") {
    server = {
      host: envMap.VITE_HOST, // 主机
      port: envMap.VITE_PORT, // 端口
      proxy: {
        [envMap.VITE_BASE_URL]: {
          target: envMap.VITE_PROXY_DOMAIN,
        },
      }, // 代理访问,解决后端跨域
    }
    console.log("开发环境", server)
  } else if (env === "production") {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
    }
    console.log("生产环境", server)
  }
  return {
    plugins: [vue()],
    // base,
    server,
  }
})
