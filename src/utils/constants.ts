import {
    Num,
    Addr,
} from '../types/constants';
import {
    Bytes,
    BigDecimal,
} from '@graphprotocol/graph-ts';


// Numbers
export const DECIMALS = 7;
export const NO_POOL = -1;
export const NUM_POOLS = 7;
export const NUM: Num = {
    ZERO: BigDecimal.fromString('0'),
    ONE: BigDecimal.fromString('1'),
    MINUS_ONE: BigDecimal.fromString('-1'),
    THIRTY_PERCENT: BigDecimal.fromString('0.3'),
    SIX_DECIMAL:  BigDecimal.fromString('1000000'),
    EIGHT_DECIMAL : BigDecimal.fromString('100000000'),
}

// Addresses
export const ADDR: Addr = {
    ZERO: Bytes.fromHexString('0x0000000000000000000000000000000000000000'),
}

// Tokens
export enum Token {
	usdc,
	usdt,
	dai,
}