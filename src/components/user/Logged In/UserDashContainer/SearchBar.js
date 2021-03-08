import React from 'react';
// import Nav from 'react-bootstrap/Nav'
// import SearchInput, {createFilter} from 'react-search-input'




class SearchBar extends React.Component {

 handleSubmit
        render() {
            return (
                <div style={{marginTop:'10%'}}>
                    <form>
                    <input placeholder='Enter city or zip code here...' type="search" style={{fontSize: '25px',width: '70%', height: '50px', borderRadius: 25, marginLeft: '15%', textAlign: 'center'}}  onChange={this.searchUpdated}></input>
                    </form>
                </div>
            );
        }
    }
export default SearchBar


// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']

// constructor (props) {
//     super(props)
//     this.state = {
//       searchTerm: ''
//     }
//     this.searchUpdated = this.searchUpdated.bind(this)
//   }

//   render () {
//     const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

//     return (
//       <div>
//         <SearchInput className="search-input" onChange={this.searchUpdated} />
//         {filteredEmails.map(email => {
//           return (
//             <div className="mail" key={email.id}>
//               <div className="from">{email.user.name}</div>
//               <div className="subject">{email.subject}</div>
//             </div>