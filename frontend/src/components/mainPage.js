// Components
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Motion, spring } from 'react-motion';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Comment from 'material-ui-icons/Comment';
import Link from 'material-ui-icons/Link';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu,{ MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';


import teal from 'material-ui/colors/teal';
import grey from 'material-ui/colors/grey';


const styles = theme => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    background: {
        height: 1000,
        width: 1000,
        backgroundImage: 'url(../../InvitaeLogo.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    searchBox:{
        position: 'absolute',
        zIndex: 10,
    },
    
    icon: {
        border: 'solid 1px black',
        borderRadius: 20,
        width: 40,
        height: 40,
        padding: 0,
        top: 0
    },
    searchField: {
        width: 0,
        margin: 0,
    },
    
    input:{
        height: 40,
        padding: '0px 0px 0px 0',
    },
    formControl:{
        '&:after': {
            margin: '0px 0px 8px 0',
        },
        '&:before': {
            margin: '0px 0px 8px 0',
        }
    },
    container: {
        // flexGrow: 1,
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        overflow: 'auto',
        maxHeight: 210,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
        // background: teal[100],
        borderBottom: '1px solid '+ grey[300]
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    textField: {
        width: '100%',
    },
    cards:{
        width: '80%',
        position: 'absolute', 
        top: 70,
    },
    card:{
        minHeight: 275,
        backgroundColor: teal[100],
    },
    cardItem:{
        padding: 10,
    },
    cardsContainer:{
        justifyContent: 'flex-start'
    },
    colTitle:{
        fontWeight: 500,
        fontSize: 13,
    },
    colBody:{
        fontWeight: 400,
        fontSize: 11,
    },

    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      flexGrow: {
        flex: '1 1 auto',
      },
      linkDecoration: {
        textDecoration: 'none',        
    },
});



  
function renderInput(inputProps){
    const { classes, autoFocus, value, ref, style, ...other } = inputProps;

    return (
        <TextField
            autoFocus={autoFocus}
            className={classes.searchField}
            value={value}
            inputRef={ref}
            style={{width: style.width}}
            InputProps={{
                classes: {
                    input: classes.input,
                    formControl: classes.formControl,
                },
                ...other,
            }}
        />
    );
}

function getSuggestionValue(suggestion) {
    return suggestion.gene;
}
function renderSuggestion(suggestion, { query, isHighlighted }){
    const matches = match(suggestion.gene, query);
    const parts = parse(suggestion.gene, matches);

    return (
        <MenuItem selected={isHighlighted}  component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight 
                    ?   <span key={String(index)} style={{ fontWeight: 300 }}>
                            {part.text}
                        </span>
                     
                    :   <strong key={String(index)} style={{ fontWeight: 500 }}>
                            {part.text}
                        </strong>
                    
                })}
            </div>
        </MenuItem>
    );
}
function renderSuggestionsContainer(options){
    const { containerProps, children } = options;
  
    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}


class MainPage extends Component {
    
    toggleSearchBox = (input) => {		    
        const { deg, setDeg, scale, setScale, opacity, setOpacity, searchBoxWidth, setSearchBoxWidth, borderRadius, setBorderRadius, topDistance, setTopDistance, resetGeneList,resetVariantList, setSearchValue} = this.props;
        var d = deg
        var s = scale
        var o = opacity
        var w = searchBoxWidth
        var b = borderRadius
        var t = topDistance 
        
        resetGeneList()        
        resetVariantList()
        setSearchValue('')

        if(s<1){ //OPEN
            var intervalID = setInterval(() => {
                s<1    ? s=s+0.05  : clearInterval(intervalID)
                d<200  ? d=d+18    : d=200
                o>0.1  ? o=o-0.05  : o=0.1
                w<300  ? w=w+15    : w=300
                b>5  ? b=b-1    : b=5
                setDeg(d)
                setScale(s)
                setOpacity(o)
                setSearchBoxWidth(w)
                setBorderRadius(b)
            }, 30)
        }else{ // CLOSE
            var intervalID = setInterval(() => {
                s>=0  ? s=s-0.05  : clearInterval(intervalID)
                d>=0  ? d=d-18    : d=0
                o<=1  ? o=o+0.1  : o=1
                w>=10 ? w=w-15    : w=0
                b<=20 ? b=b+1     : b=20
                t<0  ? t=t+22.5   : t=0
                setDeg(d)
                setScale(s)
                setOpacity(o)
                setSearchBoxWidth(w)
                setBorderRadius(b)
                setTopDistance(t)
            }, 30)

        }
        
    }
    
    searchValueChanged = (e, {newValue, method}) => {
        const { topDistance, setTopDistance, setSearchValue, geneList, resetGeneList, resetVariantList, ApiVariants,  dispatch} = this.props;
        
        setSearchValue(newValue.toUpperCase())
        
        // resetVariantList() // Only pull data when a gene is selected
        ApiVariants.fetchVariants(newValue.toUpperCase().replace(/\s/g,''), dispatch) // pull data even when gene is highlighted in the suggestion list
        var t = topDistance 
        if(newValue.length>0 && t>-1){     
            var intervalID = setInterval(() => {
                t>-450  ? t=t-22.5   : clearInterval(intervalID)
                setTopDistance(t)
            }, 20)
        }else if(newValue.length==0 && t<-449){
            var intervalID = setInterval(() => {
                t<0  ? t=t+22.5   : clearInterval(intervalID)
                setTopDistance(t)
            }, 20)
        }
        if(method == 'type'){
            if(newValue.length>1){
                ApiVariants.fetchGenes(newValue.toUpperCase(), dispatch)
            }else{
                resetGeneList()
                resetVariantList()       
            }
        }
    }
    textFieldClicked = (e) => {
        const {geneList, searchValue, resetGeneList} = this.props;
        resetGeneList(geneList.results.filter(result => result.gene.startsWith(searchValue)))        
        e.stopPropagation()
    }
    
    handleKeyDown = (e) => {
        const { searchValue, ApiVariants, dispatch} = this.props;
        if (e.keyCode == 13) {
            ApiVariants.fetchVariants(searchValue.toUpperCase().replace(/\s/g,''), dispatch)
            
            return false;
        }
    }
    onSuggestionSelected = (e, {suggestion, suggestionValue,}) => {
        const { setSearchValue, resetGeneList, geneList, ApiVariants, dispatch} = this.props;
        setSearchValue(suggestionValue.toUpperCase().replace(/\s/g,''))
        // resetGeneList()
        resetGeneList(geneList.results.filter(result => result.gene.startsWith(suggestionValue)))
        ApiVariants.fetchVariants(suggestionValue.toUpperCase().replace(/\s/g,''), dispatch)
        e.stopPropagation()
    }
    handleSuggestionsFetchRequested = ({ value }) => {
        
        const { geneList, resetVariantList} = this.props;
        resetVariantList()
        return geneList.results.filter(result => result.gene.startsWith(value))
    }
        
    handleSuggestionsClearRequested = () => {
        const {geneList, searchValue, resetGeneList} = this.props;
        // resetGeneList(geneList.results.filter(result => result.gene.startsWith(searchValue)))        
    };
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    toTitleCase = (str) => {
        str.replace(/\_/g, ' ');
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    render(){
        const { classes, deg, scale, opacity, searchBoxWidth, borderRadius, topDistance, searchValue, geneList, resetGeneList, setExpanded,  variantList} = this.props;
        // noWobble: {stiffness: 170, damping: 26}, // the default, if nothing provided
        // gentle: {stiffness: 120, damping: 14},
        // wobbly: {stiffness: 180, damping: 12},
        // stiff: {stiffness: 210, damping: 20},
        var vList = JSON.parse(JSON.stringify(variantList))
        var springConfig= { stiffness: 180, damping: 12 }
        return (
            <Grid container className={classes.root}>
            
                <Motion defaultStyle={{ rotate: 0, scale: 0.0, opacity: 1  }} style={{ rotate: spring(deg), scale: spring(scale, springConfig), opacity: spring(opacity, springConfig) }}>
                    {(style) =>    
                        <div className={classes.background} style={{ WebkitTransform: `rotate(${style.rotate}deg)  scale( ${style.scale}, ${style.scale} )`, opacity: style.opacity}}>
                        </div> 
                    }
                </Motion>
                <Grid item  xs={12} className={classes.searchBox}>
                    <Motion defaultStyle={{ width: 0, borderRadius: 20, top: 0  }} style={{ width: spring(searchBoxWidth, springConfig), borderRadius: spring(borderRadius, springConfig), top: spring(topDistance, springConfig) }}>
                        {(style) => 
                            <div>
                                <IconButton className={classes.icon} style={{width: style.width + 40, borderRadius: style.borderRadius, top: style.top}} onClick={() => this.toggleSearchBox()}>
                                    <SearchIcon />
                                    
                                    <Autosuggest
                                        theme={{
                                            container: classes.container,
                                            suggestionsContainerOpen: classes.suggestionsContainerOpen,
                                            suggestionsList: classes.suggestionsList,
                                            suggestion: classes.suggestion,
                                        }} 
                                        renderInputComponent={ renderInput }
                                        suggestions={geneList.results}
                                        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                                        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                                        onSuggestionSelected={this.onSuggestionSelected}
                                        renderSuggestionsContainer={renderSuggestionsContainer}
                                        getSuggestionValue={getSuggestionValue}
                                        renderSuggestion={renderSuggestion}
                                        // highlightFirstSuggestion={true}
                                        inputProps={{
                                            style: style,
                                            autoFocus: true,
                                            classes,
                                            value: searchValue.toUpperCase(),
                                            onChange: this.searchValueChanged,
                                            onClick: this.textFieldClicked,
                                            onKeyDown: this.handleKeyDown,

                                        }}
                                    />
                                </IconButton>
                                
                                
                            </div>
                        }
                    </Motion>
                </Grid>
                {searchValue.length>1 &&
                    <Grid item  xs={12} className={classes.cards}>
                        <Grid container spacing={16} className={classes.cardsContainer}>

                            {vList.results.map((result, index) =>  
                                                
                                <Grid item key={index} xs={3} className={classes.cardItem}>
                                    <Card  className={classes.card}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={8}>
                                                    <Typography type="headline" component="h2">
                                                        {result.gene}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} >
                                                    <div style={{float:'right'}}>
                                                        {result['url'].length>0 ? <a href={result['url']} style={{'color':'black'}}><Link /></a> : ''}
                                                        {result['submitter_comment'].length>0 ? <Comment /> : ''}
                                                        
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            
                                            {Object.keys(result).map((key,j) => 
                                                {if(j<3){
                                                    return(
                                                        <div key={j}>
                                                            <Typography className={classes.colTitle}>
                                                                <br />{this.toTitleCase(key)}
                                                            </Typography>
                                                            <Typography className={classes.colBody}>
                                                                {result[key] ? result[key].split(',').map((s,i) => <span key={i}>{s}<br/></span>)  : <span>-</span>}
                                                            </Typography>
                                                        </div>
                                                    )}
                                                }
                                            )}
                                            
                                            
                                        
                                        </CardContent>
                                        <CardActions>
                                            <div className={classes.flexGrow} />
                                            <IconButton
                                                className={classes.expand} 
                                                style= {result.expanded ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                                onClick={() => { vList.results[index].expanded=!result.expanded; setExpanded(vList);}}
                                                aria-expanded={result.expanded}
                                                aria-label="Show more"
                                                >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={result.expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                {Object.keys(result).map((key,j) => 
                                                    {if(j>=3){
                                                        return(
                                                            <div key={j}>
                                                                <Typography className={classes.colTitle}>
                                                                    <br />{key != 'expanded' ? this.toTitleCase(key) : ''}
                                                                </Typography>
                                                                <Typography className={classes.colBody}>
                                                                    {key != 'expanded' ? (result[key] ? result[key].split(',').map((s,i) => <span key={i}>{s}<br/></span>)  : <span>-</span>) : ''}
                                                                </Typography>
                                                            </div>
                                                        )}
                                                    }
                                                )}
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                }
            </Grid>
        )
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
    deg: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
    searchBoxWidth: PropTypes.number.isRequired,
    borderRadius: PropTypes.number.isRequired,
    topDistance: PropTypes.number.isRequired,
    searchValue: PropTypes.string.isRequired,
    geneList: PropTypes.object.isRequired,
    variantList: PropTypes.object.isRequired,
    setDeg: PropTypes.func.isRequired,
    setScale: PropTypes.func.isRequired,
    setOpacity: PropTypes.func.isRequired,
    setSearchBoxWidth: PropTypes.func.isRequired,
    setBorderRadius: PropTypes.func.isRequired,
    setTopDistance: PropTypes.func.isRequired,
    resetGeneList: PropTypes.func.isRequired,
    resetVariantList: PropTypes.func.isRequired,
    setExpanded: PropTypes.func.isRequired,
    setSearchValue: PropTypes.func.isRequired,
    ApiVariants: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,

}

export default withStyles(styles)(MainPage);
