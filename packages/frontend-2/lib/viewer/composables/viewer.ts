import {
  Viewer,
  DefaultViewerParams,
  SelectionEvent,
  ViewerEvent
} from '@speckle/viewer'

type GlobalViewerData = {
  viewer: Viewer
  container: HTMLElement
}

let globalViewerData: GlobalViewerData | null = null

export async function getOrInitViewer(): Promise<GlobalViewerData> {
  if (globalViewerData) return globalViewerData

  const container = document.createElement('div')
  container.id = 'renderer'
  container.className = 'viewer-container'

  const viewer = new Viewer(container, DefaultViewerParams)

  await viewer.init()
  globalViewerData = {
    viewer,
    container
  }
  viewer.on(ViewerEvent.ObjectDoubleClicked, (args) =>
    handleViewerDoubleClick(args as SelectionEvent)
  )

  return globalViewerData
}

export function handleViewerDoubleClick(selectionInfo: SelectionEvent) {
  if (!selectionInfo) {
    globalViewerData?.viewer.zoom()
    return
  }

  globalViewerData?.viewer.zoom([selectionInfo.hits[0].object.id as string])
}
