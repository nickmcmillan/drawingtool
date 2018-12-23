// @flow
import importJSON from '../serialize/importJSON'

export default (canvas, shouldAutoImport: boolean, iconType) => {
  canvas.includeDefaultValues = false // this reducees the JSON output size
  const serializedJSON = canvas.toDatalessObject([
    // need to specify what options we want fabric to serialize
    '_controlsVisibility',
    'objectCaching',
    'selectable',
    'hasBorders',
    'hasControls',
    'defaultIcon',
    'alternateIcon',
    'id',
    'name',
    'color',
  ])

  serializedJSON.iconType = iconType // need to add extra data into the export json which specifies iconType
  console.log(serializedJSON) // eslint-disable-line

  // TODO: eventually remove this.
  if (shouldAutoImport) {
    setTimeout(() => {
      importJSON(serializedJSON, canvas, false)
    }, 100)
  }

  return serializedJSON
}
