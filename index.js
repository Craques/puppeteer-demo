const puppeteer = require('puppeteer');
let pageTitles = [];
const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
]

const getHeaders = async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        args,
        ignoreHTTPSErrors: true,
        userDataDir: './tmp'
    })
    const page = await browser.newPage()
    await page.goto('https://news.ycombinator.com/')
    await page.waitFor('td')
    //Get first page data
    const stories = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll('td.title:not([align="right"])')).map((title)=>{
            return {title: title.querySelector('a').innerText}
        })
    })

    const moreLink = await page.evaluate(()=>document.querySelector('.moreLink'))
    let n = 1
    while(moreLink && n < 5){
        //navigate to the subsequent pages getting the information
        await page.goto(`https://news.ycombinator.com/news?p=${n}`)
        await page.waitFor('td')
        //Get first page data
        const stories = await page.evaluate(()=>{
            return Array.from(document.querySelectorAll('td.title:not([align="right"]) > .storylink')).map((link)=>{
                return {title: link.textContent, url: link.href}
            })
        })
        
        await page.waitFor(Math.random() * 5000)
        pageTitles = [...pageTitles, ...stories]
        n++
    }
    await browser.close()
    //console.log(pageTitles)
    return pageTitles
}

module.exports = {getHeaders: getHeaders}