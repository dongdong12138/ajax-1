/**
 * 加载 CSS
 */
const getCSS = document.querySelector('#getCSS')
getCSS.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', './style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载 CSS 失败')
            }
        }
    }
    request.send()
})

/**
 * 加载 JS
 */
const getJS = document.querySelector('#getJS')
getJS.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let script = document.createElement('script')
                script.textContent = request.response
                document.body.appendChild(script)
            } else {
                alert('加载 JS 失败')
            }
        }
    }
    request.send()
})

/**
 * 加载 HTML
 */
const getHTML = document.querySelector('#getHTML')
getHTML.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                let div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载 HTML 失败')
            }
        }
    }
    request.send()
})

/**
 * 加载 XML
 */
const getXML = document.querySelector('#getXML')
getXML.onclick = () => {
    const res = new XMLHttpRequest()
    res.open('GET', '/4.xml')
    res.onreadystatechange = () => {
        if (res.readyState === 4) {
            if (res.status >= 200 && res.status < 300) {
                const xmlNode = res.responseXML.querySelector('warning').textContent
                console.log(xmlNode.trim())
            } else {
                alert('加载 XML 失败')
            }
        }
    }
    res.send()
}

/**
 * 加载 JSON
 */
const getJSON = document.querySelector('#getJSON')
getJSON.onclick = () => {
    const res = new XMLHttpRequest()
    res.open('GET', '/5.json')
    res.onreadystatechange = () => {
        if (res.readyState === 4) {
            if (res.status >= 200 && res.status < 300) {
                console.log(res.response)
                const obj = JSON.parse(res.response)
                console.log(obj)
            } else {
                alert('加载 JSON 失败')
            }
        }
    }
    res.send()
}

/**
 * 自动加载第 1 页
 */
const pageDataRes = new XMLHttpRequest()
pageDataRes.open('GET', '/page1')
pageDataRes.onreadystatechange = () => {
    if (pageDataRes.readyState === 4) {
        if (pageDataRes.status >= 200 && pageDataRes.status < 300) {
            const dataArr = JSON.parse(pageDataRes.response)
            dataArr.forEach((value) => {
                let li = document.createElement('li')
                li.textContent = value.id
                list.appendChild(li)
            })
        } else {
            alert('加载第一页失败')
        }
    }
}
pageDataRes.send()

/**
 * 加载下一页
 */
let pageCount = 2
const getNextPage = document.querySelector('#getNextPage')
getNextPage.onclick = () => {
    const res = new XMLHttpRequest()
    res.open('GET', `/page${pageCount}`)
    res.onreadystatechange = () => {
        if (res.readyState === 4) {
            if (res.status >= 200 && res.status < 300) {
                const dataArr = JSON.parse(res.response)
                dataArr.forEach((value) => {
                    let li = document.createElement('li')
                    li.textContent = value.id
                    list.appendChild(li)
                })
                pageCount += 1
            } else {
                alert(`加载第${pageCount}页失败`)
            }
        }
    }
    res.send()
}