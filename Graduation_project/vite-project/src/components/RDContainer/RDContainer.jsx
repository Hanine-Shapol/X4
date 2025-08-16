import './RDContainer.css'

const RDContainer = (props) => {
    return (
        <div className='RD_Container lm_whitespacing_x'>
            {props.children}
        </div>
    )
}

export default RDContainer
