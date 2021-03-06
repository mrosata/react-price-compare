import React, { Component } from "react"
import { render } from "react-dom"
import {
  FeaturedPricingPlans, DetailedPricing,
} from "./index"

import Plan from "./utils/plan.class.js"

const standardPlan = new Plan("std1mo", "Standard", 99, null, null)
  .addFeaturedItems(
    { icon: 'person', text: 'Only 1 User' },
    'Single "My Carrier" carrier',
    { icon: 'calculator', text: 'Five Calculations/Month' },
    { icon: 'tools', text: 'Access Only to Standard Tools' }
  )
  .addDetails(
    Plan.Features.territory('None'),
    Plan.Features.numUsers(1),
    Plan.Features.myCarriers(1),
    Plan.Features.calculations('5/month')
  )


const proPlan = new Plan("pro1mo", "Pro", 499, null, null, "popular")
  .addFeaturedItems(
    { icon: 'person', text: 'Ten Users' },
    'Ten "My Carrier"',
    { icon: 'calculator', text: 'Unlimited Calculations/Month' },
    { icon: 'tool', text: 'Current and Future Tools' },
)
  .addDetails(
    Plan.Features.numUsers('10'),
    Plan.Features.calculations('Unlimited'),
    Plan.Features.tools('Current and Future'),
    Plan.Features.alexa('Yes'),
    Plan.Features.phoneSupport('Yes'),
    Plan.Features.expert('Hourly'),
)

const supremePlan = new Plan("spr1mo", "Supreme", 399, null, null)
  .addFeaturedItems(
    { icon: 'price', text: 'Exclusivity For Your Territory' },
    { icon: 'user', text: 'Unlimited Users' },
    { icon: 'pinpoin', text: 'Unlimited "My Carrier" Carrier' },
    'Expert on Retainer',
)
  .addDetails(
    Plan.Features.numUsers('10'),
    Plan.Features.calculations('Unlimited'),
    Plan.Features.tools('Current and Future'),
    Plan.Features.alexa('Yes'),
    Plan.Features.phoneSupport('Yes'),
    Plan.Features.expert('Unlimited'),
    Plan.Features.paymentPlan('Yes'),
    Plan.Features.customReports('Yes'),
    Plan.Features.humanCalculators('Yes'),
    Plan.Features.coBrandedReports('Yes'),
    Plan.Features.coBrandedAds('Yes')
  )

class AppDemo extends Component {
  render() {
    const plans = [standardPlan, proPlan, supremePlan];

    return (
      <section className="container">
        <FeaturedPricingPlans plans={plans} />
        <DetailedPricing features={Plan.Features} plans={plans} />
      </section>
    );
  }
}

render(<AppDemo />, document.getElementById("root"))
