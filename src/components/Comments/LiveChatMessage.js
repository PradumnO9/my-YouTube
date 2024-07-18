import React from 'react'

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center w-full'>
      <img
          className="w-8 h-8 mt-2 mx-2"
          alt="channel-logo"
          src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveChatMessage
