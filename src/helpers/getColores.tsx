import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {})
    
    let primary;
    let secundary;

    if (colors.platform === 'android') {
        primary = colors.dominant
        secundary = colors.average
      } else {
        primary = colors.primary
        secundary = colors.secondary
      }

    return(
        [primary, secundary]
    )
}