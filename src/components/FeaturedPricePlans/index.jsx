import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeaturedPlan from '../FeaturedPlan'
//import './styles.css'


class FeaturedPricingPlans extends Component {

  static propTypes = {
    buttonText: PropTypes.string,
    colSize: PropTypes.number,
    currency: PropTypes.string,
    onSelection: PropTypes.func.isRequired,
    plans: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string.isRequired,
        price: PropTypes.node,
        id: PropTypes.string.isRequired,
        customBtnText: PropTypes.string,
        featuredItems: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node.isRequired,
            icon: PropTypes.string,
          })
        ),
        details: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.node.isRequired,
            icon: PropTypes.string,
          })
        ),
        available: PropTypes.bool,
        trials: PropTypes.shape({
          top: PropTypes.object,
          bottom: PropTypes.object,
        }),
      })
    ).isRequired,
  }

  static defaultProps = {
    plans: [],
    buttonText: 'ORDER',
    currency: '$',
  }

  constructor(props) {
    super(props)
    const plans = props.plans || []
    this.state = {
      colSize: Math.max(2, Math.floor(12 / plans.length)),
      ...props,
    }
  }

  render() {
    const { currency, plans, colSize, buttonText, onSelection } = this.state
    const { renderPlan } = FeaturedPricingPlans

    // wrapperClassName :: String
    // (Sets the width of each plan column)
    const wrapperClassName = `col-md-${colSize} pr-0 pl-0`

    return <section className="FeaturedPricingPlans row pb-3">

      {plans && plans.map(plan => {
        return (
          <main key={plan.id} className={wrapperClassName}>
            <FeaturedPlan
              units={currency} 
              plan={plan}
              buttonText={buttonText}
              onSelection={onSelection}
            />
          </main>
        )
      })}

    </section>
  }
}

export default FeaturedPricingPlans
