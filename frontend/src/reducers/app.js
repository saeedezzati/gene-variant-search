// Reducer
import * as actionType from '../actionTypes/actionTypes';
import {REHYDRATE} from 'redux-persist/src/constants'

const app = (state = {
  deg: 0,
  scale: 0,
  opacity: 1,
  searchBoxWidth: 0,
  borderRadius: 20,
  topDistance: 0,                   
  searchValue: '',
  geneList: {count: 0, results:[]},
  variantList: {count: 0, results:[]},
}, action) => {
  switch (action.type) {
    case actionType.SET_DEGREE:
      return {
        ...state,
        deg: action.data.deg,
      }
    case actionType.SET_SCALE:
      return {
        ...state,
        scale: action.data.scale,
      }
    case actionType.SET_OPACITY:
      return {
        ...state,
        opacity: action.data.opacity,
      }
    case actionType.SET_SEARCH_BOX_WIDTH:
      return {
        ...state,
        searchBoxWidth: action.data.searchBoxWidth,
      }
    case actionType.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.data.borderRadius,
      }
    case actionType.SET_TOP_DISTANCE:
      return {
        ...state,
        topDistance: action.data.topDistance,
      }    
    case actionType.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.data.searchValue,
      }
    case actionType.RESET_GENE_LIST:
      return {
        ...state,
        geneList: {
          count: 0,
          results: [],
        }
      }
    case actionType.RECEIVE_GENE_LIST:
      return {
        ...state,
        geneList: action.data,
      }
    case actionType.RESET_VARIANT_LIST:
      return {
        ...state,
        variantList: {
          count: 0,
          results: [],
        }
      }
    case actionType.RECEIVE_VARIANT_LIST:
      return {
        ...state,
        variantList: action.data,
      }
    case actionType.SET_EXPANDED:
      return {
        ...state,
        variantList: action.data.variantList,
        
      }
    case REHYDRATE:
      return {
        ...state,
        deg: 0,
        scale: 0,
        opacity: 1,
        searchBoxWidth: 0,
        borderRadius: 20, 
        topDistance: 0,       
        searchValue: '',
        geneList: {count: 0,results:[]},
        variantList: {count: 0, results:[]},

      }
      
    default:
      return state;
  }
}

export default app;
