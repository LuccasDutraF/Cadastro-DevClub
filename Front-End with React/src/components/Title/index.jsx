import PropTypes from 'prop-types'
import {Title} from './styles'

function DefaultTitle({children}){
    return(
        <Title>{children}</Title>
    )

}

DefaultTitle.propTypes ={
    children: PropTypes.node.isRequired
}

export default DefaultTitle