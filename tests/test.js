const D = require('../src/index')

const now = new Date()
const d = new D()


test('D.year', () => {
    expect(d.year).toBe(now.getFullYear())
})

test('D.yr', () => {
    expect(d.yr).toBe('21')
})

test('D.month', () => {
    expect(d.month).toBe('February')
})

test('D.m', () => {
    expect(d.m).toBe('Feb')
})

test('D.day', () => {
    expect(d.day).toBe('Monday')
})

test('D.dy', () => {
    expect(d.dy).toBe('Mon')
})

test('D.date', () => {
    expect(d.date).toBe(now.getDate())
})

test('D.hours', () => {
    expect(d.hours).toBe(now.getHours())
})

test('D.mins', () => {
    expect(d.mins).toBe(now.getMinutes())
})

test('D.secs', () => {
    expect(d.secs).toBe(now.getSeconds())
})

test('D.formatDate', () => {
    expect(d.formatDate("y/m/d")).toBe("21/2/8")
})



