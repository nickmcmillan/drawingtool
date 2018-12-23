// This is where we customise the text that appears in the Editor popup.
export default variation => {
  switch (variation) {
    // Shirts
    case 'shirt-attack':
      return 'Aanvaller'
    case 'shirt-defend':
      return 'Verdediger'
    case 'shirt-trainer':
      return 'Trainer / Coach'

    // Goals
    case 'goal-01':
      return 'Senioren doel'
    case 'goal-02':
      return 'Pupillen doel'
    case 'goal-03':
      return 'Mini doel'

    // Lines
    case 'line-dotted':
      return 'Lopen zonder bal'
    case 'line-solid':
      return 'Pass'
    case 'line-squiggley':
      return 'Dribbelen met bal'
    case 'line-shot':
      return 'Schot'

    // Cones
    case 'cone-white':
      return 'Hoed (wit)'
    case 'cone-yellow':
      return 'Hoed (geel)'
    case 'cone-orange':
      return 'Hoed (oranje)'
    case 'cone-purple':
      return 'Hoed (purper)'

    // Items
    case 'ball':
      return 'Voetbal'
    case 'witches-hat':
      return 'Pion'

    default:
      return ''
  }
}
