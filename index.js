const puppeteer = require('puppeteer');
let pageTitles = [];

(async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-fullscreen']
    })
    const page = await browser.newPage()
    await page.goto('https://news.ycombinator.com/')
    await page.waitFor('td')
    //Get first page data
    const stories = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll('td.title:not([align="right"])')).map((title)=>{
            return title.querySelector('a').innerText
        })
    })

    const moreLink = await page.evaluate(()=>document.querySelector('.moreLink'))
    let n = 1
    while(moreLink && n < 10){
        //navigate to the subsequent pages getting the information
        await page.goto(`https://news.ycombinator.com/news?p=${n}`)
        await page.waitFor('td')
        //Get first page data
        const stories = await page.evaluate(()=>{
            return Array.from(document.querySelectorAll('td.title:not([align="right"])')).map((title)=>{
                return title.querySelector('a').innerText
            })
        })
        console.log('I am here', n)
        pageTitles = [...pageTitles, ...stories]
        n++
    }
    console.log(pageTitles)
    await browser.close()
})()
