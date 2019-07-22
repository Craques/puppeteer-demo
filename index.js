const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-fullscreen']
    })
    const page = await browser.newPage()
    await page.goto('https://news.ycombinator.com/')
    await page.waitFor('td')
    const stories = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll('td.title:not([align="right"])')).map((title)=>{
            return title.querySelector('a').innerText
        })
    })

    console.log(stories)
    browser.close()
})()