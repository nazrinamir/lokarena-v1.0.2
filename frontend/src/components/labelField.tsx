
export default function LabelField({ label, placeholder, value, onChange, type }: { label: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type: string }) {
    return (
        <div className='w-full p-4'>
            <label htmlFor="price" className="block text-xl font-medium text-white">
                {label}
            </label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                        id={`${label}-input`}
                        name={`${label}-input`}
                        type={`${type}`}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="block min-w-0 grow p-2 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                </div>
            </div>
        </div>
    )
}