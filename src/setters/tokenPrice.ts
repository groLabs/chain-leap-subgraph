import {
	NUM,
	ADDR,
	Token,
} from '../utils/constants';
import { TokenPrice } from '../../generated/schema';
import { BigDecimal } from '@graphprotocol/graph-ts';


const initTokenPrice = (): TokenPrice => {
	let price = TokenPrice.load(ADDR.ZERO)
	if (!price) {
		price = new TokenPrice(ADDR.ZERO);
		price.usdc = NUM.ZERO;
		price.usdt = NUM.ZERO;
		price.dai = NUM.ZERO;
		price.eth = NUM.ZERO;
		price.btc = NUM.ZERO;
		price.matic = NUM.ZERO;
		price.ada = NUM.ZERO;
		price.crv = NUM.ZERO;
		price.avax = NUM.ZERO;
		price.doge = NUM.ZERO;
		price.save();
	}
	return price;
}

export const updateTokenPrice = (value: BigDecimal, token: Token): void => {
	let price = initTokenPrice();
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
		case Token.eth:
			price.eth = value;
			break;
		case Token.btc:
			price.btc = value;
			break;
		case Token.matic:
			price.matic = value;
			break;
		case Token.ada:
			price.ada = value;
			break;
		case Token.crv:
			price.crv = value;
			break;
		case Token.avax:
			price.avax = value;
			break;
		case Token.doge:
			price.doge = value;
			break;
		default:
			// msg log
			break;
	}
	price.save();
}
