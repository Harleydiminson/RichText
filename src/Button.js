
export default function Button(props) {

    return (

        <button
            onClick={() => props.onClick(props.label)}
            className={props.className + ' button'}>
            {props.label}
        </button>

    );
}