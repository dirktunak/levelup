import { suits, ranks } from './constants'
import Card from './Card'

const clubTwo = new Card(suits.CLUB, ranks.TWO)
const clubThree = new Card(suits.CLUB, ranks.THREE)
const clubFour = new Card(suits.CLUB, ranks.FOUR)

const heartTwo = new Card(suits.HEART, ranks.TWO)
const heartThree = new Card(suits.HEART, ranks.THREE)
const heartFour = new Card(suits.HEART, ranks.FOUR)

const diamondTwo = new Card(suits.DIAMOND, ranks.TWO)
const diamondThree = new Card(suits.DIAMOND, ranks.THREE)
const diamondFour = new Card(suits.DIAMOND, ranks.FOUR)

const heartQueen = new Card(suits.HEART, ranks.QUEEN)
const heartKing = new Card(suits.HEART, ranks.KING)
const heartAce = new Card(suits.HEART, ranks.ACE)

const spadeQueen = new Card(suits.SPADE, ranks.QUEEN)
const spadeKing = new Card(suits.SPADE, ranks.KING)
const spadeAce = new Card(suits.SPADE, ranks.ACE)

const smallJoker = new Card(suits.PRIME, ranks.SMALL_JOKER)
const bigJoker = new Card(suits.PRIME, ranks.BIG_JOKER)

describe('Card', () => {
	describe('isPair', () => {
		it('should return false for clubTwo clubThree', () => {
			expect(clubTwo.isPair(clubThree)).toEqual(false)
		})
		it('should return false for clubTwo heartTwo', () => {
			expect(clubTwo.isPair(heartTwo)).toEqual(false)
		})
		it('should return true for clubTwo clubTwo', () => {
			expect(clubTwo.isPair(clubTwo)).toEqual(true)
		})
	})
	describe('isConsecutive', () => {
		describe(`primeSuit = ${suits.CLUB}, primeRank = 2`, () => {
			const primeSuitRank = [suits.CLUB, ranks.TWO]
			describe('both prime', () => {
				it('should return false for clubTwo clubThree', () => {
					expect(clubTwo.isConsecutivePair(clubThree, ...primeSuitRank)).toEqual(false)
				})
				it('should return true for clubThree clubFour', () => {
					expect(clubThree.isConsecutivePair(clubFour, ...primeSuitRank)).toEqual(true)
				})
				it('should return true for clubTwo heartTwo', () => {
					expect(clubTwo.isConsecutivePair(heartTwo, ...primeSuitRank)).toEqual(true)
				})
				it('should return true for diamondTwo heartTwo', () => {
					expect(diamondTwo.isConsecutivePair(heartTwo, ...primeSuitRank)).toEqual(true)
				})
				it('should return true for smallJoker bigJoker', () => {
					expect(smallJoker.isConsecutivePair(bigJoker, ...primeSuitRank)).toEqual(true)
				})
				it('should return true for clubTwo smallJoker', () => {
					expect(clubTwo.isConsecutivePair(smallJoker, ...primeSuitRank)).toEqual(true)
				})
				it('should return false for clubTwo bigJoker', () => {
					expect(clubTwo.isConsecutivePair(bigJoker, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for clubThree smallJoker', () => {
					expect(clubThree.isConsecutivePair(smallJoker, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for diamondTwo smallJoker', () => {
					expect(diamondTwo.isConsecutivePair(smallJoker, ...primeSuitRank)).toEqual(false)
				})
			})
			describe('non-prime', () => {
				it('should return false for heartTwo heartThree', () => {
					expect(heartTwo.isConsecutivePair(heartThree, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for heartTwo heartFour', () => {
					expect(heartTwo.isConsecutivePair(heartFour, ...primeSuitRank)).toEqual(false)
				})
				it('should return true for heartThree heartFour', () => {
					expect(heartThree.isConsecutivePair(heartFour, ...primeSuitRank)).toEqual(true)
				})
			})
		})
		describe(`primeSuit = ${suits.DIAMOND}, primeRank = 3`, () => {
			const primeSuitRank = [suits.DIAMOND, ranks.THREE]
			describe('both prime', () => {
				it('should return true for diamondTwo diamondFour', () => {
					expect(diamondTwo.isConsecutivePair(diamondFour, ...primeSuitRank)).toEqual(true)
				})
				it('should return false for diamondTwo diamondThree', () => {
					expect(diamondTwo.isConsecutivePair(diamondThree, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for diamondThree diamondFour', () => {
					expect(diamondThree.isConsecutivePair(diamondFour, ...primeSuitRank)).toEqual(false)
				})
			})
			describe('non-prime', () => {
				it('should return false for clubTwo clubThree', () => {
					expect(clubTwo.isConsecutivePair(clubThree, ...primeSuitRank)).toEqual(false)
				})
				it('should return true for clubTwo clubFour', () => {
					expect(clubTwo.isConsecutivePair(clubFour, ...primeSuitRank)).toEqual(true)
				})
				it('should return false for clubThree clubFour', () => {
					expect(clubThree.isConsecutivePair(clubFour, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for clubTwo heartTwo', () => {
					expect(clubTwo.isConsecutivePair(heartTwo, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for diamondTwo heartTwo', () => {
					expect(diamondTwo.isConsecutivePair(heartTwo, ...primeSuitRank)).toEqual(false)
				})
			})
		})
		describe(`primeSuit = ${suits.HEART}, primeRank = King`, () => {
			const primeSuitRank = [suits.HEART, ranks.KING]
			describe('both prime', () => {
				it('should return true for heartQueen heartAce', () => {
					expect(heartQueen.isConsecutivePair(heartAce, ...primeSuitRank)).toEqual(true)
				})
				it('should return false for heartQueen heartKing', () => {
					expect(heartQueen.isConsecutivePair(heartKing, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for heartKing heartAce', () => {
					expect(heartKing.isConsecutivePair(heartAce, ...primeSuitRank)).toEqual(false)
				})
			})
			describe('non-prime', () => {
				it('should return true for heartQueen heartAce', () => {
					expect(heartQueen.isConsecutivePair(heartAce, ...primeSuitRank)).toEqual(true)
				})
			})
		})
		describe(`primeSuit = ${suits.SPADE}, primeRank = Ace`, () => {
			const primeSuitRank = [suits.SPADE, ranks.ACE]
			describe('both prime', () => {
				it('should return false for spadeKing spadeAce', () => {
					expect(spadeKing.isConsecutivePair(spadeAce, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for spadeQueen spadeAce', () => {
					expect(spadeQueen.isConsecutivePair(spadeAce, ...primeSuitRank)).toEqual(false)
				})
				it('should return true for spadeQueen spadeKing', () => {
					expect(spadeQueen.isConsecutivePair(spadeKing, ...primeSuitRank)).toEqual(true)
				})
				it('should return true for spadeKing heartAce', () => {
					expect(spadeKing.isConsecutivePair(heartAce, ...primeSuitRank)).toEqual(true)
				})
				it('should return true for smallJoker bigJoker', () => {
					expect(smallJoker.isConsecutivePair(bigJoker, ...primeSuitRank)).toEqual(true)
				})
				it('should return false for heartAce smallJoker', () => {
					expect(heartAce.isConsecutivePair(smallJoker, ...primeSuitRank)).toEqual(false)
				})
			})
			describe('non-prime', () => {
				it('should return false for heartKing heartAce', () => {
					expect(heartKing.isConsecutivePair(heartAce, ...primeSuitRank)).toEqual(false)
				})
			})
		})
		describe(`primeSuit = ${suits.PRIME}, primeRank = Joker`, () => {
			const primeSuitRank = [suits.PRIME, ranks.BIG_JOKER]
			describe('both prime', () => {
				it('should return true for smallJoker bigJoker', () => {
					expect(smallJoker.isConsecutivePair(bigJoker, ...primeSuitRank)).toEqual(true)
				})
			})
			describe('non-prime', () => {
				it('should return false for heartAce smallJoker', () => {
					expect(heartAce.isConsecutivePair(smallJoker, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for heartAce bigJoker', () => {
					expect(heartAce.isConsecutivePair(bigJoker, ...primeSuitRank)).toEqual(false)
				})
				it('should return false for heartAce spadeAce', () => {
					expect(heartAce.isConsecutivePair(spadeAce, ...primeSuitRank)).toEqual(false)
				})
				it('should return true for heartKing heartAce', () => {
					expect(heartKing.isConsecutivePair(heartAce, ...primeSuitRank)).toEqual(true)
				})
			})
		})
	})
})