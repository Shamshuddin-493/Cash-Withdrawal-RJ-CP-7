// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  withDrawl = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div>
        <div>
          <div>
            <p>S</p>
            <p>Sarah Williams</p>
          </div>
          <div>
            <p>Your Balance</p>
            <p>{cash}</p>
          </div>
          <p>In Rupees</p>
        </div>
        <h1>Withdraw</h1>
        <p>CHOOSE SUM IN RUPEES</p>
        <ul>
          {denominationsList.map(eachDenomination => (
            <DenominationItem
              denominationDetails={eachDenomination}
              key={eachDenomination.id}
              withDrawl={this.withDrawl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
