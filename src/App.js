import React ,{ Component } from 'react'
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow'
import $, { event } from 'jquery'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';


const classes = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
class App extends Component {
  constructor(props){
    super(props)
    this.state={}
     console.log('constructor')

    // const movies=[
    //   {id:0, title:'Tom and Jerry',overview:'Tom and Jerry'},
    //   {id:2, title:'Tom and Jerry1',overview:'Tom and Jerry1'}
    // ]
    //  var movieRows =[]
    // movies.forEach((item)=> {
    //   console.log({item})
    //   const movieRow = <MovieRow movie_item={item} />
   
    //   movieRows.push(movieRow)
    // })
    // this.state = {rows: movieRows}
    this.performSearch('dc')
  }
  performSearch(searchTerm){
    
    //call from api -- npm i jquery
    const urlString ='http://api.themoviedb.org/3/search/movie?api_key=272cfe08a26ad15667ad4af8f184aeb2&query='+searchTerm;
    $.ajax({
      url:urlString,
     // async: false,
      success:(searchResults) => {
        const results = searchResults.results
        var movieRows =[]
        results.forEach((item)=>{
          const movieRow = <MovieRow movie_item={item} />
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error:(xhr,status,err) => {
        console.log('Filed to fetch data')
      }
    })
  }
  searchChange = (event) =>{
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  render(){
  return (
    <div className="App">
      <table className='titleBar'>
        <tbody>
          <tr>
            <td>
              <img width='50' src={logo} alt=''/>
            </td>
            <td >
              Movie Search
            </td>
          </tr>
        </tbody>
      </table>
      <Paper component="form" className={classes.root}>
     <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={this.searchChange.bind(this)}
      />
          
    </Paper>
    {this.state.rows}
    </div>
  );
}}

export default App;
