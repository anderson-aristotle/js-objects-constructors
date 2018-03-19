'use strict'

const chai = require('chai')
const expect = chai.expect

const runs = require('../lib/runs')

describe('runs', function () {
  if (Object.keys(runs)[0] === 'name') {
    describe('total distance', function () {
      it('has the correct length', function () {
        expect(runs.totalDistance()).to.equal(2600)
      })
    })

    describe('longest distance run', function () {
      it('has the correct length', function () {
        expect(runs.longestRunDistance()).to.equal(1400)
      })
    })

    describe('average speed', function () {
      it('has the correct value', function () {
        expect(runs.averageSpeed().toLocaleString('en-US')).to.equal('1.857')
      })
    })
  } else {
    const User = runs.User
    const Run = runs.Run
    const user = new User('Christopher Robin', 'wdi@christopherRobin.com')
    user.runs.push(new Run('2015-05-25 15:00', 1200, 600))
    user.runs.push(new Run('2015-05-25 15:00', 1400, 800))

    describe('total distance', function () {
      it('has the correct length', function () {
        expect(user.totalDistance()).to.equal(2600)
      })
    })

    describe('longest distance run', function () {
      it('has the correct length', function () {
        expect(user.longestRunDistance()).to.equal(1400)
      })
    })

    describe('average speed', function () {
      it('has the correct value', function () {
        expect(user.averageSpeed().toLocaleString('en-US')).to.equal('1.857')
      })
    })
  }
})
