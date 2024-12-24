import PropTypes from 'prop-types'


const LanguageButton = (props) => {
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  }

  const isLanguageLost = props.index < props.wrongGuesses

  return (
    <div className='relative'>
      <button className={`px-3 rounded-[3px] py-1 ${isLanguageLost ? "lost": ""}`} style={styles}>{props.name}</button>
    </div>
  )
}


LanguageButton.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string.isRequired,
  wrongGuesses: PropTypes.number.isRequired,
}

export default LanguageButton