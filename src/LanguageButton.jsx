import PropTypes from 'prop-types'


const LanguageButton = (props) => {

    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }

  return (
    <button className="px-3 rounded-md py-1" style={styles}>{props.name}</button>
  )
}


LanguageButton.propTypes = {
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
}

export default LanguageButton