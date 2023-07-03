import { tokenToDecimal } from './utils/tokens';
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts';
import { AnswerUpdated as AnswerUpdatedUsdc } from "../generated/chainlink_aggr_usdc_usd/chainlink_aggr";
import { AnswerUpdated as AnswerUpdatedUsdt } from "../generated/chainlink_aggr_usdt_usd/chainlink_aggr";
import { AnswerUpdated as AnswerUpdatedDai } from "../generated/chainlink_aggr_dai_usd/chainlink_aggr";
import {
	Price,
	// PriceLastUpdate,
} from "../generated/schema";
import {
	NUM,
	ADDR,
	// DECIMALS,
} from './utils/constants';
// import { Token } from './types/constants';


const initPrice = (): Price => {
	let price = Price.load(ADDR.ZERO)
	if (!price) {
		price = new Price(ADDR.ZERO);
		price.usdc = NUM.ZERO;
		price.usdt = NUM.ZERO;
		price.dai = NUM.ZERO;
		price.save();
	}
	return price;
}

const CHAINLINK_DECIMALS = BigDecimal.fromString('100000000');

// export function handleUsdcPriceFeed(ev: AnswerUpdatedUsdc): void {
// 	let price = initPrice();
// 	// price.usdc = tokenToDecimal(ev.params.current, 10, 6);
// 	price.usdc = ev.params.current.toBigDecimal().div(CHAINLINK_DECIMALS);
// 	price.save();
// }

// export function handleUsdtPriceFeed(ev: AnswerUpdatedUsdt): void {
// 	let price = initPrice();
// 	price.usdt = ev.params.current.toBigDecimal().div(CHAINLINK_DECIMALS);
// 	price.save();
// }

// export function handleDaiPriceFeed(ev: AnswerUpdatedDai): void {
// 	let price = initPrice();
// 	price.dai = ev.params.current.toBigDecimal().div(CHAINLINK_DECIMALS);
// 	price.save();
// }

export enum Token {
	usdc,
	usdt,
	dai,
}

export function handleUsdcPriceFeed(ev: AnswerUpdatedUsdc): void {
	updatePrice(ev.params.current.toBigDecimal().div(CHAINLINK_DECIMALS), Token.usdc);
}

export function handleUsdtPriceFeed(ev: AnswerUpdatedUsdt): void {
	updatePrice(ev.params.current.toBigDecimal().div(CHAINLINK_DECIMALS), Token.usdt);
}

export function handleDaiPriceFeed(ev: AnswerUpdatedDai): void {
	updatePrice(ev.params.current.toBigDecimal().div(CHAINLINK_DECIMALS), Token.dai);
}

const updatePrice = (value: BigDecimal, token: Token): void => {
	let price = initPrice();
	switch (token) {
		case Token.dai:
			price.dai = value;
			break;
		case Token.usdc:
			price.usdc = value;
			break;
		case Token.usdt:
			price.usdt = value;
			break;
		default:
			break;
	}
	price.save();

}

// const updatePriceFeed<T>(ev: T): void => {
//   const a = 1;
// }

// export function handleAnswerUpdated(event: AnswerUpdatedEvent): void {
// 	let entity = new AnswerUpdated(
// 		event.transaction.hash.concatI32(event.logIndex.toI32())
// 	)
// 	entity.current = event.params.current
// 	entity.roundId = event.params.roundId
// 	entity.updatedAt = event.params.updatedAt
// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash
// 	entity.save()
// }






// const initPriceLastUpdate = (): PriceLastUpdate => {
// 	let priceTS = PriceLastUpdate.load(ADDR.ZERO)
// 	if (!priceTS) {
// 		priceTS = new PriceLastUpdate(ADDR.ZERO);
// 		priceTS.usdc_ts = NUM.ZERO;
// 		priceTS.usdt_ts = NUM.ZERO;
// 		priceTS.dai_ts = NUM.ZERO;
// 		priceTS.save();
// 	}
// 	return priceTS;
// }
