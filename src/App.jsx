import React from 'react'
import Panel from './Panel'
import MainInterface from './Main/MainInterface'
import LayersInterface from './Layers/LayersInterface'
import ImagesInterface from './Images/ImagesInterface'
import WidgetsInterface from './Widgets/WidgetsInterface'
import PointSetInterface from './PointSetInterface'
import AppToolbar from './AppToolbar'
import PlaneSliders from './Main/PlaneSliders'

function App({ service }) {
  return (
    <>
      <div className="sidePanel">
        <div className="interactive-root">
          <AppToolbar service={service} />
          <Panel service={service}>
            <MainInterface />
            <LayersInterface />
            <WidgetsInterface />
            <ImagesInterface advancedInputs={false} />
            <PointSetInterface />
          </Panel>
        </div>
      </div>

      <div className="footer">
        <PlaneSliders service={service} />
      </div>
    </>
  )
}

export default App
