import { newClient } from "./src/client"
const client = newClient({
    host: "localhost:8787"
})

for (const a of [1, 2, 3, 4, 5]) {
    console.log(
        await client.base.query()
    )
}