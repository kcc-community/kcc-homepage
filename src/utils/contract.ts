import Web3 from 'web3'
import BRIDGE_ABI from '../constants/abi/Bridge.json'
import ERC20_ABI from '../constants/abi/ERC20.json'

export function getErc20Contract(contractAddress: string, library: any) {
  const Contract = new Web3(library.provider).eth.Contract
  return new Contract(ERC20_ABI.abi as any, contractAddress)
}

export function getBridgeContract(bridgeAddress: string, library: any) {
  const Contract = new Web3(library.provider).eth.Contract
  return new Contract(BRIDGE_ABI as any, bridgeAddress)
}
