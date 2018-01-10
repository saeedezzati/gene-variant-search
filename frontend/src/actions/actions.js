//Actions
import * as actionType from '../actionTypes/actionTypes';

// APP Actions
export const setDeg = (data) => {
  return {
    type: actionType.SET_DEGREE,
    data
  }
}
export const setScale = (data) => {
    return {
      type: actionType.SET_SCALE,
      data
    }
  }
export const setOpacity = (data) => {
  return {
    type: actionType.SET_OPACITY,
    data
  }
}
export const setSearchBoxWidth = (data) => {
  return {
    type: actionType.SET_SEARCH_BOX_WIDTH,
    data
    }
}

export const setSearchValue = (data) => {
    return {
      type: actionType.SET_SEARCH_VALUE,
      data
    }
}

export const setBorderRadius = (data) => {
    return {
      type: actionType.SET_BORDER_RADIUS,
      data
    }
}

export const setTopDistance = (data) => {
    return {
      type: actionType.SET_TOP_DISTANCE,
      data
    }
}
export const resetGeneList = () => {
    return {
      type: actionType.RESET_GENE_LIST,
    }
}
export const receiveGeneList = (data) => {
    return {
      type: actionType.RECEIVE_GENE_LIST,
      data
    }
}
export const resetVariantList = () => {
    return {
      type: actionType.RESET_VARIANT_LIST,
      
    }
}
export const setExpanded = (data) => {
    return {
      type: actionType.SET_EXPANDED,
      data
    }
}
export const receiveVariantList = (data) => {
    data.results.forEach(e => e.expanded=false)
    return {
      type: actionType.RECEIVE_VARIANT_LIST,
      data
    }
}