import { connect } from 'react-redux';
import MainPage from '../components/mainPage';
import { setDeg, setScale, setOpacity, setSearchBoxWidth, setBorderRadius, setSearchValue, setTopDistance, resetGeneList, resetVariantList, setExpanded} from '../actions/actions'
import { ApiVariants } from './ApiVariants';


// const getIsLoggedIn = (state) => {
//   return (state.isLoggedIn == true)
// } 
const mapStateToProps = (state) => {
    return {
        deg: state.app.deg,
        scale: state.app.scale,
        opacity: state.app.opacity,
        searchBoxWidth: state.app.searchBoxWidth,
        borderRadius: state.app.borderRadius,
        topDistance: state.app.topDistance,
        searchValue: state.app.searchValue.toUpperCase(),
        geneList: state.app.geneList,
        variantList: state.app.variantList,
        
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setDeg: ( (deg) => {dispatch(setDeg({'deg':deg}))}),
        setScale: ( (scale) => {dispatch(setScale({'scale':scale}))}),
        setOpacity: ( (opacity) => {dispatch(setOpacity({'opacity':opacity}))}),
        setSearchBoxWidth: ( (searchBoxWidth) => {dispatch(setSearchBoxWidth({'searchBoxWidth':searchBoxWidth}))}),
        setBorderRadius: ( (borderRadius) => {dispatch(setBorderRadius({'borderRadius':borderRadius}))}),
        setTopDistance: ( (topDistance) => {dispatch(setTopDistance({'topDistance':topDistance}))}),
        resetGeneList: ( () => dispatch(resetGeneList())),
        resetVariantList: ( () => dispatch(resetVariantList())),
        setExpanded: ( (variantList) => dispatch(setExpanded({'variantList': variantList}))),        
        setSearchValue: ( (searchValue) => {dispatch(setSearchValue({'searchValue':searchValue}))}),
        ApiVariants: ApiVariants,
        dispatch: dispatch,

    }
}

const Main = (connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage))


export default Main;
