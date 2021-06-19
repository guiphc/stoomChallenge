import { useMemo } from 'react'
import { createStore } from 'redux'

let store

const initialState = {
  step: 0,
  points: 10,
  dought: '',
  size: '',
  flavors: [],
}

function reducer(state, { type, ...payload }) {
  if (type === 'ADD_FLAVOR') {
    return { ...state, flavors: [...state.flavors, payload.flavor] }
  }
  if (type === 'REMOVE_FLAVOR') {
    return { ...state, flavors: state.flavors.filter((i) => i !== payload.flavor) }
  }
  return { ...state, ...payload }
}

function initStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState)
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
