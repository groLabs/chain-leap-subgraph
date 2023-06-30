import {
    Bytes,
    BigDecimal,
} from '@graphprotocol/graph-ts';


export class Addr {
    public ZERO: Bytes;
}

export class Num {
    public ZERO: BigDecimal;
    public ONE: BigDecimal;
    public MINUS_ONE: BigDecimal;
    public THIRTY_PERCENT: BigDecimal;
    public PWRD_START_FACTOR: BigDecimal;
    public GVT_START_FACTOR: BigDecimal;
}

// @dev: should be aligned with enum <Token> in entities
export class Token {
    public UNKNOWN: string;
	public PWRD: string;
	public GVT: string;
	public GRO: string;
	public DAI: string;
	public USDC: string;
	public USDT: string;
    public THREE_CRV: string;
	public UNISWAP_GVT_GRO: string;
	public UNISWAP_GRO_USDC: string;
	public CURVE_PWRD3CRV: string;
	public BALANCER_GRO_WETH: string;
}

// @dev: should be aligned with enum <TxType> in entities
export class TxType {
    public CORE_DEPOSIT: string;
	public CORE_WITHDRAWAL: string;
	public STAKER_DEPOSIT: string;
	public STAKER_WITHDRAWAL: string;
	public TRANSFER_IN: string;
	public TRANSFER_OUT: string;
	public CLAIM: string;
	public MULTICLAIM: string;
	public VEST: string;
	public APPROVAL: string;
}

export class Contracts {
    public network: string;
    public chainlink_usdc_usd_address: string;
    public chainlink_usdc_usd_start_block: number;
}
