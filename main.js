const fetch = require("node-fetch");
const express = require("express");
const axios = require("axios");
console.log("run!")

const ids = [
    "3e756452-5772-11ed-e795-0050568313a7",
    "575fa2a2-5772-11ed-e795-0050568313a7",
    "289af0e4-31e0-11ec-bc0b-005056830fce",
    "083f9182-5772-11ed-e795-0050568313a7",
    "790dffb2-5771-11ed-e795-0050568313a7"
];

const TELEGRAM_URI = `https://api.telegram.org/bot5968934614:AAE7B1VzWhLlKHeuNeSVtKKJWj-2LsFZTVI`

const app = express();
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.post('/new-message', async (req, res) => {
    const { message } = req.body

    const messageText = message?.text?.toLowerCase()?.trim()
    const chatId = message?.chat?.id
    if (!messageText || !chatId) {
        return res.sendStatus(400)
    }
    try {
        await axios.post(TELEGRAM_URI, {
            chat_id: chatId,
            text: "Это бот PHG"
        })
        res.send('Done')
    } catch (e) {
        console.log(e)
        res.send(e)
    }
    return ;
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const req = async (id) => {
    // const response = await fetch(
    //     'https://mobifitness.ru/api/v8/account/reserve.json',
    //     {
    //         method: 'POST',
    //         // body: "scheduleId=22abb4ce-5772-11ed-1186-0050568313a7&clubId=4836",
    //         body: `scheduleId=${id}&clubId=4836`,
    //         headers: {
    //             authorization: 'Bearer 3aa5953b757db6af037f8a9e525347461b1e280b',
    //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         }
    //     });
    // const data = await response.json();
    console.log(id)
    // console.log(data);
}

ids.map(id => {
    req(id);
})