import { newClient } from "./src/client"
// import { it, expect } from "vitest"
const client = newClient({
    host: "localhost:8787"
})

// it("base", async () => {
for (const a of [1, 2, 3, 4, 5]) {
    console.log(
        await client.base.query()
    )
}
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
