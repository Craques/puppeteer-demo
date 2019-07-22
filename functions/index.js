const functions = require('firebase-functions');
const admin = require('firebase-admin')
const puppeteer = require('puppeteer')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addMessage = functions.https.onRequest(async(req, res)=>{
    //res.send('Hello world from firebase').status(200)
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
    const page = await browser.newPage()

    await page.goto('https://news.ycombinator.com/')
    await page.waitFor('.hnname')
    const pageTitle = await page.evaluate(()=> document.querySelector('.hnname'))

    res.send(pageTitle)
    browser.close()

})