import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'
import { getThemeCache } from '../utils/theme'

import application from './application/reducer'
import wallet from './wallet/reducer'
import bridge from './bridge/reducer'

type ModuleTypes = 'application' | 'wallet' | 'bridge'

type MergedState = {
  [key in ModuleTypes]: {
    [key: string]: any
  }
}
const PERSISTED_KEYS: string[] = ['application']
const loadedState = load({ states: PERSISTED_KEYS }) as any

if (loadedState.application) {
  loadedState.application = { ...loadedState.application, darkMode: getThemeCache() }
}

const store = configureStore({
  reducer: {
    application,
    wallet,
    bridge,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS, debounce: 500 })],
  preloadedState: loadedState,
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
