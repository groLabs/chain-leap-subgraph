import {
    Price,
} from "../../generated/schema";
import { BigDecimal } from '@graphprotocol/graph-ts';
import {
	NUM,
	ADDR,
	Token,
} from '../utils/constants';


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

export const updatePrice = (value: BigDecimal, token: Token): void => {
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