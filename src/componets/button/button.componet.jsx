import "./button.styles.scss"

const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: "google-sign-in",
    inverted: "inverted",
}


function Button1({children, buttonType, ...otherProps}){
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>{children}</button>
    )
};

export default Button1;