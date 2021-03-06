const icons = ['print', 'time', 'fire', 'tags', 'pushpin', 'email', 'console', 'scale', 'piggy-bank', 'phone-aly', 'link', 'paperclip']
const colors = ['danger', 'warning', 'info', 'success']
const randomIcon = () => icons[Math.floor(Math.random() * icons.length)]
const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

function feature(name, rank = 1, defaultValue = '') {
  return (value) => ({
    name, value, rank, defaultValue,
  })
}


class Plan {

  static Features = {
    numUsers: feature('Number of Users', 1, '1'),
    territory: feature('Exclusivity in Territory', 2, ''),
    calculations: feature('Number of Calculations', 3, '5/month'),
    tools: feature('Tools Available', 4, 'Standard (no Amazon Alexa)'),
    cancelation: feature('Cancelation policy', 5, 'Yes'),
    emailSupport: feature('Support - Email', 1, 'Yes'),
    myCarriers: feature('"My Carriers" in Profile', 1, '1'),
    phoneSupport: feature('Support - Phone', 1),
    alexa: feature('Alexa for Business Access', 1),
    expert: feature('Expert on Retainer', 1),
    paymentPlan: feature('Payment Plan Available', 1),
    customReports: feature('Custom Reporting', 1),
    humanCalculators: feature('We Run the Calculations', 1),
    coBrandedReports: feature('Co-Branded Reports', 1),
    coBrandedAds: feature('Co-Branded Advertising', 1),
  }

  constructor(id, name, price, icon, color, popularity = '') {
    this.id = id
    this.name = name
    this.price = price
    // Set the default features and values in this.features
    this.details = Reflect.ownKeys(Plan.Features)
      .map(key => Plan.Features[key]())
    this.featuredItems = []
    this.details = []
    this.className = popularity
    this.color = color || randomColor()
    this.icon = icon || randomIcon()
  }

  addFeaturedItems(...featuredItems) {
    this.featuredItems = this.featuredItems.concat(
      featuredItems.map(feat => {
        return typeof feat === 'string' ? {
          text: feat,
          icon: randomIcon(),
        } : feat
      })
    )
    return this
  }

  addDetails(...details) {
    details.forEach(feat => {
      let idx = this.details.findIndex(f => f.name === feat.name)
      if (idx === -1)
        idx = this.details.length
      // Mutative to this.features, but not to the items inside
      this.details[idx] = {
        ...this.details[idx],
        icon: icons[Math.floor(Math.random() * icons.length)],
        ...feat,
      }
    })

    return this
  }

}


export default Plan
