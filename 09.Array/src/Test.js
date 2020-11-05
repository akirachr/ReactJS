import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

class Test extends Component {
  constructor(props) {
    super(props);
      this.state = {scores: [], size: 0, startIndex: 0, endIndex: 3, totalPageSize: 1};
      this.state.scores.push({ID: 1, Name: 'Taro', createdDate: new Date()});
      this.state.scores.push({ID: 2, Name: 'Jiro', createdDate: new Date()});
      this.state.scores.push({ID: 3, Name: 'Hanako', createdDate: new Date()});
      this.state.scores.push({ID: 4, Name: 'Mike', createdDate: new Date()});
      this.state.scores.push({ID: 5, Name: 'Mary', createdDate: new Date()});
      this.state.scores.push({ID: 6, Name: 'Mary', createdDate: new Date()});
      this.state.scores.push({ID: 7, Name: 'Mary', createdDate: new Date()});

      this.state.size = this.state.scores.length;
      this.state.totalPageSize = Math.ceil(this.state.size / 3);
  }

  componentDidMount() {
  }

  pagingRange(i) {
    if( i + 1 < this.state.totalPageSize ) {
      this.setState({startIndex: i * 3, endIndex: i * 3 + 3});
    } else {
      this.setState({startIndex: i * 3, endIndex: this.state.size});
    }
  }
  render() {
    const PagingButtons = () => {
      let content = [];
      for(let i = 0; i < this.state.totalPageSize; i++ ) {
        content.push(<button onClick={() => this.pagingRange(i) }>{i+1}</button>);
      }
      return content;
    };
    return (
      <div>
      <PagingButtons/>
      <ScoreList scores={this.state.scores.slice(this.state.startIndex, this.state.endIndex)} />
      </div>
    )
  }
}

const ScoreList = (props) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell><TableCell>Name</TableCell><TableCell>Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.scores.map((score) => <ScoreListItem key={score.ID} score={score} />)}
    </TableBody>
  </Table>
)
ScoreList.propTypes = {
  scores: PropTypes.array
}

const ScoreListItem = (props) => {
  const dateHHMMSS = (d) => d.toTimeString()
  return (
    <TableRow>
      <TableCell>{props.score.ID}</TableCell>
      <TableCell>{props.score.Name}</TableCell>
      <TableCell>{dateHHMMSS(props.score.createdDate)}</TableCell>
    </TableRow>
  )
}
ScoreListItem.propTypes = {
  score: PropTypes.object
}

export default Test;
