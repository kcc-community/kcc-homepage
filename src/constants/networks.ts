export const MAIN_NETWORKS = {
  0: {
    name: 'No Available Network',
    fullName: 'No Available Network',
    abbr: '',
    rpc: '',
    chain_id: 0,
    symbol: '0',
    browser: '',
    decimals: 0,
    logo: '',
    bridgeCoreAddress: '',
    standard: '',
  },
  1: {
    name: 'Ethereum',
    fullName: 'Ethereum Network',
    abbr: 'ETH',
    rpc: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    chain_id: 1,
    decimals: 18,
    symbol: 'ETH',
    browser: 'https://etherscan.io',
    logo: '/token/chain-1.png',
    bridgeCoreAddress: '0xe61dd9cA7364225aFBFB79e15AD33864424e6aE4',
    standard: 'ERC20',
    fee: 0.01,
  },
  321: {
    name: 'KCC-MAINNET',
    fullName: 'KCC Mainnet Network',
    abbr: 'KCC',
    rpc: 'https://rpc-mainnet.kcc.network',
    chain_id: 321,
    decimals: 18,
    symbol: 'KCS',
    browser: 'https://explorer.kcc.io',
    logo: '/token/chain-321.png',
    bridgeCoreAddress: '0xe61dd9cA7364225aFBFB79e15AD33864424e6aE4',
    standard: 'KRC20',
  },
  56: {
    name: 'BSC Mainnet',
    fullName: 'BSC Mainnet Network',
    abbr: 'BSC',
    rpc: 'https://bsc-dataseed1.ninicoin.io',
    chain_id: 56,
    decimals: 18,
    symbol: 'BNB',
    browser: 'https://bscscan.com',
    logo: '/token/chain-97.png',
    bridgeCoreAddress: '0x76D1E324757d7E6765df1EcFD6Ba6F20Ca04BB93',
    standard: 'BEP20',
  },
  137: {
    name: 'Polygon',
    fullName: 'Polygon Mainnet Network',
    abbr: 'Polygon',
    rpc: 'https://polygon-rpc.com',
    chain_id: 137,
    decimals: 18,
    symbol: 'MATIC',
    browser: 'https://polygonscan.com/',
    logo: '/token/chain-137.png',
    bridgeCoreAddress: '0xe61dd9cA7364225aFBFB79e15AD33864424e6aE4',
    standard: 'ERC20',
  },
  43114: {
    name: 'Avalanche Mainnet',
    fullName: 'Avalanche Mainnet Network',
    abbr: 'Avalanche',
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    chain_id: 43114,
    decimals: 18,
    symbol: 'AVAX',
    browser: 'https://snowtrace.io',
    logo: '/token/chain-43114.png',
    bridgeCoreAddress: '0xe61dd9cA7364225aFBFB79e15AD33864424e6aE4',
    standard: 'ERC20',
  },
  250: {
    name: 'Fantom Opera',
    fullName: 'Fantom Opera Network',
    abbr: 'Fantom',
    rpc: 'https://rpc.ftm.tools',
    chain_id: 250,
    decimals: 18,
    symbol: 'FTM',
    browser: 'https://ftmscan.com',
    logo: '/token/ftm.png',
    bridgeCoreAddress: '0xe61dd9cA7364225aFBFB79e15AD33864424e6aE4',
    standard: 'ERC20',
  },
}

export const TEST_NETWORKS = {
  0: {
    name: 'No Available Network',
    fullName: 'No Available Network',
    abbr: '',
    rpc: '',
    chain_id: 0,
    symbol: '0',
    browser: '',
    decimals: 0,
    logo: '',
    bridgeCoreAddress: '',
    standard: '',
  },
  4: {
    name: 'Rinkeby',
    abbr: 'Rinkeby',
    fullName: 'Rinkeby Network',
    rpc: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    chain_id: 4,
    decimals: 18,
    symbol: 'ETH',
    browser: 'https://rinkeby.etherscan.io',
    logo: '/token/chain-1.png',
    bridgeCoreAddress: '0xA976440272c709C69970A40cb9249BfAa4759A7A',
    standard: 'ERC20',
    fee: 0.01,
  },
  322: {
    name: 'KCC-TEST',
    fullName: 'KCC Test Network',
    abbr: 'KCC-TEST',
    rpc: 'https://rpc-testnet.kcc.network',
    chain_id: 322,
    decimals: 18,
    symbol: 'KCS',
    browser: 'https://scan-testnet.kcc.network',
    logo: '/token/chain-321.png',
    bridgeCoreAddress: '0xA976440272c709C69970A40cb9249BfAa4759A7A',
    standard: 'KRC20',
  },
  97: {
    name: 'BSC Testnet',
    fullName: 'BSC Testnet Network',
    abbr: 'BSC-TEST',
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    chain_id: 97,
    decimals: 18,
    symbol: 'BNB',
    browser: 'https://testnet.bscscan.com',
    logo: '/token/chain-97.png',
    bridgeCoreAddress: '0x0734ce7Df4aEa88ce7fA6AD88bd2EB8d933ee319',
    standard: 'BEP20',
  },
  43113: {
    name: 'Avalanche Testnet',
    fullName: 'Avalanche Testnet Network',
    abbr: 'Avalanche-TEST',
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    chain_id: 43113,
    decimals: 18,
    symbol: 'AVAX',
    browser: 'https://testnet.snowtrace.io',
    logo: '/token/chain-43113.png',
    bridgeCoreAddress: '0x0734ce7Df4aEa88ce7fA6AD88bd2EB8d933ee319',
    standard: 'ERC20',
  },
  80001: {
    name: 'Polygon Testnet',
    fullName: 'Polygon Testnet Network',
    abbr: 'Polygon-TEST',
    rpc: 'https://matic-mumbai.chainstacklabs.com',
    chain_id: 80001,
    decimals: 18,
    symbol: 'MATIC',
    browser: 'https://mumbai.polygonscan.com',
    logo: '/token/chain-137.png',
    bridgeCoreAddress: '0x5e1cB1f92861F321FC363e890706dd86a4d3Fa24',
    standard: 'ERC20',
  },
  4002: {
    name: 'Fantom Testnet',
    fullName: 'Fantom Testnet Network',
    abbr: 'Fantom-TEST',
    rpc: 'https://rpc.testnet.fantom.network',
    chain_id: 4002,
    decimals: 18,
    symbol: 'FTM',
    browser: 'https://testnet.ftmscan.com',
    logo: '/token/ftm.png',
    bridgeCoreAddress: '0x0734ce7Df4aEa88ce7fA6AD88bd2EB8d933ee319',
    standard: 'ERC20',
  },
}

export const networks = process.env.REACT_APP_NETWORK === 'main' ? MAIN_NETWORKS : TEST_NETWORKS

export const KCC_NETWORK_IDS = [322, 321]

export interface NetworkType {
  name: string
  rpc: string
  fullName: string
  chain_id: number
  symbol: string
  browser: string
  decimals: number
  logo: string
  bridgeCoreAddress: string
  standard: string
  fee?: number
  abbr: string
}

export interface AddEthereumChainParameter {
  chainId: string // A 0x-prefixed hexadecimal string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string // 2-6 characters long
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls?: string[]
  iconUrls?: string[] // Currently ignored.
}
