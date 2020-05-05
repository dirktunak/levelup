import { ranks } from './constants'


class Card {
	constructor(suit, rank){
		this.suit = suit
		this.rank = rank
	}

	isPair(pairCard){
		return this.suit === pairCard.suit && this.rank === pairCard.rank
	}

	isConsecutivePair(other, primeSuit, primeRank){
		const areAdjacentTo = (myRank, otherRank) => {
			return Math.abs(myRank - otherRank) === 1
		}

		const isPrime = (suit, rank) => {
			return suit === primeSuit || rank === primeRank || rank >= ranks.SMALL_JOKER
		}

		if(isPrime(this.suit, this.rank) && isPrime(other.suit, other.rank)){
			const calculateRank = (suit, rank) => {
				if(rank === primeRank && suit === primeSuit){
					return ranks.RANK_ONSUIT
				} else if(rank === primeRank && suit !== primeSuit){
					return ranks.RANK_OFFSUIT
				}
				return rank
			}

			let myRank = calculateRank(this.suit, this.rank)
			let otherRank = calculateRank(other.suit, other.rank)
			
			const isHighestNumbered = (rank) => {
				if(primeRank === ranks.ACE){
					return rank === ranks.KING
				}
				return rank === primeRank
			}

			if(areAdjacentTo(this.rank, primeRank) && areAdjacentTo(other.rank, primeRank)){
				const thisMinusPrimeRank = this.rank - primeRank
				const otherMinusPrimeRank = other.rank - primeRank
				return thisMinusPrimeRank * otherMinusPrimeRank === -1
			}
			else if(myRank === ranks.RANK_OFFSUIT && otherRank === ranks.RANK_OFFSUIT){
				return true
			}
			else if(isHighestNumbered(this.rank) && otherRank === ranks.RANK_OFFSUIT || isHighestNumbered(other.rank) && myRank === ranks.RANK_OFFSUIT){
				return true
			}
			else{
				return Math.abs(myRank - otherRank) === 1
			}
		} else if(this.suit === other.suit){
			if(areAdjacentTo(this.rank, primeRank) && areAdjacentTo(other.rank, primeRank)){
				const thisMinusPrimeRank = this.rank - primeRank
				const otherMinusPrimeRank = other.rank - primeRank
				return thisMinusPrimeRank * otherMinusPrimeRank === -1
			} else if(this.rank === primeRank || other.rank === primeRank){
				return false
			}
			else{
				return Math.abs(other.rank - this.rank) === 1
			}
		}
		return false
	}
}

export default Card