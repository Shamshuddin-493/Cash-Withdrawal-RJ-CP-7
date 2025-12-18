// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withDrawl} = props
  const {value} = denominationDetails

  const onWithdrawl = () => {
    withDrawl(value)
  }

  return (
    <li>
      <button type="button" onClick={onWithdrawl}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
