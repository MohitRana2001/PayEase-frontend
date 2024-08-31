export function Button({label, onClick}) {
    return <button
    onClick={onClick}
    type="button"
    className="bg-gray-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500"
>
    {label}
</button>
}