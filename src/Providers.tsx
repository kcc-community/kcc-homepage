import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { ConfigProvider } from 'antd'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getLibrary } from './components/Web3ReactManager'
import { NetworkContextName } from './constants/wallet'
import store from './state'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const Providers: FunctionComponent = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <ConfigProvider>
          <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
          </Provider>
        </ConfigProvider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
