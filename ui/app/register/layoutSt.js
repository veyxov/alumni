export default function RegisterLayout(props) {
    console.log(props);
    return (
        <div className="flex">
            <div className="w-1/3 bg-slate-600">
                <div className="font-bold text-xl text-white my-14 mx-8">
                    Step {props.step}
                </div>
                <div className="mx-8 text-gray-50">
                    {props.title}
                </div>
            </div>
            <div className="w-2/3 bg-gray-300">
                <div className="ml-4">
                    <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
                    {props.children}
                </div>

            </div>
        </div>
    );
}
