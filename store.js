import { useMemo } from 'react'
import { createStore } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let store

const initialState = {
  dough: '',
  flavors: [],
  points: 10,
  size: '',
  step: 0,
}

function reducer(state, { type, ...payload }) {
  if (type === 'ADD_FLAVOR') {
    return { ...state, flavors: [...state.flavors, payload.flavor] }
  }
  if (type === 'REMOVE_FLAVOR') {
    return { ...state, flavors: state.flavors.filter((i) => i !== payload.flavor) }
  }
  if (type === 'BUY_DAILYPIZZA') {
    return { ...state, ...payload.dailyPizza, points: state.points + payload.dailyPizza.points }
  }

  return { ...state, ...payload }
}

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['points'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

function initStore(preloadedState = initialState) {
  return createStore(persistedReducer, preloadedState)
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])

  return store
}
