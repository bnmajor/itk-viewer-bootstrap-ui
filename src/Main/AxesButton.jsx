import React, { useEffect, useRef } from 'react'
import { useActor } from '@xstate/react'
import { Icon, Tooltip } from '@material-ui/core'
import { ToggleButton } from '@material-ui/lab'
import { axesIconDataUri } from 'itk-viewer-icons'
import '../style.css'

function AxesButton(props) {
  const { service } = props
  const axesButton = useRef(null)
  const [ state, send ] = useActor(service)

  useEffect(() => {
    state.context.main.axesButtonLabel = axesButton.current
  }, [])

  return(
    <label ref={ axesButton } data-tooltip-right data-tooltip='Axes'>
      <ToggleButton
        size='small'
        className='toggleButton'
        value='axesVisible'
        selected={ state.context.main.axesEnabled }
        onChange={() => { send('TOGGLE_AXES') }}
      >
        <Icon>
          <img src={ axesIconDataUri }/>
        </Icon>
      </ToggleButton>
    </label>
  )
}

export default AxesButton
