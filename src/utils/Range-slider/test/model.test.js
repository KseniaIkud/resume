
import {Model} from '../src/mvc/model'

const _ = new Model({})

describe('subscribe function', () => {
    test('subscribe functions should be defined', () => {
        expect(_.subscribe).toBeDefined()
    })
})

describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined()
    })
})

describe('update function', () => {
    test('update function should be defined', () => {
        expect(_.update).toBeDefined()
    })
})

describe('set scale function', () => {
    test('setScale function should be defined', () => {
        expect(_.setScale).toBeDefined()
    })
})

describe('limit toggle function', () => {
    test('limit toggle function should be defined', () => {
        expect(_.limitToggle).toBeDefined()
    })
})

describe('limit step function', () => {
    test('limit step function should be defined', () => {
        expect(_.limitStep).toBeDefined()
    })
})
describe('calc nearest function', () => {
    test('calc nearest function should be defined', () => {
        expect(_.calcNearest).toBeDefined()
    })
})