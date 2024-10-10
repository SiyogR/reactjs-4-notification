const Notification = props => {
  const {className, iconUrl, message} = props
  const containerClassName = `notification-container ${className}`

  return (
    <div className={containerClassName}>
      <img className='icon' src={iconUrl} />
      <p className='message'>{message}</p>
    </div>
  )
}

const element = (
  <div className='notifications-app-container'>
    <h1 className='title'>Notifications</h1>
    <div className='notifications-list-container'>
      <Notification
        className='primary-bg-color mt-5'
        iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Information Message'
      />
      <Notification
        className='success-bg-color mt-5'
        iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        message='Success Message'
      />
      <Notification
        className='warning-bg-color mb-2'
        iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        message='Warning Message'
      />
      <Notification
        className='danger-bg-color mb-2'
        iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        message='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
