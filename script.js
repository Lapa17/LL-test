

function increment(e) {
    let value = e.currentTarget.parentNode.childNodes[4].innerHTML //находим значение в нужном спане
    e.currentTarget.parentNode.childNodes[4].innerHTML = (Number(value) + 1).toString()

}
function decrement(e) {
    let value = e.currentTarget.parentNode.childNodes[4].innerHTML
    e.currentTarget.parentNode.childNodes[4].innerHTML = (Number(value) - 1).toString()
}


let index = 0 

function createCounter (number = 0) {
    let root = document.getElementById('root')
    root.innerHTML += "<div class='wrapper'><button onclick='increment(event)' class='plus'>+</button><button onclick='decrement(event)' class='minus'>-</button> <span>Counter:</span><span class='number' ></span></div>" // создаем html
    let spans = document.getElementsByClassName('number') //находим все спаны по классу
    spans[index].innerHTML = number.toString(); // в нужный спан записываем значение
    index++
    return {
        counter: number,
        increment: function (){
            return this.counter += 1
        },
        decrement: function (){
            return this.counter -= 1
        },
    }
}


const counter_1 = createCounter(15)
const counter_2 = createCounter(-6)
const counter_3 = createCounter(22)
const counter_4 = createCounter()




counter_3.decrement()
console.log(counter_3.counter)
counter_1.increment()
console.log(counter_1.counter)


