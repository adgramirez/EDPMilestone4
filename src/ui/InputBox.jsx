import PropTypes from 'prop-types';

function InputBox({label, placeholder, id, className}) {
    return(
        <>
            <div className='flex-column'>
                {label && <h3 className='InputLabel'>{label}</h3>}
                <input placeholder={placeholder} id={id} className={`InputBox ${className}`}></input>
            </div>
            
        </>
    )
}

InputBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default InputBox