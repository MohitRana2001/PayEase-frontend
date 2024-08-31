export const Balance = ({ value }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto mb-2">
            <div className="text-center mb-2">
                <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider">
                    Your Balance
                </div>
                <div className="text-2xl font-bold text-green-500 mt-2">
                    Rs {value.toFixed(2)}
                </div>
            </div>
        </div>
    );
};
