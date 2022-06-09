import React, { FunctionComponent } from 'react'
import { ConfigProvider } from 'antd'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import store from './state'
import { NetworkContextName, OppositeNetworkName } from './constants/wallet'
import { getLibrary } from './components/Web3ReactManager'
import { HashRouter, BrowserRouter } from 'react-router-dom'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const Web3ReactOppsiteProvider = createWeb3ReactRoot(OppositeNetworkName)

const Providers: FunctionComponent = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ReactOppsiteProvider getLibrary={getLibrary}>
          <ConfigProvider>
            <Provider store={store}>
              <BrowserRouter>{children}</BrowserRouter>
            </Provider>
          </ConfigProvider>
        </Web3ReactOppsiteProvider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
