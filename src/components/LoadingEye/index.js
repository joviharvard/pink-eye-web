import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/animations/pinkLoadingEye.json'

const LoadingEye = ({
  width,
  height,
  isStopped,
  isLoop,
  toggleLoading,
  isEvent,
}) => {
  const defaultOptions = {
    loop: isLoop,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Lottie
      options={defaultOptions}
      isStopped={isStopped}
      isClickToPauseDisabled
      width={width}
      height={height}
      eventListeners={
        isEvent
          ? [
              {
                eventName: 'loopComplete',
                callback: () => toggleLoading(false),
              },
            ]
          : []
      }
    />
  )
}

export default LoadingEye
