class D {
    constructor(...args) {
        this._date = new Date(...args)
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return this._date.getFullYear().toString().substr(2, 3)
    }
    get month() {
        return this.months[this._date.getMonth()]
    }
    get m() {
        return this.months[this._date.getMonth()].toString().substr(0, 3)
    }
    get day() {
        return this.days[this._date.getDay()]
    }
    get dy() {
        return this.days[this._date.getDay()].toString().substr(0, 3)
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        return this._date.getHours()
    }
    get mins() {
        return this._date.getMinutes()
    }
    get secs() {
        return this._date.getSeconds()
    }

    formatDate(input) {
        let formattedDate = ''
        let splitInput = input.split("")
        for (let i = 0; i < splitInput.length; i++) {
            switch (splitInput[i]) {
                case "Y":
                    splitInput[i] = this.year
                    break
                case "y":
                    splitInput[i] = this.yr
                    break
                case "M":
                    splitInput[i] = this.month
                    break
                case "m":
                    splitInput[i] = this.m
                    break
                case "D":
                    if (this.date.toString().length < 2) {
                        splitInput[i] = `0${this.date}`
                    }
                    break
                case "d":
                    splitInput[i] = this.date
                    break
                case "H":
                    if (this.hours.toString().length < 2) {
                        splitInput[i] = `0${this.hours}`
                    } else {
                        splitInput[i] = this.hours
                    }
                    break
                case "h":
                    splitInput[i] = this.hours
                    break
                case "I":
                    if (this.mins.toString().length < 2) {
                        splitInput[i] = `0${this.mins}`
                    } else {
                        splitInput[i] = this.mins
                    }
                    break
                case "i":
                    splitInput[i] = this.mins
                    break
                case "S":
                    if (this.secs.toString().length < 2) {
                        splitInput[i] = `0${this.secs}`
                    } else {
                        splitInput[i] = this.secs
                    }
                    break
                case "s":
                    splitInput[i] = this.secs
                    break
                default:
                    break
            }
        }
        return splitInput.join('')
    }


}


// With no parameters: 
const a = new D()
// Create a date from a string (single parameter)
const b = new D('9/26/1965')
// Create a date from some numbers (list of parameters)
const c = new D(1970, 1, 1, 0, 0, 0)
// With a Date
const d = new D(new Date())

// console.log(a.year)
// console.log(a.yr)
// console.log(a.month)
// console.log(a.m)
// console.log(a.day)
// console.log(a.dy)
// console.log(a.date)
// console.log(a.hours)
// console.log(a.mins)
// console.log(a.secs)


console.log(a.formatDate('y/m/d'))

console.log(a.formatDate('H:I:S'))

console.log(a.formatDate('Y-M-D h:i:s'))