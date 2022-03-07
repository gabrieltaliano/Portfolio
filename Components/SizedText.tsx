export default function SizedText({ className = '', text = '' }) {
    return (
        <label
            className={className}
            style={{ fontSize: `${100 / text.length}vmax` }}
        >
            {text}
        </label>
    )
}
