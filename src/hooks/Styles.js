import React from 'react'
import {useMediaQuery, useTheme} from '@material-ui/core'

const isMobileHOC = (Component) => {
    return(props) => {
        const theme = useTheme()
        const isMobile = useMediaQuery(theme.breakpoints.down('mobile'))

        return <Component isMobile={isMobile} {...props} />
    }
}

export default isMobileHOC