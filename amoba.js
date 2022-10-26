o = "O", meret = 10, Xpont = 0, Opont = 0, PontSzamlalo = document.getElementById("pont")
f = e => {
    if(e.innerHTML == "") {
        o = o == "X" ? "O" : "X"
        e.innerHTML = o, e.setAttribute('class', o)
        x = e.cellIndex, y = e.parentElement.rowIndex, t[x][y] = o
        setTimeout(() => [[1,1],[1,0],[0,1],[-1,1]].forEach( d => {
            xp=x, yp=y, maxh=0, [vx, vy] = d
            while (t[xp][yp] === o) xp += vx, yp += vy, maxh++
            xp=x, yp=y
            while (t[xp][yp] === o) xp -= vx, yp -= vy, maxh++
            if (maxh > 5) {
                alert(`Nyert: ${o}`)
                if (o == "X") {Xpont += 1}
                else {Opont += 1}
                PontSzamlalo.innerHTML = "X = "+Xpont.toString()+", O = "+Opont.toString()
                init()
            }
        }), 100)
    }   
}
(init = () => {
    o = "O"
    t = Array(meret).fill().map(() => Array(meret).fill())
    document.getElementById("a").innerHTML = `
    <table>
        ${Array(meret).fill(`
        <tr>
        ${Array(meret).fill(`<td onmouseup="f(this)" />`).join('')}
        </tr>
        `).join('')}
    </table>`
})()
