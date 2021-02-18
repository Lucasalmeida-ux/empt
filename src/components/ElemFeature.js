export default function Elem(props) {
    return(
    <div className="mb-8">
        {props.icons}
        <h1 className="text-md uppercase font-black pt-2">{props.title}</h1>
        <p className="text-sm text-gray-600">{props.desc}</p>
    </div>
    )
}