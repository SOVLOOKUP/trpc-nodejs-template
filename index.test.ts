import { newClient } from "./src/client"
// import { it, expect } from "vitest"
const client = newClient({
    host: "tradex.sovlookup.workers.dev",
    secure: true
})

// it("base", async () => {
const base = await client.base.query()
await client.base.query()
await client.base.query()
await client.base.query()
await client.base.query()
// console.log(base)
//     expect(base).toBe("helloword")
// })

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})

client.sub.subscribe(undefined, {
    onStopped() {
        console.log("停止")
    },
    onData(value) {
        console.log(value)
        // expect(typeof value).toBe("number")
    },
    onComplete() {
        console.log("结束")
    },
    onError(err) {
        console.log(err)
    },
})



