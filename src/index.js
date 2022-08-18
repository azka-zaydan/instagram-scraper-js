import puppeteer from 'puppeteer'



export const scrapeImages = async (username) => {
    const browser = await puppeteer.launch()
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();


    // await page.goto('https://www.instagram.com/')


    // await page.waitForSelector('input')
    // await page.screenshot({ path: 'loginPage.png' })

    // await page.type('[name="username"]', 'azkarafifz')

    // await page.screenshot({ path: 'nameTyped.png' })

    // await page.type('[name="password"]', 'Azkarafif1415')

    // await page.click('[type="submit"]')

    // await page.screenshot({ path: 'loggedIn?.png' })

    // const curUrl = await page.url()
    // console.log(curUrl)

    // await page.waitForSelector('img', {
    //     visible: true
    // })

    // await page.screenshot({ path: 'whereNow.png' })
    // await page.waitFor(5000)

    await page.goto(`https://www.instagram.com/${username}`, { waitUntil: 'networkidle0' })

    await page.waitForSelector('img', {
        visible: true
    })

    await page.screenshot({ path: `${username}'s-page.png` })
    // console.log(page.url())
    const data = await page.evaluate(() => {
        const images = document.querySelectorAll('img')
        const urls = Array.from(images).map(i => {
            const obj = { src: i.src, alt: i.alt }
            return obj
        })
        return urls
    })


    await browser.close()

    return data

}